function setDate() {
    const now = new Date(); 
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    console.log(seconds)
}

setInterval(setDate, 1000); // seta um intervalo de 1000 mili Sec para acionar a funcao setDate