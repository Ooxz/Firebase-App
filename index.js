import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-c0163-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const addBtn = document.getElementById("add-button")
const inputField = document.getElementById("input-field")
const shoppingList = document.getElementById("shopping-list")

addBtn.addEventListener("click", inputFieldValue)


const clearInputField = () => {
	inputField.value = ""
}

const shoppingListInnerHTML = (inputValue) => {
	shoppingList.innerHTML += `<li>${inputValue}</li>`
}

function inputFieldValue() {
	let inputValue = inputField.value
	clearInputField()
	push(shoppingListInDB, inputValue)
	shoppingListInnerHTML(inputValue)
	
	
}