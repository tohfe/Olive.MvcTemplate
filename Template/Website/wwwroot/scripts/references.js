﻿requirejs.config({
    baseUrl: '/lib',
    paths: {
        // JQuery:
        "jquery": "jquery/dist/jquery",
        "jquery-ui": "jqueryui/jquery-ui",
        "jquery-validate": "jquery-validation/dist/jquery.validate",
        "jquery-validate-unobtrusive": "jquery-validation-unobtrusive/jquery.validate.unobtrusive",

        // Jquery plugins:
        "chosen": "chosen/chosen.jquery",
        "alertify": "alertifyjs/dist/js/alertify",
        "smartmenus": "smartmenus/src/jquery.smartmenus",
        "file-upload": "jquery-file-upload/js/jquery.fileupload",
        "typeahead": "jquery-typeahead/dist/jquery.typeahead.min",
        "combodate": "combodate/src/combodate",

        // Bootstrap
        "popper": "popper.js/dist/umd/popper",
        "bootstrap": "bootstrap/dist/js/bootstrap",
        "validation-style": "jquery-validation-bootstrap-tooltip/jquery-validate.bootstrap-tooltip",
        "file-style": "bootstrap-filestyle/src/bootstrap-filestyle",
        "spinedit": "bootstrap-spinedit/js/bootstrap-spinedit",
        "password-strength": "pwstrength-bootstrap/dist/pwstrength-bootstrap-1.2.7",
        "slider": "seiyria-bootstrap-slider/dist/bootstrap-slider.min",
        "moment": "moment/min/moment.min",
        "moment-locale": "moment/locale/en-gb",
        "datepicker": "eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker",

        // Olive
        "olive-ext-jquery": "olive.mvc/dist/extensions/jquery",
        "olive-page": "olive.mvc/dist/olivepage",
        "olive-config": "olive.mvc/dist/config",
        "app-page": "../scripts/AppPage",
    },
    map: {
        "*": {
            "jquery-ui/ui/widget": "jquery-ui",
            "Popper": "popper",
            "Popper.js": "popper",
            '../moment': 'moment',
            'olive': "olive.mvc/dist"
        }
    },
    shim: {
        "jquery-validate": ['jquery'],
        "validation-style": ['jquery', "jquery-validate", "bootstrap"],
        "combodate": ['jquery'],

        "typeahead": ['jquery'],
        "file-upload": ['jquery', 'jquery-ui'],
        "file-style": ["file-upload"],
        "chosen": ['jquery'],
        "smartmenus": ['jquery'],
        "jquery-validate-unobtrusive": ['jquery-validate'],
        'backbone.layoutmanager': ['backbone'],
        "bootstrap": ["jquery", "popper"],
        "spinedit": ['jquery'],
        "password-strength": ['jquery'],
        "moment-locale": ['moment'],
        "olive-ext-jquery": {
            deps: ['jquery', "jquery-validate-unobtrusive"],
            exports: '_'
        },
        "popper": {
            exports: '_'
        },
        "olive-page": ["alertify", "olive-ext-jquery", "combodate"]
    }
});


requirejs(["app-page", "olive-page",

    // JQuery:
    "jquery", "jquery-ui", "jquery-validate", "jquery-validate-unobtrusive", "olive-ext-jquery",

    // JQuery plugins:
    "chosen", "alertify", "smartmenus", "file-upload", "typeahead",

    // Bootstrap:
    "popper", "bootstrap",

    // Bootstrap plugins
    "moment", "moment-locale", "datepicker",
    "spinedit", "password-strength", "slider", "file-style",

    // "validation-style" ------> Error
],
    function (AppPage) {
        window.page = new AppPage.default();
    });