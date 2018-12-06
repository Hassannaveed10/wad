var accountholders = {
        title: "Hassan Naveed",
        balance: 999999,
        accountcurrentcy: "PKR",
        iban: "UCP0104",

        depositamount: function(e, val)
        {
            if(e.keyCode == 13)
            {
                if(isNaN(val))
                {
                    document.getElementById("deposit-msg").innerText = "Enter Valid Amount";
                }
                else
                {
                    document.getElementById("deposit-msg").innerText = "";
                    accountholders.balance += parseInt(val);
                    document.getElementById('balance').innerHTML = accountholders.balance;
                    var f = "Deposit";
                    showlist(f,val);
                }
            }
        },

        withdrawamount: function(e, val)
        {
            if(e.keyCode == 13)
            {
                if(isNaN(val))
                {
                    document.getElementById("withdraw-msg").innerText = "Enter Valid Amount";
                }
                else if(val > accountholders.balance)
                {
                    document.getElementById("withdraw-msg").innerText = "Don't have sufficient in account";
                }
                else
                {
                    document.getElementById("withdraw-msg").innerText = "";
                    accountholders.balance -= parseInt(val);
                    document.getElementById('balance').innerHTML = accountholders.balance;
                    var f = "Debit";
                    showlist(f,val);
                }
            }
        },


    };


document.getElementById('title').innerHTML = accountholders.title;
document.getElementById('balance').innerHTML = accountholders.balance;
document.getElementById('currency').innerHTML = accountholders.accountcurrentcy;
document.getElementById('IBAN').innerHTML = accountholders.iban;




function showlist(e, val)
{
    document.getElementById("transaction-table").innerHTML += '<tr><td>' + new Date() + '</td><td>' + e + '</td><td>' + val + '</td></tr>';
}
