function submitToDo(e){
    e.preventDefault()
    const inputField = document.querySelector(".form__input")
    const inputFieldValue = inputField.value
    showAllToDo(inputFieldValue)
    inputField.value = ""



}
function showAllToDo(toDoItem){
 let List  = document.createElement("li") 
 List.innerHTML = `
 <span>${toDoItem}</span>
 <button>Edit</button>
 <button class="delete_btn">Delete</button>
 ` 
 const unOrderedList = document.querySelector("#todo__list")
 unOrderedList.appendChild(List) 
 addListenerToD
 
 
 
 
 
 elete()

}

function deleteToDo(z){  
const targetButton = z.target
const oneToDoItem = targetButton.parentNode
oneToDoItem.remove()

}


function addListenerToDelete(){
    const deleteButtons = document.querySelectorAll(".delete_btn")
    const lastDeleteButton = deleteButtons[deleteButtons.length-1]
    lastDeleteButton.addEventListener("click", deleteToDo )

}



const toDoForm = document.querySelector(".form")
toDoForm.addEventListener("submit", submitToDo)


