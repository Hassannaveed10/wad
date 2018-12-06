var account=[
	{
		title: "Hassan Naveed",
		acbal:99999,
		currency:"PKR",
		IBN:12345
	}
]

document.getElementById("title").innerHTML=account[0].title;
var am= document.getElementById("balance").innerHTML=account[0].acbal;
document.getElementById("currency").innerHTML=account[0].currency;
document.getElementById("IBAN").innerHTML=account[0].IBN;

function Deposite(event,val)
{
	if(event.keycode==13)
	{
		var Amount=document.getElementById("deposit").value;	
		if(!isNaN(Amount))
		{
			am=am +parseInt(Amount);
		}

	}
}
		
