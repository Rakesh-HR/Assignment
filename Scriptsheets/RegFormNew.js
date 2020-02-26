
var password1=""
var password2=""
function psswrd1Check(){
    password1 = document.getElementById("psswrd1").value;
    var letters =/^[A-Za-z]\w{7,14}$/;
    if(!password1.match(letters))
      {
        document.getElementById("p1Alert").innerText='Use a stronger password \n Password length must be between 7 to 16 characters\nand contain only characters, numeric digits,\nunderscore and first character must be a letter'
      //alert('Use a stronger password \n Password length must be between 7 to 16 characters and contain only characters, numeric digits, underscore and first character must be a letter');
      document.getElementById("psswrd1").value="";
      document.getElementById("psswrd1").style.borderColor="red";
      document.getElementById("p1A").style.color="red";
      }
      else{
        document.getElementById("psswrd1").style.borderColor="green";
        document.getElementById("p1Alert").innerText=''
        document.getElementById("p1A").style.color="black";

      }
}
function psswrd2Check(){
    password2 = document.getElementById("psswrd2").value;
    if(password2=="")
    {
        document.getElementById("p2Alert").innerText='Enter Password'
        document.getElementById("psswrd1").value="";
        document.getElementById("psswrd1").style.borderColor="red";
        document.getElementById("psswrd2").value="";
        document.getElementById("psswrd2").style.borderColor="red";
        document.getElementById("p2A").style.color="red";
    }
    else if(password1!=password2)
      {
      //alert('Passwords dont match');
      document.getElementById("p2Alert").innerText='Passwords dont match'
      document.getElementById("psswrd1").value="";
      document.getElementById("psswrd1").style.borderColor="red";
      document.getElementById("psswrd2").value="";
      document.getElementById("psswrd2").style.borderColor="red";
      document.getElementById("p2A").style.color="red";
      }
      else{
        document.getElementById("psswrd2").style.borderColor="green";
        document.getElementById("p2Alert").innerText=''
        document.getElementById("p2A").style.color="black";
      }

}


function ageCheck(){
    var age = document.getElementById("age").value;
    if(age<18)
    {
        //alert("You are too young to register")
        document.getElementById("ageAlert").innerText='You are too young to register'
        document.getElementById("age").value="";
        document.getElementById("age").style.borderColor="red";
        document.getElementById("ageA").style.color="red";
    }    
    else if(age>100)
    {
        //alert("Check Again")
        document.getElementById("ageAlert").innerText='Check Again'
        document.getElementById("age").value="";
        document.getElementById("age").style.borderColor="red";
        document.getElementById("ageA").style.color="red";
    }
    else{
      document.getElementById("age").style.borderColor="green";
      document.getElementById("ageAlert").innerText=''
      document.getElementById("ageA").style.color="black";

    }
}
function phNoCheck(){
    var no = document.getElementById("phno").value;
    if(no<999999999 || no>10000000000)
    {
        //alert("You have entered an incorrect number ( Only 10 digit numbers are allowed )")
        document.getElementById("numberAlert").innerText='You have entered invalid number'
        document.getElementById("phno").value="";
        document.getElementById("phno").style.borderColor="red";
        document.getElementById("numberA").style.color="red";

    }
    else{
      document.getElementById("phno").style.borderColor="green";
      document.getElementById("numberAlert").innerText=''
      document.getElementById("numberA").style.color="black";

    }

}
function nameCheck(){
    var name=document.getElementById("name").value;
    var letters = /^[A-Z a-z]+$/;
    if(!name.match(letters))
      {
      //alert('Your have entered invalid name');
      document.getElementById("nameAlert").innerText='You have entered invalid name'
      document.getElementById("name").value="";
      document.getElementById("name").style.borderColor="red";
      document.getElementById("nameA").style.color="red";

      }
      else{
        document.getElementById("nameAlert").innerText=''
        document.getElementById("name").style.borderColor="green";      
        document.getElementById("nameA").style.color="black";

      }

}

function mailCheck(){
    var email=document.getElementById("email").value;
    var letters = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!email.match(letters))
      {
      //alert('Your have entered invalid email id');
      document.getElementById("emailAlert").innerText='You have entered invalid email id'
      document.getElementById("email").value="";
      document.getElementById("email").style.borderColor="red";
      document.getElementById("emailA").style.color="red";

      }
      else{
        document.getElementById("email").style.borderColor="green";
        document.getElementById("emailAlert").innerText=''
        document.getElementById("emailA").style.color="black";

      }
}
function addrCheck(addr)
{
    var name=document.getElementById(addr).value;
    var letters = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if(!name.match(letters))
      {
      document.getElementById(addr+"A").innerText='Your have entered invalid address'
      document.getElementById(addr).value="";
      document.getElementById(addr).style.borderColor="red";
      document.getElementById(addr+"L").style.color="red";
      }
      else{
        document.getElementById(addr).style.borderColor="green";
        document.getElementById(addr+"A").innerText=''
        document.getElementById(addr+"L").style.color="black";
      }
}

function pinNoCheck(){
    var no = document.getElementById("pinNo").value;
    var letters=/^[0-9]{6}$/;
    if(!no.match(letters))    
    {

      document.getElementById("pinNoA").innerText='You have entered an incorrect Pincode ( Only 6 digit codes are allowed )'
      document.getElementById("pinNo").value="";
      document.getElementById("pinNo").style.borderColor="red";
      document.getElementById("pinNoL").style.color="red";
    }
    else
    {
      document.getElementById("pinNo").style.borderColor="green";
      document.getElementById("pinNoA").innerText=''
      document.getElementById("pinNoL").style.color="black";
    }

}


function removeOptions(selectbox)
{
    var select = document.getElementById(selectbox);
    var length = select.options.length;
    for (i = 1; i < length; i++) {
         select.options[i] = null;
    }
}

var list="https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countryStateCity.json"
window.onload=function(){   
    var countryS=document.getElementById("selectCountry");
    let req=new XMLHttpRequest();
    req.open('GET',list);
    req.responseType='json';
    req.send();   
    req.onreadystatechange=function(){
        var add=req.response;
        for(var i=0;i<add.length;i++){
            var c=add[i].name;
            var op=document.createElement('option');
            op.textContent=c;      
            countryS.appendChild(op);
        }
    }
}


function stateSel(){
    var selected = document.getElementById("selectState");
    var selected2 = document.getElementById("selectCity");

    var country=document.getElementById("selectCountry").value
    selected.length=1;
    selected2.length=1;
    let requestURL = 'https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countryStateCity.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var text = request.response;
        for(var i=0;i<text.length;i++){
            var opt=text[i].name;
            if(opt==country){
                for(var j in text[i].states){
                    var opt1=j;
                    var el = document.createElement("option");
                    el.textContent = opt1;
                    selected.appendChild(el);
                }
            }
        }
    }
}


function citySel(){
    
    var countryS=document.getElementById("selectCountry").value;
    var stateS=document.getElementById("selectState").value;
    var cityS=document.getElementById("selectCity");
    
    var cityS=document.getElementById("selectCity");
    cityS.length=1;
    let requestURL = 'https://raw.githubusercontent.com/Rakesh-HR/countries-states-cities-database/master/countryStateCity.json';
    let req=new XMLHttpRequest();
    req.open('GET',requestURL);
    req.responseType='json';
    req.send();
    req.onload=function(){
        var add=req.response;
        for(var i=0;i<add.length;i++){
            if(countryS==add[i].name){
                var ct=add[i].states;
                for(var s in ct){
                    if(s==stateS){
                        var k=add[i].states[s];
                        for(var j=0;j<k.length;j++){
                            var op=document.createElement("option");
                            op.textContent=k[j];
                            cityS.appendChild(op);
                        }
                    }
                }
            }
        }
    }

}


function submitValidator(){
    var no = document.getElementById("phno").value;
    var age = document.getElementById("age").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    password1 = document.getElementById("psswrd1").value;
    password2 = document.getElementById("psswrd2").value;

    
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("buttonNext");
    var a1=document.getElementById("addr1").value;
    var a2=document.getElementById("addr2").value;
    var a3=document.getElementById("addr3").value;
    var countryS=document.getElementById("selectCountry").value;
    var stateS=document.getElementById("selectState").value;
    var cityS=document.getElementById("selectCity").value;
    var pinno = document.getElementById("pinNo").value;
    


    if(a1==""||a1==null||a2==""||a2==null||a3==""||a3==null||countryS=="Select Country"||stateS=="Select State"||cityS=="Select City"||pinno==""||pinno==null||no == "" || no== null || age == "" || age== null || name == "" || name== null || email == "" || email== null ||password1==""||password1==null ||password2==""||password2==null)
    {
      psswrd1Check();
      psswrd2Check();
      ageCheck();
      nameCheck();
      mailCheck();
      phNoCheck();
      pinNoCheck();
      addrCheck("addr1")
      addrCheck("addr2")
      addrCheck("addr3")
    }
    else
    {        
     // alert("\n Name : "+name+"\n Ph. No : "+no+"\n Age : "+age+"\n Email Id : "+email)
        
        btn.onclick = function() {
            modal.style.display = "block";
            document.getElementById("finalText1").innerHTML="Name : "+name+"\n Ph. No : "+no+"\n Age : "+age+"\n Email Id : "+email;
            document.getElementById("finalText2").innerHTML=`Your Address is: ${a1}, ${a2}, ${a3}, ${cityS}, ${pinno}`
            document.getElementById("nextPage").type="submit"
        }

        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}



