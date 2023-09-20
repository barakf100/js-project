import { list } from "./newListName.js";

// shoplist class
export class ShopList {
    name;
    item;
    constructor(name) {
        this.name = name;
        this.item = [];
        this.nametheList(name);
    }
    addItem(item, amount) {
        this.item = [...this.item, [item, amount]];
    }
    removeItem(item) {
        let index = this.item.indexOf(item);
        if (index != -1) this.item.splice(index, 1);
    }
    nametheList(name) {
        document.querySelector("#oneListName").innerHTML = `${name}'s list`;
    }
    addAmount(amount, index) {
        this.item[index][1] = amount;
    }
    saveList() {
        localStorage.setItem(this.name, this.item);
    }
}
/* create new line in the shop list with :
    dropDown , trash ,name 
 */
export const createLi = (itemName) => {
    let li = document.createElement("li"),
        input = document.createElement("input"),
        label = document.createElement("label"),
        span = document.createElement("span"),
        button = document.createElement("button"),
        ul = document.createElement("ul");
    ul = dropDown(ul);
    ul.classList = "dropdown-menu p-0";
    button.classList =
        "btn btn-secondary dropdown-toggle py-0 me-1 ms-1 px-1 position-absolute start-0";
    button.innerHTML = "#";
    button.type = "button";
    button.dataset.bsToggle = "dropdown";
    button.ariaExpanded = "false";
    li.classList = "list-group-item pe-5 ps-0";
    input.classList = "form-check-input me-1 ms-2";
    input.type = "checkbox";
    label.classList = "form-check-label";
    label.innerHTML = itemName;
    span.classList = "trash input-group-text position-relative start-100";
    span.style.display = "inline";
    span.innerHTML = "🗑";
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(ul);
    li.appendChild(input);
    li.appendChild(label);
    return li;
};
// handle bootstrap dropdown
const dropDown = (ul) => {
    let li, a;
    for (let i = 1; i < 11; i++) {
        li = document.createElement("li");
        li.classList = "bg-secondary text-center";
        a = document.createElement("a");
        a.innerHTML = i;
        a.classList = "drop text-light text-decoration-none";
        a.href = "#";
        li.appendChild(a);
        ul.appendChild(li);
    }
    ul.style.minWidth = "2rem";
    return ul;
};

// adds the saved list to the menu
export const addNewListToMenu = (name) => {
    let menu = document.querySelector(".menu-items"),
        li = document.createElement("li"),
        a = document.createElement("a");
    a.classList = "loadListName";
    a.innerHTML = name;
    a.style.color = "#484444";
    li.appendChild(a);
    menu.appendChild(li);
};

// extract list from local storage back to the page
export const extractFromLocalstorage = (name) => {
    let json = localStorage.getItem(name),
        jsonArr;
    document.querySelector("#noListImg").style.display = "none";
    document.querySelector("#noListYet").style.display = "none";
    document.querySelector("#theList").display = "block";
    document.querySelector("#list").style.display = "block";
    document.querySelector("#oneListName").innerHTML = `${name}'s list`;
    jsonArr = json.split(",");
    document.querySelector("#theList").innerHTML = ""; //clear
    for (let index = 0; index < jsonArr.length; index += 2) {
        document
            .querySelector("#theList")
            .appendChild(createLi(jsonArr[index]));
        list.addItem(jsonArr[index]);
    }
    putNumbersIsList(jsonArr); //function
    list.name = name;
    document.querySelector(".checkbox").click();
};

// get the amounts from local storage to the page
const putNumbersIsList = (arrFromJson) => {
    let amounts = document.querySelectorAll("ol li .btn"),
        j = 0;
    for (let index = 1; index < arrFromJson.length; index += 2) {
        amounts[j++].innerHTML = arrFromJson[index];
    }
};

export const nameFromLocalStorage = () => {
    for (let i = 0; i < localStorage.length; i++) {
        addNewListToMenu(localStorage.key(i));
    }
};
