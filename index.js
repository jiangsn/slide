



$("#img1").addClass("current");
$("#img2").addClass("enter");
$("#img3").addClass("enter");
var n = 1;
var timerId = start();
function start() {
    return setInterval(() => {
        $(`.wrapper > img:nth-child(${x(n)})`).removeClass('current').addClass("leave").one('transitionend', (e) => {
            $(e.currentTarget).removeClass("leave").addClass('enter')
        })
        $(`.wrapper > img:nth-child(${x(n + 1)})`).removeClass('enter').addClass("current")
        n++;
    }, 2000);
}

$('.wrapper').on('mouseenter', function () {

    window.clearInterval(timerId)
})

$('.wrapper').on('mouseleave', function () {
    timerId = start()
})


function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    } // n = 1 2 3
    return n
}