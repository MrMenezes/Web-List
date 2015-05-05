function questao2(array_,inicial) {
  
  for (var i = 0; i < array_.length; i++) {
    
    if (array_[i].indexOf(inicial) !== 0){
        array_.splice(i,1);
        i=i-1
    }	 
}
	console.log(array_);
}