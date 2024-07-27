$(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
        // ウィンドウの高さを取得
        const wHeight = $(window).height();
        // スクロールした量を取得
        const wScroll = $(window).scrollTop();
            // それぞれのblockクラスに対して…
            $(".isfadeIn").each(function () {
                // それぞれのblockクラスのウィンドウからの高さを取得
                const bPosition = $(this).offset().top;
                // スクロールした量が要素の高さを上回ったら
				console.log(bPosition)
                // その数値にウィンドウの高さを引き、最後に200pxを足す
            if (wScroll > bPosition - wHeight + 200) {
                $(this).addClass("fadeIn");
            }
        });
    });
});