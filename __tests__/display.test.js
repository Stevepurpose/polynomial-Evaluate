//test  display of multiple coefficients
let { JSDOM } = require("jsdom");

let polynomial = []
let y = polynomial.length

let dom = new JSDOM(`<!DOCTYPE html>
    <div class="for_array">
         <label for="toPush">Enter coefficients of x </label>
         <input id="toPush" type="number">
          <label for="toSub" id="sub">Enter value of x</label>
         <input id="toSub" type="number"> 
       </div>
       <div id="to_read"></div>
       <div class="choices">
         <button id="but1">enter coefficient</button>
         <button id="but2">display</button>
         <button id="but3">sum polynomial </button>
        </div>       
       `)
   let document = dom.window.document
   
   let toSub = document.getElementById("toSub");
   let toPush = document.getElementById("toPush");
   let  toread = document.getElementById("to_read");
   let but1 = document.getElementById("but1");
   let but2 = document.getElementById("but2");
   let but3 = document.getElementById("but3");
   let pushValue = toPush.value

   toPush.value = 2
   pushValue = toPush.value
   polynomial.push(+pushValue)
   toPush.value = 3
   pushValue = toPush.value
   polynomial.push(+pushValue)


   but2.addEventListener("click", ()=>{
    n = polynomial.length
    pushValue = polynomial[i]
    toread.innerHTML ="Coefficients of the powers of x are: <br/>"
    for(var i=0; i<n; i++){
        toread.innerHTML +=polynomial[i] + " "
    }

})   

test("should show coefficients of x", ()=>{
    but2.click()
    expect(toread.textContent).toBe("Coefficients of the powers of x are: 2 3 ")
    
    })