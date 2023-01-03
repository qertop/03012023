window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("gtop").style.top = "-30px";
    document.getElementById("toptop").style.top = "-30px";
    document.getElementById("toptop").style.paddingTop = "17px";
    document.getElementById("toptop").style.height = "40px";
  } else {
    document.getElementById("gtop").style.top = "10px";
    document.getElementById("toptop").style.top = "-5px";
    document.getElementById("toptop").style.paddingTop = "30px";
    document.getElementById("toptop").style.height = "40px";
  }
}
