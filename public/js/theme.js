const themes = {
    "light": {
        "bg": "#eeeeeeff",
        "fg": "#202020ff",
        "offset": "#bbbbbbff",
        "highlight": "#aaaaaaff",
        "standout": "#777777ff",
        "off-bg": "#ddddddff",
        "off-fg": "#303030ff",
        "empty": "#ccccccff",
        "ok": "#88dd77ff",
        "bad": "#dd8877ff",
    },
    "dark": {
        "bg": "#202020ff",
        "fg": "#eeeeeeff",
        "offset": "#444444ff",
        "highlight": "#555555ff",
        "standout": "#999999ff",
        "off-bg": "#303030ff",
        "off-fg": "#ddddddff",
        "empty": "#ccccccff",
        "ok": "#88dd77ff",
        "bad": "#dd8877ff",
    },
    "green": {
        "bg": "#eeeeeeff",
        "fg": "#202020ff",
        "offset": "#99dd66ff",
        "highlight": "#aaee99ff",
        "standout": "#999999ff",
        "off-bg": "#c9d5c9ff", /* FIXME */
        "off-fg": "#303030ff",
        "empty": "#ccccccff",
        "ok": "#88dd77ff",
        "bad": "#dd8877ff",
    },
    "unimplemented": {
        "bg": "#eeeeeeff",
        "fg": "#202020ff",
        "offset": "#999999ff",
        "highlight": "#aaaaaaff",
        "standout": "#777777ff",
        "off-bg": "#ddddddff",
        "off-fg": "#303030ff",
        "empty": "#ccccccff",
        "ok": "#88dd77ff",
        "bad": "#dd8877ff",
    }
};

const populateThemes = () => {
    document.getElementsByTagName('head')[0].innerHTML += '<style id="theme-rules"></style>';
    let rules = document.getElementById('theme-rules');
    for (let theme in themes) {
        console.log('Adding theme: ' + theme);
        let t = themes[theme];
        let b = `body.theme-${theme}`;
        let themeStyles = `
            ${b} {
                background-color: ${t['bg']};
                color: ${t['fg']};
            }
            ${b} nav#main-nav {
                background-color: ${t['offset']};
            }
            ${b} nav#main-nav > #nav-open-close {
                background-color: ${t['bg']};
                border-bottom-color: ${t['offset']};
            }
            ${b} nav#main-nav.open > #nav-open-close > #nav-btn-ctr > .nav-btn-bar {
                background-color: ${t['fg']};
            }
            ${b} nav#main-nav.closed > #nav-open-close > #nav-btn-ctr > .nav-btn-bar {
                background-color: ${t['offset']};
            }
            ${b} nav#main-nav > ul > li > a:hover {
                background-color: ${t['highlight']};
            }
            ${b} h1 {
                color: ${t['fg']};
            }
            ${b} .situation-tile {
                background-color: ${t['off-bg']};
            }
            ${b} .fake-checkbox {
                background-color: ${t['empty']};
            }
            ${b} input:checked + label .fake-checkbox, .fake-checkbox.checked {
                background-color: ${t['ok']};
            }
            ${b} .butan {
                background-color: ${t['off-bg']};
            }
        `;
        rules.innerHTML += themeStyles;
    }
};

const applyTheme = (theme) => {
    console.log('Theme: ' + theme);
    let body = document.getElementsByTagName('body')[0];
    for (let t in themes) {
        body.classList.remove(`theme-${t}`);
    }
    if (!themes[theme]) theme = 'unimplemented';
    body.classList.add(`theme-${theme}`);
    document.getElementById('mobile-address-bar-color').content = themes[theme]['bg'];
    setPersistentTheme(theme);
};

const setPersistentTheme = (theme) => {
    setCookie('theme', theme);
};

const doThemes = () => {
    populateThemes();
    applyTheme(getCookie()['theme']||'unimplemented');
};

document.addEventListener('DOMContentLoaded', doThemes);