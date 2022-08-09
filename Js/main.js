function cAValidation(){
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');
    const fError = document.getElementById('fError');
    const eError = document.getElementById('eError');
    const tError = document.getElementById('tError');
    const pError = document.getElementById('pError');
    const cpError = document.getElementById('cpError');
    const passwordValue = document.getElementById('password').value;
    const cpasswordValue = document.getElementById('cpassword').value;
    
    if (fullName.value == "" || fullName.value == null ) {
        fError.innerHTML ="Input Field";
        return false
    } else if (email.value == "" || email.value == null ) {
        eError.innerHTML ="Input Field";
        return false
    } 
    else if (tel.value == "" || tel.value == null ) {
        tError.innerHTML ="Input Field";
        return false
    } 
    else if ( password.value == "" || password.value == null ) {
        pError.innerHTML ="Input Field";
        return false
    } 
    else if (passwordValue.length < 6 ) {
        pError.innerHTML ="Password Not Complete";
        return false
    } 
    else if (cpasswordValue !== passwordValue ) {
        cpError.innerHTML ="Not the same";
        return false
    } 

    
}