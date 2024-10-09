function add() {

    let text = document.querySelector("input")

    if (text.value.length <= 3) {
        alert("Enter your task")
        return
    }

    const li = document.createElement("li")
    li.innerHTML = text.value
    li.className = "listOfTask"
    const list = document.querySelector('#list')
    list.append(li)

    text.value = ""

    var editBtn = document.createElement("i");
    editBtn.classList.add("fas", "fa-pen-to-square");
    editBtn.style.color = "rgb(255, 167, 5)"
    editBtn.setAttribute("onclick", "editOnlyOne(this)");
    li.append(editBtn);

    var delBtn = document.createElement("i");
    delBtn.classList.add("fas", "fa-trash");
    delBtn.style.color = "rgb(255, 167, 5)"
    delBtn.setAttribute("onclick", "delOnlyOne(this)");
    li.append(delBtn);

}

function deletAllTask() {
    const list = document.getElementById("list")
    list.innerHTML = ""
}

function delOnlyOne(elem) {
    elem.parentNode.remove()
}

function editOnlyOne(elem) {
    console.log(elem.parentNode.firstChild)
    var editValue = prompt("Enter your todo")
    elem.parentNode.firstChild.nodeValue = editValue
}