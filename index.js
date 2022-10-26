const billAmount = document.querySelector("#bill-amount");
const checkBtn = document.querySelector("#check-btn");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");

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
function hideMessage(){
    message.style.display = "none";

}

function showMessage (msg) {
    message.style.display = "block";
    message.innerText= msg;

}