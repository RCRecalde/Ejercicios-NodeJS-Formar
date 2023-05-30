function range_vision(number) {
    const n_string = String(number);
  
    for (let i = 0; i < n_string.length; i++) {
      const visionRange = Number(n_string[i]);
  
      let minValue = Infinity; //valor de visión más bajo con un valor alto

      let visionValue = 0;
        
      //Calculo del índice inicial y final para el rango de visión actual:
      for (let j = Math.max(0, i - visionRange); j <= Math.min(i + visionRange, n_string.length - 1); j++) {
        if (n_string[j] === '1' && j < minValue) {
          minValue = j;
        }
  
        visionValue += Number(n_string[j]);
      }
  
      if (minValue === i && n_string[i] === '1') {
        return true;
      }
      
    }
  
    return false;
  }
  
module.exports(range_vision())