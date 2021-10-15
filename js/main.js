let indexButton = document.querySelector("#index")
let elList = document.querySelector("#list")
let token = JSON.parse(window.localStorage.getItem("token"))


function reder(elem){
    elem.forEach((y) => {
        let newLi = document.createElement("li")
        let newImg = document.createElement("img")
        let newTitle = document.createElement("h2")
        let newLink = document.createElement("a")
        newLi.setAttribute("class", "index")
        newImg.setAttribute("class", "index-img")
        newImg.setAttribute("src", y.avatar)
        newTitle.setAttribute("class", "index-title")
        newLink.setAttribute("class", "index-email")
        newTitle.textContent = y.first_name
        newLink.textContent = y.email
    
        newLi.appendChild(newImg)
        newLi.appendChild(newTitle)
        newLi.appendChild(newLink)
        elList.appendChild(newLi)
    });

}


async function fetchLogin(){
    let rec = await fetch("https://reqres.in/api/users?page=2")
    let data = await rec.json();
    const fullData = data.data

    reder(fullData, elList)
}
fetchLogin()

if(!token?.token){
    window.location.replace('login.html')
}
indexButton.addEventListener("click", () => {
    window.localStorage.removeItem("token")
    location.reload()
})