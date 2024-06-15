// XML-HTTP request(XHR)
// They are used to interact with the server via api

// Step 01:
// create a XHR object
var request =  new XMLHttpRequest()

// Step 02:
// Opening a request
// This method tells us that which HTTP method as well as Which API
request.open("GET","https://restcountries.com/v3.1/all")

// Step 03:
// KickStart the HTTP Operations
request.send()
//Step 04:
// Once the data has been successfully received from the server
// if the status code of the server is 200
// then we need to process the data

//here the JSON.parse converts the JSON string into array of Objects
request.onload = function(){
// here the conversion of string to objects
var res = JSON.parse(request.response)
console.log(res);
var popu = res.filter((ele)=>ele.name.population>100000)   
console.log(popu);
}
