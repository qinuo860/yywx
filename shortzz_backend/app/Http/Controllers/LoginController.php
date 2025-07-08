<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use App\Models\GlobalSettings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

use function Psy\debug;

class LoginController extends Controller
{

    function login()
    {
        $setting = GlobalSettings::first();
        if ($setting) {
            Session::put('app_name', $setting->app_name);
        }
        Artisan::call('storage:link');
        if (Session::get('username') && Session::get('userpassword') && Session::get('user_type')) {
              $adminUser = Admin::where('admin_username',Session::get('username'))->first();
                 if(decrypt($adminUser->admin_password) == Session::get('userpassword')){
                     return redirect('dashboard');
                 }
        }
        return view('login');
    }

    function checkLogin(Request $request)
    {
        $data = Admin::where('admin_username', $request->username)->first();

        if ($data && $request->username == $data['admin_username'] && $request->password == decrypt($data->admin_password)) {

            $request->session()->put('username', $data['admin_username']);
            $request->session()->put('userpassword', $request->password);
            $request->session()->put('user_type', $data['user_type']);

            return response()->json([
                'status' => true,
                'message' => 'Login Successfully',
                'data' => $data,
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Wrong credentials!',
            ]);
        }
    }

    function logout()
    {
        session()->pull('username');
        session()->pull('user_type');
        session()->pull('userpassword');
        return  redirect(url('/'));
    }
}
