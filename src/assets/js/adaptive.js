; (function () {
    // 1rem = 100px;
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 750) {
            a = 750;
        }
        const rem = a / 7.5;
        // r.transform=scale(0.8)
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function () {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();

