function soma (x, callback) {
    return setTimeout(() => {
        return callback (null, x + 5000)
    }, 3000);
}

//Callback function
function resolveSoma(err, resultado) {
    if(err) throw err;
    console.log(`Soma: ${resultado}`);
}

soma(200,resolveSoma)