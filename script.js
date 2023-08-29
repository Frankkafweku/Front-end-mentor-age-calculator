const day = document.getElementById("day-inp")
const month = document.getElementById("month-inp")
const year = document.getElementById("year-inp")
const submitBtn =  document.getElementById("submit-btn")
const form = document.getElementById("form")
const dayError = document.getElementById("day-error")
const monthError = document.getElementById("month-error")
const yearError = document.getElementById("year-error")

form.addEventListener('submit',(e)=>{

    if(day.value === "" || day.value === null){
        dayError.innerText="This field is required!!"
    }
    if(month.value === "" || month.value === null){
        monthError.innerText="This field is required!!"
    }
    if(year.value === "" || year.value === null){
        yearError.innerText="This field is required!!"
    }
    e.preventDefault();
})


