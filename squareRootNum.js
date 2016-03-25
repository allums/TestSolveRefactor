function squareRootNum(num){

	var total = 0;

	for (var i = 1; i <= num; i++){
		total = total + Math.sqrt(i);
	}

	
	total = Math.floor(total);
	return total;
}



module.exports = squareRootNum;