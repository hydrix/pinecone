const textInputEl = document.querySelector("#textInput")
const AddBtn = document.querySelector("#Btn")
const ToDoList = document.querySelector("#list")


AddBtn.addEventListener("click", () => {

    const AddList = document.createElement("li")

    const InputList = document.createElement("input")

    const DeleteBtn = document.createElement("button")

    DeleteBtn.textContent = "Delete";

    InputList.type = "checkbox";

    AddList.style.listStyle = "none";

    document.querySelector("#list").append(AddList)

    AddList.append(textInputEl.value)

    AddList.prepend(InputList)

    AddList.append(DeleteBtn)
});

