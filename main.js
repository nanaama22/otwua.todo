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
 <button class="edit_btn">Edit</button>
 <button class="delete_btn">Delete</button>
 ` 
 const unOrderedList = document.querySelector("#todo__list")
 unOrderedList.appendChild(List) 
 addListenerToDelete()

 addListenerToEditor()
 


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

function editToDo(u){
    const targetButton = u.target
    const oneToDoItem = targetButton.previousElementSibling
    const field = document.querySelector(".form_input")
    if(u.target.innerHTML === "Edit"){
        targetButton.innerHTML = "save"
        field.focus()
    } else{
          oneToDoItem.innerHTML = field.value 
          targetButton.innerHTML = "Edit" 
        }
}
function addListenerToEditor(){
    const editButtons = document.querySelectorAll(".edit_btn")
    const lastEditButton = editButtons[editButtons.length-1]
    lastEditButton.addEventListener("click", editToDo)
}
const toDoForm = document.querySelector(".form")
toDoForm.addEventListener("submit", submitToDo)


