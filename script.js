const day = document.getElementById("day-inp");
const month = document.getElementById("month-inp");
const year = document.getElementById("year-inp")
const submitBtn =  document.getElementById("submit-btn");
const form = document.getElementById("form");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const yearSpan = document.getElementById("year-span")

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

var ageInYears = 0;

form.addEventListener('submit',(e)=>{

    if(day.value === "" || day.value === null){
        dayError.innerText="This field is required!!"
    } else if (day.value > 31 || day.value < 1){
        dayError.innerText="Must be a valid day!!"
    } else{}

    if(month.value === "" || month.value === null){
        monthError.innerText="This field is required!!"
    } else if (month.value > 12 || month.value < 1){
        monthError.innerText="Must be a valid month!!"
    }

    if(year.value === "" || year.value === null){
        yearError.innerText="This field is required!!"
     } else if (year.value > currentYear){
        yearError.innerText="Must be in the past!!"
     } else{
        let ageInYears = currentYear - parseInt(year.value)
        yearSpan.innerHTML=ageInYears
     }

     

    e.preventDefault();
})


