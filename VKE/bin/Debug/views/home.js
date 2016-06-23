VKE.home = function (params) {
    "use strict";

    var viewModel = {
        boy: ko.observable,
        kilo: ko.observable,

        hesapla: function () {
            var sonuc, kilo, boy, durum;

            kilo = parseFloat($('#kilo').dxTextBox('option', 'value'));
            boy = parseFloat($('#boy').dxTextBox('option', 'value'));
            sonuc = kilo / boy;

            if (0 < sonuc && sonuc < 18.4) {
                durum = "Zayıfsınız";
            }

            if (18.5 < sonuc && sonuc < 24.9) {
                durum = "Normalsiniz";
            }

            if (25.0 < sonuc && sonuc < 29.9) {
                durum = "Fazla Kilolusunuz";
            }

            if(30.0 < sonuc && sonuc < 34.9){
                durum = "I. Sınıf Şişmansınız";
            }

            if(35.0 < sonuc && sonuc < 44.9){
                durum = "II. Sınıf Şişmansınız";
            }

            if(45.0 <= sonuc){
                durum = "Obezsiniz";
            }

            $("#sonuc").dxTextBox('option', 'value', sonuc);
            $("#durum").dxTextBox('option', 'value', durum);
        }
    };

    return viewModel;
};