function send(){
    let email = document.getElementById('email').value;
    let nombre = document.getElementsByClassName("form-group").item(0)
    console.log(email + " " + nombre)
    alert("Gracias " + nombre + "\nSe ha enviado tu mensaje.")
}