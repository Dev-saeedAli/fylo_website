const inputEL = document.querySelector("#inputEl");
let errMsg = document.querySelector("#error");
let form = document.querySelector("#form");

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let value = inputEL.value
    validateForm(value)

});

function validateForm(value){

    let regexExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
    if(!regexExp.test(value)){
      errMsg.classList.remove("d-none")
    }else{
        errMsg.classList.add("d-none")
        inputEL.value = ""
    }
    
}