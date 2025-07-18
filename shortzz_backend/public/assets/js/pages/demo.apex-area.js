var colors = ["#fa6767"],
    dataColors = $("#basic-area").data("colors"),
    options = {
        chart: { height: 380, type: "area", zoom: { enabled: !1 } },
        dataLabels: { enabled: !1 },
        stroke: { width: 3, curve: "straight" },
        colors: (colors = dataColors ? dataColors.split(",") : colors),
        series: [{ name: "STOCK ABC", data: series.monthDataSeries1.prices }],
        title: { text: "Fundamental Analysis of Stocks", align: "left" },
        subtitle: { text: "Price Movements", align: "left" },
        labels: series.monthDataSeries1.dates,
        xaxis: { type: "datetime" },
        yaxis: { opposite: !0 },
        legend: { horizontalAlign: "left" },
        grid: { borderColor: "#f1f3fa" },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: { toolbar: { show: !1 } },
                    legend: { show: !1 },
                },
            },
        ],
    },
    chart = new ApexCharts(document.querySelector("#basic-area"), options),
    colors = (chart.render(), ["#727cf5", "#6c757d"]),
    dataColors = $("#spline-area").data("colors"),
    options = {
        chart: { height: 380, type: "area" },
        dataLabels: { enabled: !1 },
        stroke: { width: 3, curve: "smooth" },
        colors: (colors = dataColors ? dataColors.split(",") : colors),
        series: [
            { name: "Series 1", data: [31, 40, 28, 51, 42, 109, 100] },
            { name: "Series 2", data: [11, 32, 45, 32, 34, 52, 41] },
        ],
        legend: { offsetY: 5 },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        tooltip: { fixed: { enabled: !1, position: "topRight" } },
        grid: { borderColor: "#f1f3fa" },
    },
    colors =
        ((chart = new ApexCharts(
            document.querySelector("#spline-area"),
            options
        )).render(),
        $(document).ready(function () {
            function t(e) {
                var t = document.querySelectorAll("button");
                Array.prototype.forEach.call(t, function (e) {
                    e.classList.remove("active");
                }),
                    e.target.classList.add("active");
            }
            var e = ["#6c757d"],
                a = $("#area-chart-datetime").data("colors"),
                a =
                    (a && (e = a.split(",")),
                    {
                        annotations: {
                            yaxis: [
                                {
                                    y: 30,
                                    borderColor: "#999",
                                    label: {
                                        show: !0,
                                        text: "Support",
                                        style: {
                                            color: "#fff",
                                            background: "#00E396",
                                        },
                                    },
                                },
                            ],
                            xaxis: [
                                {
                                    x: new Date("14 Nov 2012").getTime(),
                                    borderColor: "#999",
                                    yAxisIndex: 0,
                                    label: {
                                        show: !0,
                                        text: "Rally",
                                        style: {
                                            color: "#fff",
                                            background: "#775DD0",
                                        },
                                    },
                                },
                            ],
                        },
                        chart: { type: "area", height: 350 },
                        stroke: { width: 3, curve: "smooth" },
                        colors: e,
                        dataLabels: { enabled: !1 },
                        series: [
                            {
                                data: [
                                    [13273596e5, 30.95],
                                    [1327446e6, 31.34],
                                    [13275324e5, 31.18],
                                    [13276188e5, 31.05],
                                    [1327878e6, 31],
                                    [13279644e5, 30.95],
                                    [13280508e5, 31.24],
                                    [13281372e5, 31.29],
                                    [13282236e5, 31.85],
                                    [13284828e5, 31.86],
                                    [13285692e5, 32.28],
                                    [13286556e5, 32.1],
                                    [1328742e6, 32.65],
                                    [13288284e5, 32.21],
                                    [13290876e5, 32.35],
                                    [1329174e6, 32.44],
                                    [13292604e5, 32.46],
                                    [13293468e5, 32.86],
                                    [13294332e5, 32.75],
                                    [13297788e5, 32.54],
                                    [13298652e5, 32.33],
                                    [13299516e5, 32.97],
                                    [1330038e6, 33.41],
                                    [13302972e5, 33.27],
                                    [13303836e5, 33.27],
                                    [133047e7, 32.89],
                                    [13305564e5, 33.1],
                                    [13306428e5, 33.73],
                                    [1330902e6, 33.22],
                                    [13309884e5, 31.99],
                                    [13310748e5, 32.41],
                                    [13311612e5, 33.05],
                                    [13312476e5, 33.64],
                                    [13315068e5, 33.56],
                                    [13315932e5, 34.22],
                                    [13316796e5, 33.77],
                                    [1331766e6, 34.17],
                                    [13318524e5, 33.82],
                                    [13321116e5, 34.51],
                                    [1332198e6, 33.16],
                                    [13322844e5, 33.56],
                                    [13323708e5, 33.71],
                                    [13324572e5, 33.81],
                                    [13327128e5, 34.4],
                                    [13327992e5, 34.63],
                                    [13328856e5, 34.46],
                                    [1332972e6, 34.48],
                                    [13330584e5, 34.31],
                                    [13333176e5, 34.7],
                                    [1333404e6, 34.31],
                                    [13334904e5, 33.46],
                                    [13335768e5, 33.59],
                                    [13339224e5, 33.22],
                                    [13340088e5, 32.61],
                                    [13340952e5, 33.01],
                                    [13341816e5, 33.55],
                                    [1334268e6, 33.18],
                                    [13345272e5, 32.84],
                                    [13346136e5, 33.84],
                                    [13347e8, 33.39],
                                    [13347864e5, 32.91],
                                    [13348728e5, 33.06],
                                    [1335132e6, 32.62],
                                    [13352184e5, 32.4],
                                    [13353048e5, 33.13],
                                    [13353912e5, 33.26],
                                    [13354776e5, 33.58],
                                    [13357368e5, 33.55],
                                    [13358232e5, 33.77],
                                    [13359096e5, 33.76],
                                    [1335996e6, 33.32],
                                    [13360824e5, 32.61],
                                    [13363416e5, 32.52],
                                    [1336428e6, 32.67],
                                    [13365144e5, 32.52],
                                    [13366008e5, 31.92],
                                    [13366872e5, 32.2],
                                    [13369464e5, 32.23],
                                    [13370328e5, 32.33],
                                    [13371192e5, 32.36],
                                    [13372056e5, 32.01],
                                    [1337292e6, 31.31],
                                    [13375512e5, 32.01],
                                    [13376376e5, 32.01],
                                    [1337724e6, 32.18],
                                    [13378104e5, 31.54],
                                    [13378968e5, 31.6],
                                    [13382424e5, 32.05],
                                    [13383288e5, 31.29],
                                    [13384152e5, 31.05],
                                    [13385016e5, 29.82],
                                    [13387608e5, 30.31],
                                    [13388472e5, 30.7],
                                    [13389336e5, 31.69],
                                    [133902e7, 31.32],
                                    [13391064e5, 31.65],
                                    [13393656e5, 31.13],
                                    [1339452e6, 31.77],
                                    [13395384e5, 31.79],
                                    [13396248e5, 31.67],
                                    [13397112e5, 32.39],
                                    [13399704e5, 32.63],
                                    [13400568e5, 32.89],
                                    [13401432e5, 31.99],
                                    [13402296e5, 31.23],
                                    [1340316e6, 31.57],
                                    [13405752e5, 30.84],
                                    [13406616e5, 31.07],
                                    [1340748e6, 31.41],
                                    [13408344e5, 31.17],
                                    [13409208e5, 32.37],
                                    [134118e7, 32.19],
                                    [13412664e5, 32.51],
                                    [13414392e5, 32.53],
                                    [13415256e5, 31.37],
                                    [13417848e5, 30.43],
                                    [13418712e5, 30.44],
                                    [13419576e5, 30.2],
                                    [1342044e6, 30.14],
                                    [13421304e5, 30.65],
                                    [13423896e5, 30.4],
                                    [1342476e6, 30.65],
                                    [13425624e5, 31.43],
                                    [13426488e5, 31.89],
                                    [13427352e5, 31.38],
                                    [13429944e5, 30.64],
                                    [13430808e5, 30.02],
                                    [13431672e5, 30.33],
                                    [13432536e5, 30.95],
                                    [134334e7, 31.89],
                                    [13435992e5, 31.01],
                                    [13436856e5, 30.88],
                                    [1343772e6, 30.69],
                                    [13438584e5, 30.58],
                                    [13439448e5, 32.02],
                                    [1344204e6, 32.14],
                                    [13442904e5, 32.37],
                                    [13443768e5, 32.51],
                                    [13444632e5, 32.65],
                                    [13445496e5, 32.64],
                                    [13448088e5, 32.27],
                                    [13448952e5, 32.1],
                                    [13449816e5, 32.91],
                                    [1345068e6, 33.65],
                                    [13451544e5, 33.8],
                                    [13454136e5, 33.92],
                                    [13455e8, 33.75],
                                    [13455864e5, 33.84],
                                    [13456728e5, 33.5],
                                    [13457592e5, 32.26],
                                    [13460184e5, 32.32],
                                    [13461048e5, 32.06],
                                    [13461912e5, 31.96],
                                    [13462776e5, 31.46],
                                    [1346364e6, 31.27],
                                    [13467096e5, 31.43],
                                    [1346796e6, 32.26],
                                    [13468824e5, 32.79],
                                    [13469688e5, 32.46],
                                    [1347228e6, 32.13],
                                    [13473144e5, 32.43],
                                    [13474008e5, 32.42],
                                    [13474872e5, 32.81],
                                    [13475736e5, 33.34],
                                    [13478328e5, 33.41],
                                    [13479192e5, 32.57],
                                    [13480056e5, 33.12],
                                    [1348092e6, 34.53],
                                    [13481784e5, 33.83],
                                    [13484376e5, 33.41],
                                    [1348524e6, 32.9],
                                    [13486104e5, 32.53],
                                    [13486968e5, 32.8],
                                    [13487832e5, 32.44],
                                    [13490424e5, 32.62],
                                    [13491288e5, 32.57],
                                    [13492152e5, 32.6],
                                    [13493016e5, 32.68],
                                    [1349388e6, 32.47],
                                    [13496472e5, 32.23],
                                    [13497336e5, 31.68],
                                    [134982e7, 31.51],
                                    [13499064e5, 31.78],
                                    [13499928e5, 31.94],
                                    [1350252e6, 32.33],
                                    [13503384e5, 33.24],
                                    [13504248e5, 33.44],
                                    [13505112e5, 33.48],
                                    [13505976e5, 33.24],
                                    [13508568e5, 33.49],
                                    [13509432e5, 33.31],
                                    [13510296e5, 33.36],
                                    [1351116e6, 33.4],
                                    [13512024e5, 34.01],
                                    [1351638e6, 34.02],
                                    [13517244e5, 34.36],
                                    [13518108e5, 34.39],
                                    [135207e7, 34.24],
                                    [13521564e5, 34.39],
                                    [13522428e5, 33.47],
                                    [13523292e5, 32.98],
                                    [13524156e5, 32.9],
                                    [13526748e5, 32.7],
                                    [13527612e5, 32.54],
                                    [13528476e5, 32.23],
                                    [1352934e6, 32.64],
                                    [13530204e5, 32.65],
                                    [13532796e5, 32.92],
                                    [1353366e6, 32.64],
                                    [13534524e5, 32.84],
                                    [13536252e5, 33.4],
                                    [13538844e5, 33.3],
                                    [13539708e5, 33.18],
                                    [13540572e5, 33.88],
                                    [13541436e5, 34.09],
                                    [135423e7, 34.61],
                                    [13544892e5, 34.7],
                                    [13545756e5, 35.3],
                                    [1354662e6, 35.4],
                                    [13547484e5, 35.14],
                                    [13548348e5, 35.48],
                                    [1355094e6, 35.75],
                                    [13551804e5, 35.54],
                                    [13552668e5, 35.96],
                                    [13553532e5, 35.53],
                                    [13554396e5, 37.56],
                                    [13556988e5, 37.42],
                                    [13557852e5, 37.49],
                                    [13558716e5, 38.09],
                                    [1355958e6, 37.87],
                                    [13560444e5, 37.71],
                                    [13563036e5, 37.53],
                                    [13564764e5, 37.55],
                                    [13565628e5, 37.3],
                                    [13566492e5, 36.9],
                                    [13569084e5, 37.68],
                                    [13570812e5, 38.34],
                                    [13571676e5, 37.75],
                                    [1357254e6, 38.13],
                                    [13575132e5, 37.94],
                                    [13575996e5, 38.14],
                                    [1357686e6, 38.66],
                                    [13577724e5, 38.62],
                                    [13578588e5, 38.09],
                                    [1358118e6, 38.16],
                                    [13582044e5, 38.15],
                                    [13582908e5, 37.88],
                                    [13583772e5, 37.73],
                                    [13584636e5, 37.98],
                                    [13588092e5, 37.95],
                                    [13588956e5, 38.25],
                                    [1358982e6, 38.1],
                                    [13590684e5, 38.32],
                                    [13593276e5, 38.24],
                                    [1359414e6, 38.52],
                                    [13595004e5, 37.94],
                                    [13595868e5, 37.83],
                                    [13596732e5, 38.34],
                                    [13599324e5, 38.1],
                                    [13600188e5, 38.51],
                                    [13601052e5, 38.4],
                                    [13601916e5, 38.07],
                                    [1360278e6, 39.12],
                                    [13605372e5, 38.64],
                                    [13606236e5, 38.89],
                                    [136071e7, 38.81],
                                    [13607964e5, 38.61],
                                    [13608828e5, 38.63],
                                    [13612284e5, 38.99],
                                    [13613148e5, 38.77],
                                    [13614012e5, 38.34],
                                    [13614876e5, 38.55],
                                    [13617468e5, 38.11],
                                    [13618332e5, 38.59],
                                    [13619196e5, 39.6],
                                ],
                            },
                        ],
                        markers: { size: 0, style: "hollow" },
                        xaxis: {
                            type: "datetime",
                            min: new Date("01 Mar 2012").getTime(),
                            tickAmount: 6,
                        },
                        tooltip: { x: { format: "dd MMM yyyy" } },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                opacityFrom: 0.7,
                                opacityTo: 0.9,
                                stops: [0, 100],
                            },
                        },
                    }),
                o = new ApexCharts(
                    document.querySelector("#area-chart-datetime"),
                    a
                );
            o.render();
            document
                .querySelector("#one_month")
                .addEventListener("click", function (e) {
                    t(e),
                        o.updateOptions({
                            xaxis: {
                                min: new Date("28 Jan 2013").getTime(),
                                max: new Date("27 Feb 2013").getTime(),
                            },
                        });
                }),
                document
                    .querySelector("#six_months")
                    .addEventListener("click", function (e) {
                        t(e),
                            o.updateOptions({
                                xaxis: {
                                    min: new Date("27 Sep 2012").getTime(),
                                    max: new Date("27 Feb 2013").getTime(),
                                },
                            });
                    }),
                document
                    .querySelector("#one_year")
                    .addEventListener("click", function (e) {
                        t(e),
                            o.updateOptions({
                                xaxis: {
                                    min: new Date("27 Feb 2012").getTime(),
                                    max: new Date("27 Feb 2013").getTime(),
                                },
                            });
                    }),
                document
                    .querySelector("#ytd")
                    .addEventListener("click", function (e) {
                        t(e),
                            o.updateOptions({
                                xaxis: {
                                    min: new Date("01 Jan 2013").getTime(),
                                    max: new Date("27 Feb 2013").getTime(),
                                },
                            });
                    }),
                document
                    .querySelector("#all")
                    .addEventListener("click", function (e) {
                        t(e),
                            o.updateOptions({
                                xaxis: { min: void 0, max: void 0 },
                            });
                    }),
                document
                    .querySelector("#ytd")
                    .addEventListener("click", function () {});
        }),
        ["#0acf97", "#ffbc00"]),
    dataColors = $("#area-chart-negative").data("colors"),
    options = {
        chart: { height: 380, type: "area" },
        dataLabels: { enabled: !1 },
        stroke: { width: 2, curve: "straight" },
        colors: (colors = dataColors ? dataColors.split(",") : colors),
        series: [
            {
                name: "North",
                data: [
                    { x: 1996, y: 322 },
                    { x: 1997, y: 324 },
                    { x: 1998, y: 329 },
                    { x: 1999, y: 342 },
                    { x: 2e3, y: 348 },
                    { x: 2001, y: 334 },
                    { x: 2002, y: 325 },
                    { x: 2003, y: 316 },
                    { x: 2004, y: 318 },
                    { x: 2005, y: 330 },
                    { x: 2006, y: 355 },
                    { x: 2007, y: 366 },
                    { x: 2008, y: 337 },
                    { x: 2009, y: 352 },
                    { x: 2010, y: 377 },
                    { x: 2011, y: 383 },
                    { x: 2012, y: 344 },
                    { x: 2013, y: 366 },
                    { x: 2014, y: 389 },
                    { x: 2015, y: 334 },
                ],
            },
            {
                name: "South",
                data: [
                    { x: 1996, y: 162 },
                    { x: 1997, y: 90 },
                    { x: 1998, y: 50 },
                    { x: 1999, y: 77 },
                    { x: 2e3, y: 35 },
                    { x: 2001, y: -45 },
                    { x: 2002, y: -88 },
                    { x: 2003, y: -120 },
                    { x: 2004, y: -156 },
                    { x: 2005, y: -123 },
                    { x: 2006, y: -88 },
                    { x: 2007, y: -66 },
                    { x: 2008, y: -45 },
                    { x: 2009, y: -29 },
                    { x: 2010, y: -45 },
                    { x: 2011, y: -88 },
                    { x: 2012, y: -132 },
                    { x: 2013, y: -146 },
                    { x: 2014, y: -169 },
                    { x: 2015, y: -184 },
                ],
            },
        ],
        xaxis: {
            type: "datetime",
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
        },
        yaxis: {
            tickAmount: 4,
            floating: !1,
            labels: { style: { color: "#8e8da4" }, offsetY: -7, offsetX: 0 },
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
        },
        fill: { opacity: 0.5, gradient: { enabled: !1 } },
        tooltip: {
            x: { format: "yyyy" },
            fixed: { enabled: !1, position: "topRight" },
        },
        legend: { offsetY: 5 },
        grid: {
            yaxis: { lines: { offsetX: -30 } },
            padding: { left: 0, bottom: 10 },
            borderColor: "#f1f3fa",
        },
    },
    colors =
        ((chart = new ApexCharts(
            document.querySelector("#area-chart-negative"),
            options
        )).render(),
        ["#FF7F00"]),
    dataColors = $("#area-chart-github2").data("colors"),
    optionsarea2 = {
        chart: {
            id: "chartyear",
            type: "area",
            height: 200,
            toolbar: { show: !1, autoSelected: "pan" },
        },
        colors: (colors = dataColors ? dataColors.split(",") : colors),
        stroke: { width: 0, curve: "smooth" },
        dataLabels: { enabled: !1 },
        fill: { opacity: 1, type: "solid" },
        series: [{ name: "commits", data: githubdata.series }],
        yaxis: { tickAmount: 10, labels: { show: !1 } },
        xaxis: { type: "datetime" },
    },
    chartarea2 = new ApexCharts(
        document.querySelector("#area-chart-github2"),
        optionsarea2
    ),
    colors = (chartarea2.render(), ["#7BD39A"]),
    options =
        ((dataColors = $("#area-chart-github").data("colors")) &&
            (colors = dataColors.split(",")),
        {
            chart: {
                height: 175,
                type: "area",
                toolbar: { autoSelected: "selection" },
                brush: { enabled: !0, target: "chartyear" },
                selection: {
                    enabled: !0,
                    xaxis: {
                        min: new Date("05 Jan 2014").getTime(),
                        max: new Date("04 Jan 2015").getTime(),
                    },
                },
            },
            colors: colors,
            dataLabels: { enabled: !1 },
            stroke: { width: 0, curve: "smooth" },
            series: [{ name: "commits", data: githubdata.series }],
            fill: { opacity: 1, type: "solid" },
            legend: { position: "top", horizontalAlign: "left" },
            xaxis: { type: "datetime" },
        }),
    colors =
        ((chart = new ApexCharts(
            document.querySelector("#area-chart-github"),
            options
        )).render(),
        ["#727cf5", "#0acf97", "#e3eaef"]),
    options =
        ((dataColors = $("#stacked-area").data("colors")) &&
            (colors = dataColors.split(",")),
        {
            series: [
                {
                    name: "South",
                    data: generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        { min: 10, max: 60 }
                    ),
                },
                {
                    name: "North",
                    data: generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        { min: 10, max: 20 }
                    ),
                },
                {
                    name: "Central",
                    data: generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        { min: 10, max: 15 }
                    ),
                },
            ],
            chart: {
                type: "area",
                height: 350,
                stacked: !0,
                events: {
                    selection: function (e, t) {
                        console.log(new Date(t.xaxis.min));
                    },
                },
            },
            colors: ["#008FFB", "#00E396", "#CED4DC"],
            dataLabels: { enabled: !1 },
            stroke: { curve: "monotoneCubic" },
            fill: {
                type: "gradient",
                gradient: { opacityFrom: 0.6, opacityTo: 0.8 },
            },
            legend: { position: "top", horizontalAlign: "left" },
            xaxis: { type: "datetime" },
        });
function generateDayWiseTimeSeries(e, t, a) {
    for (var o = 0, r = []; o < t; ) {
        var i = e,
            s = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min;
        r.push([i, s]), (e += 864e5), o++;
    }
    return r;
}
(chart = new ApexCharts(
    document.querySelector("#stacked-area"),
    options
)).render();
for (
    var ts1 = 13885344e5,
        ts2 = 13886208e5,
        ts3 = 13890528e5,
        dataSet = [[], [], []],
        i = 0;
    i < 12;
    i++
) {
    var innerArr = [(ts1 += 864e5), dataSeries[2][i].value];
    dataSet[0].push(innerArr);
}
for (i = 0; i < 18; i++) {
    innerArr = [(ts2 += 864e5), dataSeries[1][i].value];
    dataSet[1].push(innerArr);
}
for (i = 0; i < 12; i++) {
    innerArr = [(ts3 += 864e5), dataSeries[0][i].value];
    dataSet[2].push(innerArr);
}
(colors = ["#39afd1", "#fa5c7c", "#727cf5"]),
    (dataColors = $("#area-timeSeries").data("colors")) &&
        (colors = dataColors.split(",")),
    (options = {
        series: [
            { name: "PRODUCT A", data: dataSet[0] },
            { name: "PRODUCT B", data: dataSet[1] },
            { name: "PRODUCT C", data: dataSet[2] },
        ],
        chart: {
            type: "area",
            stacked: !1,
            height: 350,
            zoom: { enabled: !1 },
        },
        dataLabels: { enabled: !1 },
        markers: { size: 0 },
        colors: colors,
        fill: {
            gradient: {
                enabled: !0,
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [20, 100, 100, 100],
            },
        },
        yaxis: {
            labels: {
                style: { color: "#8e8da4" },
                offsetX: 0,
                formatter: function (e) {
                    return (e / 1e6).toFixed(0);
                },
            },
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
        },
        xaxis: {
            type: "datetime",
            tickAmount: 8,
            labels: {
                formatter: function (e) {
                    return moment(new Date(e)).format("DD MMM YYYY");
                },
            },
        },
        title: {
            text: "Irregular Data in Time Series",
            align: "left",
            offsetX: 14,
        },
        tooltip: { shared: !0 },
        legend: { position: "top", horizontalAlign: "right", offsetX: -10 },
    }),
    (chart = new ApexCharts(
        document.querySelector("#area-timeSeries"),
        options
    )).render(),
    (colors = ["#6c757d"]),
    (dataColors = $("#area-chart-nullvalues").data("colors")),
    (options = {
        series: [
            {
                name: "Network",
                data: [
                    { x: "Dec 23 2017", y: null },
                    { x: "Dec 24 2017", y: 44 },
                    { x: "Dec 25 2017", y: 31 },
                    { x: "Dec 26 2017", y: 38 },
                    { x: "Dec 27 2017", y: null },
                    { x: "Dec 28 2017", y: 32 },
                    { x: "Dec 29 2017", y: 55 },
                    { x: "Dec 30 2017", y: 51 },
                    { x: "Dec 31 2017", y: 67 },
                    { x: "Jan 01 2018", y: 22 },
                    { x: "Jan 02 2018", y: 34 },
                    { x: "Jan 03 2018", y: null },
                    { x: "Jan 04 2018", y: null },
                    { x: "Jan 05 2018", y: 11 },
                    { x: "Jan 06 2018", y: 4 },
                    { x: "Jan 07 2018", y: 15 },
                    { x: "Jan 08 2018", y: null },
                    { x: "Jan 09 2018", y: 9 },
                    { x: "Jan 10 2018", y: 34 },
                    { x: "Jan 11 2018", y: null },
                    { x: "Jan 12 2018", y: null },
                    { x: "Jan 13 2018", y: 13 },
                    { x: "Jan 14 2018", y: null },
                ],
            },
        ],
        chart: {
            type: "area",
            height: 350,
            animations: { enabled: !1 },
            zoom: { enabled: !1 },
        },
        dataLabels: { enabled: !1 },
        stroke: { curve: "straight" },
        colors: (colors = dataColors ? dataColors.split(",") : colors),
        fill: {
            opacity: 0.8,
            gradient: { enabled: !1 },
            pattern: {
                enabled: !0,
                style: ["verticalLines", "horizontalLines"],
                width: 5,
                depth: 6,
            },
        },
        markers: { size: 5, hover: { size: 9 } },
        title: { text: "Network Monitoring" },
        tooltip: { intersect: !0, shared: !1 },
        theme: { palette: "palette1" },
        xaxis: { type: "datetime" },
        yaxis: { title: { text: "Bytes Received" } },
    });
(chart = new ApexCharts(
    document.querySelector("#area-chart-nullvalues"),
    options
)).render();
