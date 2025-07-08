import 'dart:async';
import 'dart:io';

import 'package:cached_video_player_plus/cached_video_player_plus.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:shortzz/common/controller/base_controller.dart';
import 'package:shortzz/common/extensions/string_extension.dart';
import 'package:shortzz/common/functions/debounce_action.dart';
import 'package:shortzz/common/manager/logger.dart';
import 'package:shortzz/common/service/api/post_service.dart';
import 'package:shortzz/model/post_story/comment/fetch_comment_model.dart';
import 'package:shortzz/model/post_story/post_model.dart';
import 'package:shortzz/screen/comment_sheet/helper/comment_helper.dart';
import 'package:shortzz/screen/dashboard_screen/dashboard_screen_controller.dart';
import 'package:shortzz/screen/home_screen/home_screen_controller.dart';
import 'package:shortzz/screen/reels_screen/reel/reel_page_controller.dart';
import 'package:shortzz/screen/report_sheet/report_sheet.dart';
import 'package:shortzz/utilities/app_res.dart';

class ReelsScreenController extends BaseController {
  static const tag = 'REEL';
  RxBool isVideoDisposing = false.obs;

  DashboardScreenController dashboardController =
      Get.find<DashboardScreenController>();

  HomeScreenController homeScreenController = Get.find<HomeScreenController>();
  final RxDouble previousPosition = 0.0.obs;

  RxMap<int, CachedVideoPlayerPlusController> videoControllers =
      <int, CachedVideoPlayerPlusController>{}.obs;

  RxList<Post> reels = <Post>[].obs;
  RxInt position = 0.obs;
  Rx<TabType> selectedReelCategory = TabType.values.first.obs;
  PageController pageController = PageController();
  CommentHelper commentHelper = CommentHelper();
  Future<void> Function()? onFetchMoreData;
  Future<void> Function()? onRefresh;
  bool isHomePage;

  ReelsScreenController(
      {required this.reels,
      required this.position,
      required this.onFetchMoreData,
      this.onRefresh,
      required this.isHomePage});

  @override
  void onInit() {
    super.onInit();
    pageController = PageController(initialPage: position.value);
    if (isHomePage) {
      _setupDashboardController();
    }
    if (!isHomePage) {
      initVideoPlayer();
    }
  }

  @override
  void onClose() {
    super.onClose();
    disposeAllController();
  }

  void _setupDashboardController() {
    dashboardController.onBottomIndexChanged = (index) {
      if (index == 0) {
        videoControllers[position.value]?.play();
      } else {
        videoControllers[position.value]?.pause();
      }
    };
  }

  Future<void> _fetchMoreData() async {
    if (position >= reels.length - 3) {
      await onFetchMoreData?.call().then((value) {
        _initializeControllerAtIndex(position.value + 1);
      });
    }
  }

  void onReportTap() {
    Get.bottomSheet(
        ReportSheet(
            reportType: ReportType.post, id: reels[position.value].id?.toInt()),
        isScrollControlled: true);
  }

  Future<void> initVideoPlayer() async {
    /// Initialize 1st video
    await _initializeControllerAtIndex(position.value);

    /// Play 1st video
    _playControllerAtIndex(position.value);

    /// Initialize 2nd vide
    if (position >= 0) {
      await _initializeControllerAtIndex(position.value - 1);
    }
    await _initializeControllerAtIndex(position.value + 1);
  }

  void _playNextReel(int index) {
    _stopControllerAtIndex(index - 1); // Ensure previous reel is stopped
    _disposeControllerAtIndex(index - 2); // Dispose the older controller
    _playControllerAtIndex(index); // Play the new reel
    _initializeControllerAtIndex(index + 1); // Preload the next reel
  }

  void _playPreviousReel(int index) {
    _stopControllerAtIndex(index + 1); // Ensure next reel is stopped
    _disposeControllerAtIndex(index + 2); // Dispose the older controller
    _playControllerAtIndex(index); // Play the previous reel
    _initializeControllerAtIndex(index - 1); // Preload the previous reel
  }

  RxBool isLoadingVideo = false.obs;

  Future _initializeControllerAtIndex(int index) async {
    if (reels.length > index && index >= 0) {
      /// Create new controller
      final CachedVideoPlayerPlusController controller = reels.first.id == -1
          ? CachedVideoPlayerPlusController.file(File(reels.first.video ?? ''))
          : CachedVideoPlayerPlusController.networkUrl(
              Uri.parse((reels[index].video?.addBaseURL() ?? '')),
              invalidateCacheIfOlderThan: const Duration(seconds: 7));

      /// Add to [controllers] list
      videoControllers[index] = controller;
      isLoadingVideo.value = true;

      /// Initialize
      await controller.initialize();
      isLoadingVideo.value = false;

      Loggers.info('🚀🚀🚀 INITIALIZED $index');
      Loggers.info(
          '############################################################');
    }
  }

  void _playControllerAtIndex(int index) async {
    if (dashboardController.selectedPageIndex.value != 0 && isHomePage) {
      return;
    }
    if (reels.length > index && index >= 0) {
      CachedVideoPlayerPlusController? controller = videoControllers[index];
      if (controller != null && controller.value.isInitialized) {
        controller.play();
        controller.setLooping(true);
        videoControllers.refresh();
        DebounceAction.shared.call(() {
          _increaseViewsCount(reels[index]);
        }, milliseconds: 3000);
        Loggers.info('🚀🚀🚀 PLAYING $index');
      } else {
        await _initializeControllerAtIndex(index);
        _playControllerAtIndex(index);
      }
    }
  }

  void _increaseViewsCount(Post? post) async {
    if (post == null || post.id == null) {
      return Loggers.error('Post not found or ID is null');
    }

    final postId = post.id ?? -1;
    if (postId == -1) {
      return Loggers.error('Post ID $postId not found in reels');
    }

    final reelIndex = reels.indexWhere((element) => element.id == postId);
    if (reelIndex == -1) {
      return Loggers.error('Post ID $postId not found in reels');
    }

    final response =
        await PostService.instance.increaseViewsCount(postId: postId);

    if (response.status == true) {
      // Loggers.info('🚀 INCREASE VIEWS COUNT SUCCESSFUL');
      post.increaseViews();
      reels[reelIndex] = post;

      final controllerTag = postId.toString();
      if (Get.isRegistered<ReelController>(tag: controllerTag)) {
        Get.find<ReelController>(tag: controllerTag).updateReelData(reel: post);
      }
    }
  }

  void _stopControllerAtIndex(int index) {
    if (reels.length > index && index >= 0) {
      final controller = videoControllers[index];
      if (controller != null) {
        controller.pause();
        controller.seekTo(const Duration()); // Reset position
        Loggers.info('🚀🚀🚀 STOPPED $index');
      }
    }
  }

  void _disposeControllerAtIndex(int index) {
    if (reels.length > index && index >= 0) {
      final CachedVideoPlayerPlusController? controller =
          videoControllers[index];
      if (controller != null) {
        _stopControllerAtIndex(
            index); // Ensure the video is stopped before disposal
        controller.dispose();
        videoControllers.remove(index);
        Loggers.info('🚀🚀🚀 DISPOSED $index');
      }
    }
  }

  Future<void> disposeAllController() async {
    final controllersToDispose = videoControllers.values
        .toList(); // clone to avoid concurrent modification
    videoControllers
        .clear(); // clear early to prevent usage during async dispose

    for (var controller in controllersToDispose) {
      try {
        if (controller.value.isInitialized) {
          await controller.pause(); // Optional: pause before disposing
        }
        await controller.dispose();
      } catch (e, stack) {
        print('❌ Failed to dispose controller: $e');
        print(stack);
      }
    }
  }

  void onPageChanged(int index) {
    commentHelper.detectableTextFocusNode.unfocus();
    commentHelper.detectableTextController.clear();
    if (index > position.value) {
      _fetchMoreData();
      _playNextReel(index);
    } else {
      _playPreviousReel(index);
    }
    position.value = index;
  }

  void onUpdateComment(Comment comment, bool isReplyComment) {
    final post = reels.firstWhereOrNull((e) => e.id == comment.postId);
    if (post == null) {
      return Loggers.error('Post not found');
    }
    final controllerTag = post.id.toString();
    if (Get.isRegistered<ReelController>(tag: controllerTag)) {
      Get.find<ReelController>(tag: controllerTag)
          .reelData
          .update((val) => val?.updateCommentCount(1));
    }
  }

  Future<void> onRefreshPage(List<Post> reels) async {
    if (onRefresh != null) {
      position.value = 0;

      if (pageController.hasClients) {
        pageController.jumpToPage(position.value);
      }

      final CachedVideoPlayerPlusController controller =
          CachedVideoPlayerPlusController.networkUrl(
              Uri.parse((reels[position.value].video?.addBaseURL() ?? '')));
      await controller.initialize();

      // Step 2: Dispose old controllers not needed anymore
      disposeAllController();
      videoControllers[position.value] = controller;

      /// Play 1st video
      _playControllerAtIndex(position.value);
      await _initializeControllerAtIndex(position.value + 1);
    }
  }
}
