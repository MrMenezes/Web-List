var style = function(elemento, atrib, val) { 
    elemento = document.querySelectorAll(elemento);
    if (elemento.length > 0)     
        val = elemento[0].style[atrib];
    return val = val || 'Elemento sem atributo';
};

var assert = function(funcao, retorno){
    return funcao === retorno ? true : false;};

console.log(assert(style('div','background'),'red'));







