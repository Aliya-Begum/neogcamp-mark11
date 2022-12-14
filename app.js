const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button")
const outputContainer = document.querySelector("#output-container");

function calculateBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const luckyNum = luckyNumber.value;
    const sum = calculateBirthDate(dob);
    if(sum&&luckyNum){
        if(luckyNum>0){
            compareValues(sum, luckyNumber.value);
        }else{
            outputContainer.innerText = " Lucky number should be greater than 0";
        }
 
    }else{
        outputContainer.innerText = "Please enter both the fields" ;
    }
}

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber==0){
        outputContainer.innerText = "YAY!!!! Your birthday is Lucky 😀";
    }else{
        outputContainer.innerText = "Your birthday is not Lucky 😥";
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
    