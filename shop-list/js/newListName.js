import {
    ShopList,
    addNewListToMenu,
    createLi,
    extractFromLocalstorage,
    nameFromLocalStorage,
} from "./lists.js";
export let list = new ShopList("temp");

document.querySelector("#newList").addEventListener("click", () => {
    document.querySelector("#enterListName").style.display = "block";
    document.querySelector("#newList").style.display = "none";
});

// cencel button
document.querySelector("#cencel").addEventListener("click", () => {
    document.querySelector("#enterListName").style.display = "none";
    document.querySelector("#newList").style.display = "block";
    document.querySelector("#listName").value = null;
});

// create new list
document.querySelector("#create").addEventListener("click", () => {
    let listName = document.querySelector("#listName").value;
    list.name = listName;
    list.nametheList(list.name);
    document.querySelector("#enterListName").style.display = "none";
    document.querySelector("#newList").style.display = "block";
    document.querySelector("#listName").value = null;
    document.querySelector("#noListImg").style.display = "none";
    document.querySelector("#noListYet").style.display = "none";
    document.querySelector("#list").style.display = "block";
    document.querySelector(".checkbox").click();
    document.querySelector("#theList").display = "block";
});

// add new item on mouse click
document.querySelector("#add").addEventListener("click", () => {
    let AddNewItem = document.querySelector("#AddNewItem").value;
    if (AddNewItem) {
        document.querySelector("#theList").appendChild(createLi(AddNewItem));
    }
    list.addItem(AddNewItem);
    document.querySelector("#AddNewItem").value = null;

    // dropDown
    for (const iterator of document.querySelectorAll(".drop")) {
        iterator.addEventListener("click", (e) => {
            iterator.parentNode.parentNode.previousSibling.innerHTML =
                iterator.innerHTML;
        });
    }

    // trash button
    for (const iterator of document.querySelectorAll(".trash")) {
        iterator.addEventListener("click", () => {
            list.removeItem(iterator.parentNode.lastChild.innerHTML);
            iterator.parentElement.remove();
        });
    }
});

// add new item on enter press
document.querySelector("#AddNewItem").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let AddNewItem = document.querySelector("#AddNewItem").value;
        if (AddNewItem) {
            document
                .querySelector("#theList")
                .appendChild(createLi(AddNewItem));
        }
        list.addItem(AddNewItem);
        document.querySelector("#AddNewItem").value = null;
    }

    // dropDown
    for (const iterator of document.querySelectorAll(".drop")) {
        iterator.addEventListener("click", (e) => {
            iterator.parentNode.parentNode.previousSibling.innerHTML =
                iterator.innerHTML;
        });
    }

    // trash button
    for (const iterator of document.querySelectorAll(".trash")) {
        iterator.addEventListener("click", () => {
            list.removeItem(iterator.parentNode.lastChild.innerHTML);
            iterator.parentElement.remove();
        });
    }
});

// save to local storage
document.querySelector("#save").addEventListener("click", () => {
    let amounts = document.querySelectorAll(".btn");
    for (let i = 0; i < list.item.length; i++) {
        list.addAmount(amounts[i].innerHTML, i);
    }
    list.saveList(); // add list before
    // adds name to the nav bar
    addNewListToMenu(list.name);
});

// listener to list name input
window.addEventListener("input", () => {
    let name = document.querySelector("#listName").value;
    if (name != "") {
        document.querySelector("#create").disabled = false;
    } else {
        document.querySelector("#create").disabled = true;
    }
});

// on load things
window.addEventListener("load", () => {
    document.querySelector("#listName").value = null;
    document.querySelector("#create").disabled = true;
    document.querySelector("#list").style.display = "none";
    nameFromLocalStorage();
    for (const iterator of document.querySelectorAll(".loadListName")) {
        iterator.addEventListener("click", (e) => {
            extractFromLocalstorage(e.target.innerHTML);
        });
    }
});
