let elForm = document.querySelector("#form")
let elLoginInput = elForm.querySelector("#email-input")
let elPassworInput = elForm.querySelector("#password-input")





elForm.addEventListener("submit", (x) => {
    x.preventDefault()

    let emailValu = elLoginInput.value.trim()
    let passwordValu = elLoginInput.value.trim()

    async function fetchLogin(){
        let rec = await fetch("https://reqres.in/api/register",{
            method:'POST',
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: emailValu,
                password: passwordValu
            })
        });
       
    
        let data = await rec.json();
        if(data){
            window.localStorage.setItem('token', JSON.stringify(data))
            window.location.replace('index.html')
        }
      
    }

    fetchLogin()
})