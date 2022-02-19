document.getElementById('SubmitButton').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    if(userEmail == 'sontan@baap.com' && userPassword == 'sicret'){
        location.href = 'banking.html'
    }
    else{
        // console.log('abar try korle syber sicurity te mamla kormu!!')
        alert('abar try korle syber sicurity te mamla kormu!!');
    }
})