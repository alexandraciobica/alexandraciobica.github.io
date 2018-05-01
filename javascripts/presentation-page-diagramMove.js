
$(document).ready(function() {

    var shown = 0;

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        var hT = $('#flow-diagram-container').offset().top,
            hH = $('#flow-diagram-container').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (!shown && wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
            //Do something
            shown = 1;
            show1();
            setTimeout(showDrawings1, 900);
            setTimeout(show2, 1500);
            setTimeout(showDrawings2, 2900)
            setTimeout(show3, 3100);
            setTimeout(showDrawings3, 4700)
            setTimeout(show4, 5000);
            setTimeout(showDrawings4, 5900)
        }
    });
});

function show1(){
    $("#p1").addClass('animation');
}

function show2(){
    $("#p2").addClass('animation');
}

function show3(){
    $("#p3").addClass('animation');
}

function show4(){
    $("#p4").addClass('animation');
}

function showDrawings1(){
    $(".a1").show().fadeIn;

}

function showDrawings2(){
    // var e = $(".a2");
    // e.show().effect("scale", {origin:['middle','center'],
    //     from:{width:e.width()/2,height:e.height()/2}, percent: 100, direction: 'both', easing: "easeOutBounce" }, 700);
    $(".a2").show().fadeIn;

}
function showDrawings3(){
    $(".a3").show().fadeIn();

}
function showDrawings4(){
    $(".a4").show().fadeIn();

}

// function boomIn() {
// .effect("scale", {origin:['middle','center'], from:{width:e.width()/2,height:e.height()/2}, percent: 100, direction: 'both', easing: "easeOutBounce" }, 700);
// }