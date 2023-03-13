


let bgContainerEl=document.createElement("div");
bgContainerEl.classList.add("bgcontainer");
document.body.appendChild(bgContainerEl);


let headingEl=document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent="Grocery List";
bgContainerEl.appendChild(headingEl);






let listContainerEl=document.createElement("ul");
listContainerEl.classList.add("list-Container");
bgContainerEl.appendChild(listContainerEl);

let groceryItems=["Milk","Chocolates","Fruits","Vegetables","Biscuits"];


for (let groceryItem of groceryItems){
    let listItemEL = document.createElement("li");
    listItemEL.textContent=groceryItem;
    listContainerEl.appendChild(listItemEL);
}

let buttonEl=document.createElement("input")
buttonEl.type="checkbox";
buttonEl.id="deliveryMode";
bgContainerEl.appendChild(buttonEl);


let labelEl=document.createElement("label");
labelEl.setAttribute("for","deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent="Need Home Delivery";
bgContainerEl.appendChild(labelEl);

let btnEl=document.createElement("button")
btnEl.id="btn"
btnEl.textContent="Proceed to Pay"
bgContainerEl.appendChild(btnEl)
