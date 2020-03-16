const head_content = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta id="mobile-address-bar-color" name="theme-color" content="" />
    <link href="css/site.css" rel="stylesheet" type="text/css" />
    <link href="css/elements.css" rel="stylesheet" type="text/css" />
    <link href="css/nav.css" rel="stylesheet" type="text/css" />

    <!-- Fullscreen and web app things -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <link href="/manifest.json" rel="manifest" />
`;

const main_nav_content = `
    <div id="nav-open-close">
        <div id="nav-btn-ctr">
            <div class="nav-btn-bar top"></div>
            <div class="nav-btn-bar mid"></div>
            <div class="nav-btn-bar bot"></div>
        </div>
    </div>
    <ul class="plain">
        <li class="plain"><a class="plain" href="/dashboard.html">Dashboard</a></li>
        <li class="plain"><a class="plain" href="#">Timeline</a></li>
        <li class="plain"><a class="plain" href="#">Account</a></li>
        <li class="plain"><a class="plain" href="/new-page-template.html">Template</a></li>
        <li class="plain"><a class="plain" href="/testing-utils.html">Testing utilities</a></li>
    </ul>
    <div id="nav-click-catcher"></div>
`;

document.addEventListener('DOMContentLoaded', (evt) => {
    document.getElementsByTagName('head')[0].innerHTML += head_content;
    document.getElementById('main-nav').innerHTML = main_nav_content;
});