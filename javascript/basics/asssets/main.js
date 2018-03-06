function orderList() {
    document.getElementById("addremove").style.display = "block";
}

function Add1() {
    var ol = document.getElementById('order');
    var input = document.getElementById("text");
    var li = document.createElement("li");
    li.setAttribute('id', input.value);
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
}

function remove1() {
    var ol = document.getElementById("order");
    var input = document.getElementById("text");
    var data = document.getElementById(input.value);
    ol.removeChild(data);
}

function unorderList() {
    var add = document.createElement("button");
    var remove = document.createElement("button");
    var input = document.createElement("input");
    add.id = "add";
    remove.id = "remove";
    input.id = "input";
    add.innerHTML = "Add";
    remove.innerHTML = "Remove";
    document.querySelector("#data").appendChild(input);
    document.querySelector("#data").appendChild(add);
    document.querySelector("#data").appendChild(remove);
    add.onclick = addUl;
    remove.onclick = removeUl;
}

function addUl() {
    var ul = document.getElementById('ul');
    var input = document.getElementById('input');
    var li = document.createElement('li');
    li.setAttribute("id", input.value);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
}

function removeUl() {
    var ul = document.getElementById('ul');
    var input = document.getElementById('input');
    var data = document.getElementById(input.value);
    ul.removeChild(data);
}
