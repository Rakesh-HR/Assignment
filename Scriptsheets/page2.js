
var elements = document.getElementsByClassName("column");

var i;
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "99%";
    }                myFunction3();

}

function two() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "49%";
    }                myFunction3();

}

function three() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "32%";
    }
    myFunction3();

}

function six() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "16%";
    }   
    myFunction3();
}


function myFunction( dots, more, myBtn) {
    dot = document.getElementById(dots);
    moreText = document.getElementById(more);
    btnText = document.getElementById(myBtn);

    if (dot.style.display === "none") {
        dot.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } 
    else {
        dot.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}
function myFunction1( dots, more, myBtn) {
    dot = document.getElementById(dots);
    moreText = document.getElementById(more);
    btnText = document.getElementById(myBtn);

    if (dot.style.display === "none") {
        dot.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } 
    
}

function myFunction3(){

    for(i=1;i<=12;i++)
    {
        var dot='dots'+i+''
        var btnText='myBtn'+i+''
        var moreText='more'+i+''
        myFunction1(dot,moreText,btnText)
    }
}


function AddToCartQuantity(item){
    var n=document.getElementById("quantity").value;
    if(n>0){
        var t="The product : "+item +" with quantity : "+n+" has been added to cart"
        submitValidator(t)
    }
    else{
        alert("Quantity cannot be negetive");
        document.getElementById("quantity").value="";
    }
}

function RFQ(item){
    var n=document.getElementById("price").value;
    if(n<0)
    {
        alert("Price cannot be negetive");
        document.getElementById("price").value="";
    }
    else if(n<=20)
    {
        alert("Price must be more than 20")
        document.getElementById("price").value="";
    }
    else{
        var t="The product : "+item +" with quantity : "+n+" has been added to cart"
        submitValidator(t)
    }

}



function submitValidator(textt){
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById("pId").innerHTML=textt;
    textt=""
    
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById("price").value="";
        document.getElementById("quantity").value="";

    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("price").value="";
            document.getElementById("quantity").value="";

        }
    }
}