// Pour l'exercice 2
let pcontent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"


// //EXERCICE 1

let div = document.querySelectorAll("div");

for (let i = 0; i < div.length; i++){
    div[i].onclick = function(){
        console.log(div[i]);
    }
}

//EXERCICE 2
for (let i = 0; i < div.length; i++){
    div[i].ondblclick = function(){
        div[i].innerText =  div[i].innerText.toUpperCase();
    }
}



//EXERCICE 3

let style = {
    bd: "border: 1px solid gold",
    bc1: "background-color:blue",
    bc2: "color: red"
}




let btnGo = document.getElementsByTagName("input")[0]
btnGo.addEventListener("click",()=>{
  
    let tabs = [style.bd,style.bc1,style.bc2]
    let randomi = (tabs[Math.floor(Math.random() * tabs.length )])
    


    console.log(randomi);

        let p = document.querySelector('p')
        p.style=randomi

})