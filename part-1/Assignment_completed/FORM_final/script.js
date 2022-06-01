function fillTable(){
    var tbl=document.getElementById('tbody');
    var row=tbl.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    var cell6=row.insertCell();
    var cell7=row.insertCell();
    var cell8=row.insertCell();
    cell1.innerHTML=document.getElementById('first-name').value;
   
    cell2.innerHTML=document.getElementById('last-name').value;
    cell3.innerHTML=document.getElementById('address').value;
    cell4.innerHTML=document.getElementById('pincode').value;
    var gender=document.getElementsByName('gender');
     for(var i=0;i<gender.length;i++){
     if(gender[i].checked){
         var s=gender[i].value;
     }
  }
    cell5.innerHTML= s;
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
      if(markedCheckbox.length<2){
        alert('select atleast two food items');
      }
      for (var checkbox of markedCheckbox) {
        cell6.append(checkbox.value+' ');
      }
      cell7.innerHTML=document.getElementById('state').value;
      cell8.innerHTML=document.getElementById('country').value;
  
   document.getElementById('form').reset();
    }
  