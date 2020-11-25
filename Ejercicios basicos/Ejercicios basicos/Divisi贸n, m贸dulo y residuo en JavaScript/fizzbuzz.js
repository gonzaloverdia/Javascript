var num = 100;

document.write("si es divisible entre 3 Fizz, si es divisible entre 5 Buzz <br> si es divisible entre 3 y 5 Fizz - Buzz <br>")
for(i = 1; i<=num; i++)
	{
		if(esDivisible(i, 3) && esDivisible(i, 5)){
			document.write("Fizz - Buzz");
			}
		 else if(esDivisible(i, 3)) {
			document.write("Fizz");
		}
		else if(esDivisible(i, 5)) {
			document.write("Buzz");
		} else {
			document.write(i);
		}
		document.write("<br>");
		
	}

function esDivisible(num, divisor)
{
	if (num % divisor == 0){
		return true;
	}
	else
	{
	 return false;	
	}
}