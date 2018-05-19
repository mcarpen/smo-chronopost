(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

        var num = parseInt(Math.random() * 100000, 10);
        setTimeout(function () {
            $('.cou-item').find('ul').each(function (i, el) {
                var val = pad(num, 5, 0).split("");
                var $el = $(this);
                $el.removeClass();
                $el.addClass('goto-' + val[i]);
            })
        }, 1000);

        setTimeout(function () {
            counter();
        }, 2500);

        function pad(n, width, z) {
            z = z || '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }

        function counter() {
            setInterval(function () {
                $('.cou-item').find('ul').each(function (i, el) {
                    num += 1;
                    var val = pad(num, 5, 0).split("");
                    var $el = $(this);
                    $el.removeClass();
                    $el.addClass('goto-' + val[i]);
                })
            }, 2500);
        }
    });

})(jQuery);