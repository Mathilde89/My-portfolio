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
 console.log(i)
 console.log(newtableau[i] )
    i++
} else{
    moveTexte="En reconversion professionnelle en tant que developpeuse web, je vous présente mes compétences et mes projets réalisés :"

    

}    

},randomSpeed)