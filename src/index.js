module.exports = function getZerosCount(number, base) {

  var advancedZeros = function () {
  	var ZerosCount = 0;
  	while ( number > 1 ) {
  		number = ( number / dem )|0;
    	ZerosCount += number;  
    }
	return Math.floor( ZerosCount / counter[counter.length-1] );
  };
  
  var arr = [],
  systemBase = 2,
  dem;
  while ( systemBase <= base ) {
    if ( base % systemBase == 0) {
      arr.push( systemBase );
      base /= systemBase;
      dem = systemBase;
    }
    else systemBase++;
  }

  var counter = [1];
  for (var j = 1, k = 0; j < arr.length; j++) {
    if ( arr[j] == arr[j-1] ) {
      counter[k]++;
    }
    else {
      counter.push(1);
      k++;
    }
  }
  return advancedZeros();
}