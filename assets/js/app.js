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

   }
   lastScrollTop = currentScroll;
}, false);


function Coders(img, nombre){
  this.img = img;
  this.nombre = nombre;
}
var codersImgNombre = [];
var nombres = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Burga",
               "Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme",
               "Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez",
               "Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia",
               "Fiorella Cisneros","Geraldine Chauca","Yelitza Rivera","Stephanie Hiyagon",
               "Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
               "Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello",
               "Leslie Avendaño", "Cindy Mendoza","Annia Flores","Betsi Loayza",
               "Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor",
               "Maia Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez",
               "Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo",
               "Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes",
               "Cinthia Stark","Maria Grecia Cutipa","Ana Durand","Glisse Jorge",
               "Neiza Nuñez","Sandra Solorzano"];

function codersLIst(){
    for(var i=1; i<nombres.length; i++){
        var li = document.createElement("li");
        li.classList.add("box")
        var divContImag = document.createElement("div");
        divContImag.classList.add("grid")
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        img.classList.add("img-box");
        img.setAttribute("src", "assets/img/images/students/"+i+".png");
        var figcaption = document.createElement("figcaption");
        figcaption.classList.add("center")
        var span = document.createElement("span");
        var textSpan = document.createTextNode(nombres[i-1]);
        var ul = document.getElementById("ul");

        li.appendChild(divContImag);
        divContImag.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        figcaption.appendChild(span);
        span.appendChild(textSpan)
        ul.appendChild(li);
      //  var Ocoders = new objCoders(img.src, nombres[i-1]);
        //codersImgNombre.push(Ocders);
  }
}
window.addEventListener("load", function(){
  codersLIst();

})
