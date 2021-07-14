script.js

function main ()
{
    var resp = document.getElementById('resp');
	var Valor =  parseFloat(document.getElementById("Valor").value);
	var Juros =  parseFloat(document.getElementById("Juros").value);
	var Parcelas =  parseFloat(document.getElementById("Parcelas").value);
	var Total =   parseFloat(document.getElementById("Total").value);

	if(document.getElementById('Valor').checked)
		texto =  Valor(num1);
	if(document.getElementById('Juros').checked)
		texto =  Juros(num1 , num2);
	if(document.getElementById('Parcelas').checked)
		texto = Parcelas(num1, num2)
	if(document.getElementById('Total').checked)
		texto =   Total(num1 , num2)
}
