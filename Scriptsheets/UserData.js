var myObject;
function showIt(){
    deleteAll()
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/api/FormData", requestOptions)
        .then(response => response.text())
        .then(result => {
            myObject=result
            myObject=JSON.parse(myObject)
            for(let i=0;i<100;i++){
                var j=i+1
                var obj =myObject.recordset[i]
                let{name,email,age,phno} = obj;
                var a=name;
                var b=email;
                var c=age;
                var d=phno;
                myCreateFunction(a,b,c,d)
            } 

        })
        .catch(error => console.log('error', error));
}

function myCreateFunction(a,b,c,d) {
    var table = document.getElementById("id01");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = a;
    cell2.innerHTML = b;    
    cell3.innerHTML = c;
    cell4.innerHTML = d;
  }

function deleteAll()
{
    var table = document.getElementById("id01");
    //or use :  var table = document.all.tableid;
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
}

function deleteIt(){
    var item=document.getElementById('itemId').value;
    const options={ 
        method:"DELETE", 
        headers:{
            "Content-Type":"application/json"
        }};
    fetch('http://localhost:3000/api/FormData/'+item,options)
        .then(response=>{
            response.json()
            alert("Record has been deleted")
        });
}

  function updateIt(){
    var item=document.getElementById('itemId').value;

    var name = prompt("Enter new/existing name");
    var email = prompt("Enter new/existing emailId");
    var phno = prompt("Enter new/existing phno");
    var age = prompt("Enter new/existing age");

    const options={ 
        method:"DELETE", 
        headers:{
            "Content-Type":"application/json"
        }};
    fetch('http://localhost:3000/api/FormData/'+item,options)
        .then(response=>{
            response.json()
            //alert("Record has been deleted")
        });

    const data={
            "name":name,
            "email":email,
            "age":age,
            "phno":phno
    };
    const options1={
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    };
    fetch('http://localhost:3000/api/FormData',options1)
    .then(response=>{
        response.json()
        alert("Record has been updated")
    }); 
}

