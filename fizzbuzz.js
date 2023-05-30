function fizz_buzz(n) {
    let resultado = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado.push("FizzBuzz")
        }else if (i % 3 === 0){
            resultado.push("Fizz")
        }else if(i % 5 === 0){
            resultado.push('Buzz')
        }else{
            resultado.push(i)
        }
    }
    return resultado
}

module.exports = fizz_buzz()