const checkValidRange= (value1,value2,value3,value4) => {
    
    const checkNumber = (value1,value2,value3,value4) => {

      if ( isNaN(value1),isNaN(value2),isNaN(value3),isNaN(value4)) {
        throw new Error('só é possivel calcular a média com numeros!')
    }

    }
    
    try{
    checkNumber(value1,value2,value3,value4)

    const media = value1 + value2 + value3 + value4 / 4;
    return media;

    } catch(error) {
     return error.message;
    }
}
console.log(checkValidRange(2,2,2,2));