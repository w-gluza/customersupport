"use strict"

// Fetch DATA
function getData() {

    fetch("https://kea-alt-del.dk/customersupport/")
    .then(res=>res.json())
    .then(display)
}

getData();

//Connects data (from json) and our template

function display(requests){

    console.log(requests)
    let ticketTemplate = document.querySelector('.reqTemplate').content;

// Comparing importance
    requests.sort((x,y)=> y.importance - x.importance);
    requests.forEach(request=>{
    console.log(request)



// CLONE TEMPLATE
    let clone = ticketTemplate.cloneNode(true);

//  Show importance
    clone.querySelector('.importance').textContent=`${request.importance}`;

// display names (with middle/no middle) 
    if(request.middle){
        clone.querySelector('.fullName').textContent=`${request.first} ${request.middle} ${request.last}`;
    } else {
        clone.querySelector('.fullName').textContent=`${request.first} ${request.last}`;
    };

//  Show date
    clone.querySelector('.date').textContent=`
        ${request.time.day}
        - ${request.time.month}
        - ${request.time.year} 
        at ${request.time.hour}:${request.time.minute}`;

//  Show place 
    clone.querySelector('.place').textContent=`${request.place}`;
    

//  Clone full message Heading!!
    clone.querySelector('.moreInfoHeading').textContent=`${request.message}`;

//  Clone full message //doesnt' close on 2nd click FIX THIS!!!
    clone.querySelector("#seeMore").addEventListener("click", function(e){
        e.target.previousElementSibling.textContent = request.full;
   })

//    clone.querySelector("#seeMore").addEventListener("mouseout", function(e){
//     e.target.previousElementSibling.textContent = "XY";
// })

//  Revomove article that is already "done"
    clone.querySelector("#solved").addEventListener("click", function(e){
        e.target.parentElement.remove();

})


// different importance colours 

    if(request.importance<25){
        clone.querySelector('.importance').style.background ="#4caf50";
    } else if (request.importance<50) {
        clone.querySelector('.importance').style.background ="#ff9800";
    } 
    else {
        clone.querySelector('.importance').style.background ="#f44336";
    };
       
  
// Copy to HTML file
    document.querySelector("#container").appendChild(clone)
});

}






