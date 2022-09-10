document.querySelector('#btn').addEventListener('click',search)

function search (){
    var text=document.querySelector('#phrases').innerHTML
    var mot=text.split(" ")
    var nbrmot=mot.length
    document.querySelector('#nbrm').innerHTML= "Nombre de mots : "+nbrmot

    var espace=text.split(" ").length -1
    document.querySelector("#nbre").innerHTML="Nombre d'espaces : "+espace

    var nbrvoyelles=0
    for(let i=0;i<text.length;i++){
        if( (text[i]=="a") || (text[i]=="e") || (text[i]=="u") || (text[i]=="i") || (text[i]=="o") || (text[i]=="y") ){
            nbrvoyelles+=1
        }
        document.querySelector('#nbrv').innerHTML="Nombre de voyelles : "+ nbrvoyelles
    }

  var nbrMajuscule=text.match(/[A-Z]/g).length
  document.querySelector('#nbrM').innerHTML="Nombre de lettres Majuscules : "+nbrMajuscule
}





var tab1=[4,2,5,6]
var tab2=[4,3,7,6]
let sum=0
for(let i=0;i<tab1.length;i++){
    if(tab1[i]!==tab2[i])
    sum+= (tab1[i]+tab2[i]) 
}
console.log(sum)
