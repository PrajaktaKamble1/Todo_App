let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
// console.dir(inp);
btn.addEventListener("click",function() {
    let li = document.createElement("li");
    // console.dir(li);
    li.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value= "";
});

// let delbtns = document.querySelectorAll(".delete");
//  for(delbtn of delbtns)
//  {
//     delbtn.addEventListener("click",function() {
//         let par = this.parentElement;
//         par.remove();
//     });
//  }

//Event Delegation

ul.addEventListener("click",function() {
    //console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON") {
        let itemDel = event.target.parentElement;
        itemDel.remove();
        console.log("Deleted");
    }
});