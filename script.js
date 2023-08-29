const day = document.getElementById("day-inp");
const month = document.getElementById("month-inp");
const year = document.getElementById("year-inp")
const submitBtn =  document.getElementById("submit-btn");
const form = document.getElementById("form");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const yearSpan = document.getElementById("year-span");
const daySpan = document.getElementById("day-span");
const monthSpan = document.getElementById("month-span");
const lables = document.getElementsByClassName(".lables")
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth()+1;





var ageInYears = 0;
let ageInDays = 0;
var ageInMonths = 0;


birthD = parseInt(day.value)
function findDay(currentDay, birthD){
    if(currentDay >= birthD ){
        ageInDays =  currentDay - birthD
        daySpan.innerHTML=ageInDays
    } else if (currentDay < birthD){
        yearSpan.innerHTML  = ageInYears - 1 
        daySpan.innerHTML=ageInDays
    }
}

function findMonth(currentMonth, birthM, ageInYears){
    if (currentMonth >= birthM){
        ageInMonths = currentMonth - birthM
        monthSpan.innerHTML = ageInMonths
    } else if (currentMonth < birthM){
         ageInYears = currentYear - parseInt(year.value)
        yearSpan.innerHTML=ageInYears - 1
    }
}

const dayInt = parseInt(day.value);
const monthInt = parseInt(month.value);
const yearInt = parseInt(year.value);

function isValidDate(dayInt, monthInt, yearInt) {
    const daysInMonth = new Date(yearInt, monthInt, 0).getDate();
    
    return dayInt > 0 && dayInt <= daysInMonth && monthInt >= 1 && monthInt <= 12;
}


form.addEventListener('submit',(e)=>{
    if( day.value === "" || day.value === null){
        
        dayError.innerText="This field is required!!"

    } else if (day.value > 31 || day.value < 1){
        dayError.innerText="Must be a valid day!!"
    } else{ 
         birthD = parseInt(day.value)
         findDay(currentDay, birthD)
        
    }

 
    if(month.value === "" || month.value === null){
        monthError.innerText="This field is required!!"
    } else if (month.value > 12 || month.value < 1){
        monthError.innerText="Must be a valid month!!"
    } else{
        birthM = parseInt(month.value)
        findMonth(currentMonth, birthM, ageInYears)

    }

    if(year.value === "" || year.value === null){
        yearError.innerText="This field is required!!"
     } else if (year.value > currentYear){
        yearError.innerText="Must be in the past!!"
     } else{
        let ageInYears = currentYear - parseInt(year.value)
        yearSpan.innerHTML=ageInYears
     }
     if(isValidDate(dayInt, monthInt, yearInt)){
        console.log("valid");
     } else{
        console.log("invalid");
     }

    e.preventDefault();
});


