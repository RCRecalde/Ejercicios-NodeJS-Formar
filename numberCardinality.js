function number_cardinality(n) {
    if ( n % 10 === 0) {
        return 'zero'
    }else if(n % 10 === 5){
        return 'five'
    }else if(n % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
}

module.exports = number_cardinality()