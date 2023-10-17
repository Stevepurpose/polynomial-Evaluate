let polynomial=[]
var y=polynomial.length
var toSub=document.getElementById("toSub")
let toPushA=document.getElementById("toPush")
let choices=document.querySelector(".choices")
let coefficients=toPushA.value
var button=document.querySelector("button")
let to_read=document.getElementById("to_read")

/*event delegation*/
choices.addEventListener("click",clicked)
function clicked(e){
if(e.target.matches("button")){
var button=e.target
switch(button){

  /*enter x coefficients*/
case but1:
 coefficients=toPushA.value
to_read.innerHTML=coefficients + " " + "is added "

polynomial.push(+coefficients)  //+ to convert string to number

break;

/*display*/
case but2:
n=polynomial.length
coefficients =polynomial[i]
to_read.innerHTML="coefficients of powers of x are:<br/>"
for(var i=0;i<n;i++){   
to_read.innerHTML+=polynomial[i] + " " 
}

break;

/*sum polynomial*/
case but3: 
//applying principle of Horner's algorithm  
function Horner(polynomial){
y=polynomial.length
if(i==y) return;
result=polynomial[i]+unknown*result
i++
Horner(polynomial) 
}
let unknown=toSub.value
var i=1
//initialize result with first coefficient of x at array index 0
let result=polynomial[0]
Horner(polynomial) 
to_read.innerHTML="The sum of the polynomial is:"+ result
break;
}
}
}