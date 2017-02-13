var nav = document.getElementById("nav2")
var list = document.getElementById("nav2-list")
var num = 0;

window.onload=function(){
  nav.onclick=function(){
    num++;
    if(num%2 ==1 ){
        list.style.display="block";
    }else{
      list.style.display="none";
    }

  }
}
