// Add your code here
var a;
function myFunction() {
  //  document.body.style.backgroundColor = "yellow";
    //document.body.style.backgroundImage = "url('roll1.jpg')";
    a=document.getElementById("demo").innerHTML =Math.floor((Math.random())* Math.floor(38));
    console.log(a);
    if (a%2==0){
      document.body.style.backgroundColor = "red";
    }
   else{
    document.body.style.backgroundColor = "black";
   }
   // to check
   // document.body.loader.backgroundcolor="red";
  }
/*


/*function.onload{
  document.body.style.backgroundImage = "url('roll1.jpg')";
}*/
function myFunctionpic(){
// document.body.style.backgroundImage = "url('roll1.jpg')";
}
getElementByClassName("loader")