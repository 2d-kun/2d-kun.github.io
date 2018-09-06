jQuery.download = function (url, data, callback) {
    if (jQuery.browser.msie) {
        download(url, data, callback);
    } else {
        setTimeout(function() {
            download(url, data, callback);
        }, 100);
    }
};

var download = function(url, data, callback) {
    //url and data options required
    if (url && data) {

        var token = Math.random();

        data["filedownloadtoken"] = token;

        var inputs = '';
        jQuery.each(data, function (k, v) {
            inputs += '<input type="hidden" name="' + k + '" value="' + v + '" />';
        });

        //send request
        var form =
            jQuery('<form action="' + url + '" method="post">' + inputs + '</form>')
            .appendTo('body')

        var checkIntervalDownload;
        form.submit(function () {
            checkIntervalDownload =
                setInterval(function () {
                    var cookie = jQuery.cookie('filedownloadtoken');
                    if (cookie == token) {
                        callback();
                        form.remove();
                        clearInterval(checkIntervalDownload);
                    }
                }, 2000);
        }).submit();

    };
}

/* The server should send a token when send the file          */
/* Usage example:                                             */
/*
uiBlock.start();
$J.download(url, params, function() {
      uiBlock.stop();
});
*/