////////////////////////////////////////////////////////////////////////////
//Animation pour le texte de présentation
const texte="En reconversion professionnelle en tant que developpeuse web, je vous présente mes compétences et mes projets réalisés :"
// const texte="depuis"
const newtableau = texte.split('')
const para = document.querySelector('p')


let moveTexte=""
let i=0;
let randomSpeed=100

setInterval(function(){
    
 
if(i<= newtableau.length-1){
    moveTexte=moveTexte+newtableau[i]       
    para.innerHTML = moveTexte
//  console.log(i)
//  console.log(newtableau[i] )
    i++
} else{
    moveTexte="En reconversion professionnelle en tant que developpeuse web, je vous présente mes compétences et mes projets réalisés :"

    

}    

},randomSpeed)

////////////////////////////////////////////////////////////////////////////
//Animation pour souligner le menu sur le scroll

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav div ul a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");


    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();