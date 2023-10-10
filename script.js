let polynomial=[]
var y=polynomial.length
var tosub=document.getElementById("tosub")
let topushA=document.getElementById("topush")
let choices=document.querySelector(".choices")
let coefficients=topushA.value
var button=document.querySelector("button")
let toread=document.getElementById("toread")

/*event delegation*/
choices.addEventListener("click",clicked)
function clicked(e){
if(e.target.matches("button")){
var button=e.target
switch(button){

  /*enter x coefficients*/
case but1:
 coefficients=topushA.value
toread.innerHTML=coefficients + " " + "is added "
polynomial.push(+coefficients)  //+ to convert string to number
break;

/*display*/
case but2:
n=polynomial.length
coefficients =polynomial[i]
toread.innerHTML="coefficients of powers of x are:<br/>"
for(var i=0;i<n;i++){   
toread.innerHTML+=polynomial[i] + " " 
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
let unknown=tosub.value
var i=1
//initialize result with first coefficient of x at array index 0
let result=polynomial[0]
Horner(polynomial) 
toread.innerHTML="The sum of the polynomial is:"+ result
break;
}
}
}