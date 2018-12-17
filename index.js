



$("#img1").addClass("current");
$("#img2").addClass("enter");
$("#img3").addClass("enter");
let n = 1;
setInterval(() => {
    $(`.wrapper > img:nth-child(${x(n)})`).removeClass('current').addClass("leave").one('transitionend',(e)=>{
        $(e.currentTarget).removeClass("leave").addClass('enter')
    })
    $(`.wrapper > img:nth-child(${x(n+1)})`).removeClass('enter').addClass("current")
    n++;
}, 1000);








function x(n){
    if(n>3){
      n = n%3
      if (n===0){
        n =3
      }
    } // n = 1 2 3
    return n
  }