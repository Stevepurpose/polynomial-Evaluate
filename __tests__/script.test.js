let { JSDOM } = require("jsdom");
//let {polynomial} = require("../script")
//polynomial = []


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

toPush.value = 2
let pushValue = toPush.value
but1.addEventListener("click", ()=>{
    toread.textContent = pushValue + " " + "is added"
})

but2.addEventListener("click", ()=>{
   toread.textContent = "Coefficients of powers of x are:" + " " + pushValue
})


test("should show input value", ()=>{
but1.click()    
expect(toread.textContent).toBe("2 is added")

})


test("should show coefficients of x", ()=>{
but2.click()
expect(toread.textContent).toBe("Coefficients of powers of x are: 2")

})