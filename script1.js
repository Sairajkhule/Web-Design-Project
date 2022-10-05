var nameerror = document.getElementById('name-error')
var phoneerror = document.getElementById('phone-error')
var emailerror = document.getElementById('email-error')
var messageerror = document.getElementById('message-error')
var submiterror = document.getElementById('submit-error')

function validatename(){
    var name = document.getElementById('contact-name').value;

if(name.length == 0){
       nameerror.innerHTML = 'Name is required'
    //    return false;
}
else  document.getElementById('name-error').innerHTML = '<i class="fa-solid fa-shield-check"></i>'

}

function validatephone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == ''){
        phoneerror.innerHTML = 'phone number is required'

}
else  document.getElementById('phone-error').innerHTML = '<i class="fa-solid fa-shield-check"></i>'
}

function validateemail(){
    var email = document.getElementById('contact-email').value;

    if(email.length ==''){
        emailerror.innerHTML = 'Email Id is required'
    }
    else document.getElementById('email-error').innerHTML = ''
}
function validatemessage(){
 var message = document.getElementById('contact-message').value;
 
 if(message.length ==''){
    messageerror.innerHTML = 'more characters required'
    return false;
 }
 else document.getElementById('message-error').innerHTML = ''
}
function validateform(){
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submiterror.style.display = 'block';
        submiterror.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submiterror.style.display = 'none';},3000);
        return false;
    }
}