var num1 = 0;
var num2 = 0;
var op ;
function getValue(tag){
    
    var p = Number(document.getElementById("screen").innerHTML);
    
    
    if(tag.innerHTML=='+'||tag.innerHTML=='-'||tag.innerHTML=='/'||tag.innerHTML=="*"||tag.innerHTML=='='){
        if(num1==0){
            
            num1 = Number(document.getElementById("screen").innerHTML);
            
        }
        else{
        if(num2==0){
           
            num2 = Number(document.getElementById("screen").innerHTML);
            console.log(num2);
            calculate();
        }
    }
    op = tag.innerHTML;
}
else{
    if(p==0||p==num1){
        document.getElementById("screen").innerHTML = tag.innerHTML;
    }
    else{
        var node = document.createTextNode(tag.innerHTML);
        document.getElementById("screen").appendChild(node);
    }
}

}
function cls(){
    document.getElementById("screen").innerHTML=0;
}

function calculate(){
    if(op=='+'){
        num1 = num1+num2;
        num2=0;
        document.getElementById("screen").innerHTML=num1;
    }
    if(op=='-'){
        num1 = num1-num2;
        num2=0;
        document.getElementById("screen").innerHTML=num1;
    }
    if(op=='*'){
        num1 = num1-num2;
        num2=0;
        document.getElementById("screen").innerHTML=num1;
    }
    if(op=='/'){
        num1 = num1/num2;
        num2=0;
        document.getElementById("screen").innerHTML=num1;
    }
}