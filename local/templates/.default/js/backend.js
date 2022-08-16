document.addEventListener('DOMContentLoaded',function () {
    BX.showWait = function (element) {
        var loader = document.createElement('div');
        loader.innerHTML = '<div class="custom-loader" style="position:fixed;top:50%;left:50%;transform: translate(-50%,-50%);z-index: 10000 !important;"><img src="/local/templates/.default/img/bars.svg" alt="preloader"></div>';
        document.querySelector('body').appendChild(loader);
    };
    BX.closeWait = function (element) {
        if(document.querySelector('body .custom-loader')){
            document.querySelector('body .custom-loader').remove();
        }
    };
});