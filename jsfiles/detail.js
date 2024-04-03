function details(){
    // alert("hello world")
    debugger
    let obj ={"name":document.getElementById("text").value,"phoneNo":document.getElementById("phoneno").value,"email":document.getElementById("email").value,"address":document.getElementById("address").value}
    if(obj.name == ''){
         document.getElementById("textRes").innerHTML="Please Enter Your Name"
         document.getElementById("textRes").style.color="red"
    }
    else if(obj.name != ''){
        document.getElementById("textRes").innerHTML=''

    }    
    if(obj.phoneNo == '' ){
        document.getElementById("phoneRes").innerHTML="Please Enter Your Phone Number"
        document.getElementById("phoneRes").style.color="red"
   }
   else if(obj.phoneNo != ''){
       document.getElementById("phoneRes").innerHTML=''
   }
   
    if(obj.email == ''){
        document.getElementById("emailRes").innerHTML="Please Enter Your Mail Address"
        document.getElementById("emailRes").style.color="red"
    }
    else if(obj.email != ''){
        document.getElementById("emailRes").innerHTML=''
    }    
    if(obj.address == ''){
        document.getElementById("addressRes").innerHTML="Please Enter Your Address"
        document.getElementById("addressRes").style.color="red"
    }
    else if(obj.address != ''){
        document.getElementById("addressRes").innerHTML=''
    }

    

    console.log(obj.name);






}




