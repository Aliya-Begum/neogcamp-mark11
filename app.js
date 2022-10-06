const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button")
const outputContainer = document.querySelector("#output-container");

function calculateBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateBirthDate(dob);
    if(sum&&dob){
        compareValues(sum, luckyNumber.value);
    }else{
        outputContainer.innerText = "Please enter both the fields";
    }
}

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber==0){
        outputContainer.innerText = "YAY Your borthday is Lucky"
    }else{
        outputContainer.innerText = " OOPs your birthday is not Lucky";
    }
}
function calculateBirthDate(dob){
    dob = dob.replaceAll("-", "")
    var sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener('click', calculateBirthDateIsLucky);
    