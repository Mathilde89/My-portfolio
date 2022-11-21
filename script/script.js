////////////////////////////////////////////////////////////////////////////
//Animation pour le texte de présentation
const texte = "En reconversion professionnelle en tant que developpeuse web, je vous présente mes compétences et mes projets réalisés :"
// const texte="depuis"
const newtableau = texte.split('')
const para = document.querySelector('p')


let moveTexte = ""
let i = 0;
let randomSpeed = 100

setInterval(function () {


  if (i <= newtableau.length - 1) {
    moveTexte = moveTexte + newtableau[i]
    para.innerHTML = moveTexte
    //  console.log(i)
    //  console.log(newtableau[i] )
    i++
  } else {
    moveTexte = "En reconversion professionnelle en tant que developpeuse web, je vous présente mes compétences et mes projets réalisés :"



  }

}, randomSpeed)

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


////////////////////////////////////////////////////////////////////////////
//Animation les projets

//Fontion animation des projets
function animationprojets(class1, class2, class3, animOut, animIn) {
  const rectoClass = document.querySelector(class1);
  const versoClass = document.querySelector(class2)
  const inu3Class = document.querySelector(class3)
  const acceuil=document.querySelector("#acceuil")
  const iconeClose= versoClass.querySelector("i")
  versoClass.style.height = "230px"
  versoClass.style.width = "230px"
  rectoClass.style.height = "230px"
  rectoClass.style.width = "230px"

  versoClass.style.display = 'none'
  inu3Class.style.display = 'none'
  rectoClass.addEventListener('mouseenter', () => {

    rectoClass.classList.add('animate__animated', animOut);
    rectoClass.style.setProperty('--animate-duration', '1s');
    rectoClass.addEventListener('animationend', () => {
      versoClass.style.display = 'inline-block'
      rectoClass.style.display = 'none'
      versoClass.classList.add('animate__animated', animIn);
      versoClass.style.setProperty('--animate-duration', '1s');

          versoClass.addEventListener('animationend', () => {
          // versoClass.addEventListener('click', () => {
                      
            inu3Class.style.display = 'inline-block'
            inu3Class.style.width = "230px"
            inu3Class.style.height = "230px"
            versoClass.classList.add("modal");
            versoClass.style.width = "550px"
            versoClass.style.height = "550px"
            iconeClose.style.fontSize= "25px"
            console.log("clickdiv")
            
            iconeClose.addEventListener('click', () => {
              console.log("click icone")
              versoClass.classList.remove("modal");
              versoClass.style.height = "230px"
              versoClass.style.width = "230px"
              inu3Class.style.display = 'none'
              console.log("coucou")
              
            // })
          
          })
         
        });
         
    });
  });
}
//Animation TodoListe
animationprojets('.todo1', '.todo2', '.todo3', 'animate__bounceOut', 'animate__bounceIn')
//Animation Le café de la place
animationprojets('.cafe1', '.cafe2', '.cafe3', 'animate__flipOutY', 'animate__flipInY')
//Animation Matrix
animationprojets('.matrix1', '.matrix2', '.matrix3', 'animate__zoomOut', 'animate__zoomIn')
animationprojets('.food1', '.food2', '.food3', 'animate__zoomOut', 'animate__zoomIn')
animationprojets('.air1', '.air2', '.air3', 'animate__zoomOut', 'animate__zoomIn')


//Display CV
const cv = document.querySelector("embed");
const parcours = document.querySelector("#parcours");
const buttonCv = parcours.querySelector("button");
cv.style.display = 'none'
let bool=false;

buttonCv.addEventListener('click', ()=> {
  if(bool){
    cv.style.display = 'none'
    bool=false;
    
  } else{
    cv.style.display = 'inline-block'
    bool=true;

  }

})


