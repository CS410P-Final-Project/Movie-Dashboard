/* Click Help */
var helpBtn=document.getElementById("helpButton");
helpBtn.onclick=function getHelp(){
    alert("For any questions\nPlease contact administrator via email\nBy click the mail button under help");
}
/* Click Mail Confirm Sending email or not */
var mailBtn=document.getElementById("mailButton");
mailBtn.onclick=function sendMail(){
    return confirm('Do you want to send e-mail to the administrator for help?');
}

