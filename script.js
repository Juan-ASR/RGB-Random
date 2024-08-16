function cambiarColorFondo(){
    document.body.style.backgroundColor = generarColorAleatorio();
    document.querySelector("h1").innerText =  document.body.style.backgroundColor;
}

function generarColorAleatorio(){
    let colorR = Math.random() * 255;
    let colorG = Math.random() * 255;
    let colorB = Math.random() * 255;
    return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}