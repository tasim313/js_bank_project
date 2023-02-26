document.getElementById('btn-submit').addEventListener('click', function(){
    console.log("submit button click")
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    console.log(email)
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    console.log(password)

    if(email === 'cat@dog.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }else{
        alert('Invalid User')
    }
})