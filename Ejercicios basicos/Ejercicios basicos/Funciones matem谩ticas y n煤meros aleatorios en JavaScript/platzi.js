var z;
document.write("Numeros aleatorios en entre un parametro de valores <br>");

for(var i=0; i<10; i++)
{
	z = aleatorio(10, 20);
	document.write(z + ", ");
}

document.write(z);

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	var parametros = "<br> " + min + "-" + maxi;
	return resultado;
}

