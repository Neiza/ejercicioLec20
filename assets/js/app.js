document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-background').style.display="none";
     document.getElementById("nav-header").classList.remove("header-in");
     document.getElementById("nav-header").style.opacity = 0;
   } else {
     document.getElementById('nav-background').style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
      }

      codersLIst();
   }
   lastScrollTop = currentScroll;
}, false);


function Coders(img, nombre){
  this.img = img;
  this.nombre = nombre;
}


function codersLIst(){
  var objCoders = [];
    for(i=0; i<document.imges.length; i++){
      var r = document.images.src = "assets/img/images/students/"+i+".jpg";
      var coder = new Coders(r,)
      objCoders.push("coder")
      var li = document.createElement("li");
      var divContImag = document.createElement("div");
      var figure = document.createElement("figure");
      var img = document.createElement("img");
      var rutaImg = "assets/img/images/students/"+i+".png";
      var figcaption = document.createElement("figcaption");
      var span = document.createElement("span");
      var ul = getElementById("ul");

      li.appendChild(divContImag);
      divContImag.appendChild(figure);
      figure.appendChild(img);
      figure.appendChild(figcaption);
      figcaption.appendChild(span);
      ul.appendChild(li);
      img.setAttribute("src", rutaImg);

  }
}
