
let userInputEl = document.getElementById("userInput")
let submitBtnEl = document.getElementById("submitBtn")


function showData(userData) {
    let userDataContainerEl = document.getElementById("userDataContainer")
    userDataContainerEl.innerHTML = ""

    let {name, created_at, updated_at} = userData

    let nameEl = document.createElement("li")
    nameEl.textContent = `Requested user name: ${name}`
    userDataContainerEl.appendChild(nameEl)

    let createdEl = document.createElement("li")
    createdEl.textContent = `Requested user created at : ${created_at}`
    userDataContainerEl.appendChild(createdEl)

}


function getUserInfo() {
    let githubUsername = userInputEl.value
    console.log(githubUsername)

    let url = `/user?name=${githubUsername}`

    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            responseObj = JSON.parse(xhr.response)
            showData(responseObj)
        }
    }

    xhr.send()
}

submitBtnEl.addEventListener("click", getUserInfo)