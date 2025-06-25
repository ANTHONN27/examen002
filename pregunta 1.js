
let tamaño = 7;   
let altura = 2;  

function dibujarRectangulo() {
    let arribaAbajo = '*'.repeat(tamaño);  
    let medio = '*' + ' '.repeat(tamaño - 2) + '*'; 

    let rectangulo = arribaAbajo + '\n' + medio + '\n' + arribaAbajo;
    
    return rectangulo;
}

console.log(dibujarRectangulo());



//PARA RUN JS