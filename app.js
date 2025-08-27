let btn= document.querySelector("button");
let input=document.querySelector("#input");
let ul= document.querySelector("ul");
btn.addEventListener("click", function(event){
    let list = document.createElement('li');
    list.innerText= input.value;
    // Add delete Button
    let delbtn = document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    list.appendChild(delbtn);
    //Append list to Ul
    ul.appendChild(list);
    input.value="";

    //delete button event
    ul.addEventListener("click", function(event){
        if(event.target.nodeName=="BUTTON"){
            let listitem= event.target.parentElement;
            listitem.remove();
        }
    })
});