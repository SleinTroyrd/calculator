let one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three"),
    four = document.querySelector(".four"),
    five = document.querySelector(".five"),
    six = document.querySelector(".six"),
    seven = document.querySelector(".seven"),
    eight = document.querySelector(".eight"),
    nine = document.querySelector(".nine"),
    zero = document.querySelector(".zero"),
    ac = document.querySelector(".ac"),
    sum = document.querySelector(".sum"),
    minus = document.querySelector(".minus"),
    multiplication = document.querySelector(".multiplication"),
    division = document.querySelector(".division"),
    plMn = document.querySelector(".pl_mn"),
    result = document.querySelector(".result"),
    percent = document.querySelector(".percent"),
    point = document.querySelector(".point"),
    numbersWindow = document.querySelector(".window");
   
 let summand =[];
 let secondElement =[];
 let reduced =[];
 let multiplier =[];
 let divisible =[];
 let vs = {
     pl : false,
     mn : false,
     mul : false,
     div : false,
 };

one.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${1}`;  
});

two.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${2}`;
});

three.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${3}`;
});

four.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${4}`;   
});

five.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${5}`;
});

six.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${6}`;
});

seven.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${7}`;
});

eight.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${8}`;
});

nine.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${9}`;
});

zero.addEventListener("click", ()=>{
    numbersWindow.innerHTML +=  `${0}`;
});

ac.addEventListener("click", ()=>{
    numbersWindow.innerHTML= "";
});

sum.addEventListener("click", ()=>{
    summand = numbersWindow.innerHTML;
    vs.pl=true;
    numbersWindow.innerHTML= "";
});

minus.addEventListener("click", ()=>{
    reduced = numbersWindow.innerHTML;
    vs.mn=true;
    numbersWindow.innerHTML= "";
});

multiplication.addEventListener("click", ()=>{
    multiplier = numbersWindow.innerHTML;
    vs.mul=true;
    numbersWindow.innerHTML= "";
});

division.addEventListener("click", ()=>{
    divisible = numbersWindow.innerHTML;
    vs.div=true;
    numbersWindow.innerHTML= "";
});

plMn.addEventListener("click", ()=>{
    let a = numbersWindow.innerHTML;
    if (a > 0) {
        numbersWindow.innerHTML= `-${a}`;    
    } else if (a < 0) {
        numbersWindow.innerHTML= `${a*-1}`; 
    }
});

percent.addEventListener("click", ()=>{
    let b = numbersWindow.innerHTML;
    b = b/100;
    numbersWindow.innerHTML= `${b.toFixed(2)}`; 
});

point.addEventListener("click", ()=>{
    let c = numbersWindow.innerHTML;
    numbersWindow.innerHTML= `${c}.`; 
});

result.addEventListener("click", ()=>{
    secondElement = numbersWindow.innerHTML; 
    numbersWindow.innerHTML= "";
    if (vs.pl === true) {
        let z = +summand + +secondElement;
        numbersWindow.innerHTML +=  `${z.toFixed(3)}`;
        vs.pl=false;
    } else if (vs.mn === true) {
        let z1 = +reduced - +secondElement;
        numbersWindow.innerHTML +=  `${z1.toFixed(3)}`;
         vs.mn=false;
    } else if (vs.mul === true) {
        let z2 = +multiplier * +secondElement;
        numbersWindow.innerHTML +=  `${z2.toFixed(3)}`;
        vs.mul=false;
    } else if (vs.div === true) {
        let z3 = +divisible / +secondElement;
        numbersWindow.innerHTML +=  `${z3.toFixed(3)}`; 
        vs.div=false;
    
        if (z3 === Infinity) {        
            numbersWindow.innerHTML= `ошибка`; 
            setTimeout(()=>{
                numbersWindow.innerHTML= ``; 
            },600);          
        };      
        };    
    secondElement =[];
});
          