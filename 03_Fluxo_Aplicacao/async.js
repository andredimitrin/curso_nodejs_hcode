function soma (x) {
    return new Promise ((resolve, reject) => {
        if(Number(x) == NaN || Number(x) == undefined || typeof(x) != 'number'){
            reject('O valor informado não é um número')            
        }
        setTimeout(() => {
            resolve(x + 5000)
        }, 3000)
    })
}

async function main (){
    try{
        const resultado = await soma('#')
        console.log(`Soma: ${resultado}`)
    } catch (err) {
        console.log(`Temos Problema: ${err}`)
        console.log(process.env.USERNAME)
    }
}

main()