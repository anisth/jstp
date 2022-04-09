// var ch = document.getElementById("test").innerHTML="bonjour"
function verifname(ch){
    test=1;
    for(let i=0; i <ch.value.length ; i++){
     if((ch.value.charAt(i)<"A" || ch.value.charAt(i)>"Z") && (ch.value.charAt(i)<"a" || ch.value.charAt(i)>"z") ){
         test=0;
     }
     else test=1
 }
 return test
 }
 function verifemail(ch){
     test=1
     if(ch.value.indexOf("@")==-1 && ch.value.indexOf(".")==-1){
         test=0
     }
     else{
         test=1
     }
     return test
 }
 function verifage(ch){
     test=1;
    for(let i=0; i <ch.value.length ; i++){
     if(ch.value.charAt(i)<"0" || ch.value.charAt(i)>"9") {
         test=0;
     }
     else test=1
 }
 return test
 
 }
 
 
 function verif(){
 var name=document.getElementById("name");
 var name1=document.querySelector("#name");
 var email=document.getElementById("email");
 var email1=document.querySelector("#email");
 var age=document.getElementById("age");
 var age1=document.querySelector("#age");
 
 //verif name
 if(name.value==""){
     document.getElementById("erreur1").innerHTML="name choix obligatoire"
     name1.style.backgroundColor="red"
     alert("name choix obligatoire")
 }
 else if(verifname(name)==0){
     
     document.getElementById("erreur1").innerHTML="caractere seulement !"
     name1.style.backgroundColor="red"
 }
 else{
     document.getElementById("erreur1").innerHTML=""
     name1.style.backgroundColor="white"
 }
 
 
 
 //verif email
 if(email.value==""){
     document.getElementById("erreur2").innerHTML=" email choix obligatoire"
 alert("email choix obligatoire")
 email1.style.backgroundColor="red"
 }
 else if(verifemail(email)==0){
     document.getElementById("erreur2").innerHTML="manque de @ ou . ou le deux"
     email1.style.backgroundColor="red"
 }
 else {
     document.getElementById("erreur2").innerHTML="" 
     email1.style.backgroundColor="white"
 }
 
 
 
 //email age  
 if(age.value==""){
     document.getElementById("erreur3").innerHTML=" age choix obligatoire"
 alert("age choix obligatoire")
 age1.style.backgroundColor="red"
 }
 else if(verifage(age)==0){
     document.getElementById("erreur3").innerHTML=" age nombre seulement !"
     age1.style.backgroundColor="red"
 }
 else{
     document.getElementById("erreur3").innerHTML=""
     age1.style.backgroundColor="white"
 }
     
 }
 