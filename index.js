function numDisplay(value){

document.getElementById('textarea').value +=value;
}

function Calculate()
{
    var ansval = document.getElementById('textarea') .value ;
    var answer = eval(ansval); 
    document.getElementById('textarea').value =answer ; 

}

 