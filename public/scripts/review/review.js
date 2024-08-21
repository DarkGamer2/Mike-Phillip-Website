const requestButton=document.getElementsByClassName('request-button');

requestButton.addEventListener("click",submitAlert);

const submitAlert=()=>{
    alert("Form Has Been Submitted Successfully!");
}