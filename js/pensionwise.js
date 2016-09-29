


calc =   (function (annuit){

					var amount, amounts, age, button, output1, output2, text, rate, period, payment,
					phoneCost, contractCost, length, price, button2, result, newText, test, cList;
					amount = document.getElementById("amount");
					
					age = document.getElementById("age");
					output1 = document.getElementById("output1");
					output2 = document.getElementById("output2");
					button = document.getElementById("button");
					text = document.getElementById("text");
					rate = .03;
					periods = 20;

					phoneCost = document.getElementById("costinclusive");
					contractCost = document.getElementById("costexclusive");
					length = document.getElementById("length");
					price = document.getElementById("price");
					result = document.getElementById("result");
					button2 = document.getElementById("button2");
					cList = [];
				
					
					var init = function (){

					output1.value = "";

					button.addEventListener("click", function(event){
					payment = annuit.payment(parseInt(amount.value));
					var extent = parseInt(age.value) + periods;
					
					 output2.value = payment;
					 output1.value = output2.value;
					 text.innerHTML = "";
					 text.insertAdjacentHTML("beforeend",'<span>You can receive '+output2.value+' until age '+extent+'</span');
					 
 					 

					 });

					output2.addEventListener("mousemove", function(event){
					remain = annuit.years(age.value, amount.value, output2.value);
					output1.value = output2.value;
					output2.max = amount.value/2;
					output2.min = amount.value/25;
					text.innerHTML = "";
					 text.insertAdjacentHTML("beforeend",'<span>You can receive '+output1.value+' until age '+remain+'</span');

					
					});

					output1.addEventListener("change", function(event){
					remain = annuit.years(age.value, amount.value, output2.value);	
					output2.value = output1.value;
					text.innerHTML = "";
					 text.insertAdjacentHTML("beforeend",'<span>You can receive '+output1.value+' until age '+remain+'</span');
					
					});

					button2.addEventListener("click", function(event){
					cList = [];
					cList.push(price.value * -1);
					for( i = 0; i < length.value; i++){
					cList.push(phoneCost.value - contractCost.value)	
					}
					
					newText = annuit.IRRCalc(cList);
					result.innerHTML = "";
					result.insertAdjacentHTML("beforeend",'<span>The cost of your loan is '+ newText +' Percent APR </span');
					 
 					});

					 
					}
					
					return{
						init: init
						
					}

}(annuit));

calc.init();








