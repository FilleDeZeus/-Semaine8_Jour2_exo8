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
let prop = ['border: 1px solid gold;','background-color: blue;','background-color: red;','border: 5px dotted gold;'];

let input = document.getElementsByTagName("input")[0]

input.onclick = function () {
    let hasard = Math.floor(Math.random()*prop.length);

    for(let i = 0; i < div.length; i++){
        div[i].classList = prop[hasard];
    }
}
