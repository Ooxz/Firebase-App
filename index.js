const appSettings = {
    databaseURL: "https://shoppingcart-493a1-default-rtdb.europe-west1.firebasedatabase.app/"
}

const addBtn = document.getElementById("add-button")
const inputField = document.getElementById("input-field")

addBtn.addEventListener("click", inputFieldValue)

function inputFieldValue() {
	console.log(inputField.value)
}