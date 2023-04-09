import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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


const shoppingListInnerHTML = (item) => {
	let itemID = item[0]
	let itemValue = item[1]
	let newEl = document.createElement("li")
	newEl.textContent = itemValue
	shoppingList.append(newEl)

	newEl.addEventListener("dblclick", function(){
		let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
		remove(exactLocationOfItemInDB)
	})

}

const clearShoppingList = () => {
	shoppingList.innerHTML = ""
}

function inputFieldValue() {
	let inputValue = inputField.value
	clearInputField()
	push(shoppingListInDB, inputValue)
	
	
}

onValue(shoppingListInDB, (snapshot) => {
	if(snapshot.exists()) {
		const data = Object.entries(snapshot.val())
	
		clearShoppingList()
		for(let i = 0; i < data.length; i++) {
			let currentItem = data[i]
			// let currentItemID = currentItem[0]
			// let currentItemValue = currentItem[1]
			shoppingListInnerHTML(currentItem)
		}
	} else  {
		shoppingList.innerHTML = "No item here... yet"

	}
	
	
})