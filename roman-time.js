'use strict';
var hours = process.argv[2];
var minutes=process.argv[3];
if ((hours>23)||(minutes>59))
{
console.log("Время указано неверно");
}
else
{
console.log(arabsktoroman(hours)+":"+arabsktoroman(minutes)); 
}
function arabsktoroman(){
	var cifir=[["I",1],["IV",4],["V",5],["IX",9],["X",10],["XL",40],["L",50]];
	for (var j=cifir.length-1,arab=arguments[0],rim="";j!=-1;j--)
	{
		if (~~(arab/cifir[j][1])>0)
		{
			rim+=cifir[j][0];
			arab-=cifir[j][1];
			j++;
		}
	}
	return rim;
}
