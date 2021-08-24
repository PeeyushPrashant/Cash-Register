const billAmount= document.querySelector("#bill");
const nextBtn= document.querySelector("#next");
const cashGiven= document.querySelector("#cash");
const checkBtn= document.querySelector("#check");
const errorMsg = document.querySelector("#error-msg");
const noOfNotes= document.querySelectorAll(".no-of-notes");

const cashInputDiv= document.querySelector("#cash-input");
const returnChangeDiv = document.querySelector("#return-change");

const availableNotes= [2000, 500, 100, 20, 10,5, 1];



nextBtn.addEventListener("click", function billHandler(){
    hideErrorMessage();
    if(billAmount.value>0)
    {
       nextBtn.style.display= "none";
       cashInputDiv.style.display="block";
    }
    else
    {
       showErrorMsg("Enter valid bill amount");
    }
})



checkBtn.addEventListener("click", function cashHandler(){
    
    hideErrorMessage();
    hideTable();
    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);
    if(cashGivenValue < billAmountValue)
    {
        showErrorMsg("Cash should be more than bill amount");
    }
    else if(cashGiven.value===billAmount.value)
    {
        showErrorMsg("No amount is to be returned");
    }
        
    else {
        const amountToBeReturned=cashGivenValue -billAmountValue;
        calculateAmount(amountToBeReturned);
        
    }
        
})

function calculateAmount(amountToBeReturned)
{
    
     returnChangeDiv.style.display="block";
 for(let i=0; i<availableNotes.length; i++)
 {
     const numberOfNotes= Math.trunc(amountToBeReturned/availableNotes[i]);
     amountToBeReturned= amountToBeReturned%availableNotes[i];
     noOfNotes[i].innerText = numberOfNotes;
 }
}

function hideErrorMessage()
{
    errorMsg.style.display= "none";
}

function hideTable(){
    returnChangeDiv.style.display="none";
}


function showErrorMsg(msg)
{
    errorMsg.style.display= "block";
    errorMsg.innerText= msg;
    
}


