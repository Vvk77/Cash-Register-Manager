const billAmount = document.querySelector("#bill-amount");
const checkBtn = document.querySelector("#check-btn");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");

const availableNotes =[2000,500,100,20,10,5,1];

checkBtn.addEventListener("click", function validateBillAndCashAmout() {
    hideMessage();

    if (billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
calculateChange(amountToBeReturned);


        }else{

            showMessage("The cash provided should atleast be equal to the bill amount");


        }



}else{

    showMessage("Invalid Bill Amount")




    }


});
function calculateChange(amountToBeReturned) {

}

function hideMessage(){
    message.style.display = "none";

}

function showMessage (msg) {
    message.style.display = "block";
    message.innerText= msg;

}