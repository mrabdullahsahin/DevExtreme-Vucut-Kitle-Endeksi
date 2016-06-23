window.VKE = window.VKE || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Guide/#themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if(window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !VKE.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    VKE.app = new DevExpress.framework.html.HtmlApplication({
        namespace: VKE,
        layoutSet: DevExpress.framework.html.layoutSets[VKE.config.layoutSet],
        navigation: VKE.config.navigation,
        commandMapping: VKE.config.commandMapping
    });
    VKE.app.router.register(":view/:id", { view: "home", id: undefined });
    VKE.app.on("navigatingBack", onNavigatingBack);
    VKE.app.navigate();
});
