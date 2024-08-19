function generatePassword(length) {
    if (length < 8) {
        console.log("La contraseña debe tpor lo menos 8 caracteres.");
        return "";
    }

    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allChars = mayusculas + minusculas + numeros + simbolos;
    let password = "";

    
    password += mayusculas[Math.floor(Math.random() * mayusculas.length)];
    password += minusculas[Math.floor(Math.random() * minusculas.length)];
    password += numeros[Math.floor(Math.random() * numeros.length)];
    password += simbolos[Math.floor(Math.random() * simbolos.length)];

    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}

console.log(generatePassword(8));   
