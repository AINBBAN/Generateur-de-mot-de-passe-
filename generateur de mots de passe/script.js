var copyBtn = document.getElementById('copy')
function getpassword(){
    var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLenght= 20;
    var password= "";

    for (let i = 0; i< passwordLenght ; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber , randomNumber + 1 )

        document.getElementById( 'password').value = password;

        copyBtn.style.background="#6c757d"
        copyBtn.style.color="#fff"
    }
}

function copymdp() {
    var inputPassword = document.getElementById('password');
    
    if( inputPassword.value.length == 20){
        inputPassword.select();
        document.execCommand("copy");

        copyBtn.style.background = "transparent";
        copyBtn.style.color = "#000"


        alert('Mot de passe copier')
    }else{
        alert('Veuillez créer de nouveau un Mot de passe')

    }

}