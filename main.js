// Immutable

let Dog_Name= "Bolt"
let Cat_Name= " Jenne"
let Bird_Name= "Luci"

let Result_Names= `               
                   <h1> What is your <br> dog name ${Dog_Name}</h1>
                   <h2> and cats name is ${Cat_Name}</h2> 
                   <h1>  My Bird  ${Bird_Name} </h1>`;
                   
console.log(Result_Names);
document.write(Result_Names); 
//<h1> My bird Luci </h1>                               // The console.log give same spacing and position as code written in  ` `  .
//     My bird Luci                        // in document.write  " html tag get render first then write the contain in them "


document.write(" <h2> uday </h2>"); //h2 get render first in canvas .
document.write("  uday ");          // print value in the " " dobule qutation mark.



//Multipication
let Multipication=2*10;
console.log(Multipication);

// Reminder
let Reminder=20%3;
 console.log(Reminder);


//divider
 let Div=20/3;
 console.log(Div);


//Exponentation
let Expo=Math.pow(2,3);
console.log(Expo);

let Expo_2=2**3;
console.log(Expo_2);

