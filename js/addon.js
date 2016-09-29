
var annuit = (function(){

	var 
	payment, rate, periods, annuity, schmoe, years, percent, IRRCalc, IRR;

	rate = .03;
	periods = 20;
	annuity = 0;
	years = 0;
	percent = 0;


	payment = function (x) {

		
		annuity = Math.round((rate * parseInt(x))/
							(1 - Math.pow(1 + rate, - periods)));
		

		return annuity;

	};
	


	IRRCalc = function (CArray) {

		var guest, inc, NPV, arrayLength;

		guest = .001;
   		arrayLength = CArray.length;
   		inc = 0.000001;
    		do {
        guest += inc;
        NPV = 0;
        for (var j=0; j < arrayLength; j++) {
            NPV += CArray[j] / Math.pow((1 + guest), j);
        }
    		} while (NPV > 0);
    		
    		
    	IRR = (Math.round((Math.pow(1 + guest, 12) - 1) * 10000))/100;

    	return IRR;

	};

	years = function (x, y, z) {

		remain = 
		parseInt(x) + Math.round(- Math.log(1 - parseInt(y)/
		parseInt(output1.value) * rate)/Math.log(1 + rate));

		return remain;

	};

	

	

	return {

		payment: payment,
		years: years,
		IRRCalc: IRRCalc
		
		
	};



})();








