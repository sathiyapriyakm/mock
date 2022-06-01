
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload=function(){
    var data1=JSON.parse(request.response);

let  divtop= document.createElement("div");
divtop.className="container";
let  div1= document.createElement("div");
div1.className="container";
let table1=document.createElement("table");
table1.className="table table-striped";
table1.setAttribute("id","myTable");
var thead=document.createElement("thead");
thead.className="thead-dark";
  var cell0=document.createElement("th");
  var cell1=document.createElement("th");
  var cell2=document.createElement("th");

  cell0.innerHTML="ID";
  cell1.innerHTML="Name";
  cell2.innerHTML="E-mail";
thead.append(cell0,cell1,cell2);
var tbody=document.createElement("tbody");
tbody.setAttribute("id","table-body");

let  div2= document.createElement("div");
div2.className="container";
let  div3= document.createElement("div");
div3.setAttribute("id","pagination-wrapper");
div2.append(div3);
table1.append(thead,tbody);
div1.append(table1);
document.body.append(divtop,div1,div3);

var state = {
    'querySet': data1,
    'page': 1,
    'rows': 5,
    'window': 5,
    }


    buildTable();

    function pagination(querySet, page, rows) {
    
    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows
    
    var trimmedData = querySet.slice(trimStart, trimEnd)
    
    var pages = Math.ceil(querySet.length / rows);
    
    return {
        'querySet': trimmedData,
        'pages': pages,
    }
    }


function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper');
    
    wrapper.innerHTML = ``;
    
    var maxLeft = (state.page - Math.floor(state.window / 2));
    var maxRight = (state.page + Math.floor(state.window / 2));
    
    if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = state.window;
    }
    
    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)
        
        if (maxLeft < 1){
            maxLeft = 1;
        }
        maxRight = pages;
    }
    
    
for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
}

if (state.page != 1) {
    wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
}

if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
}

$('.page').on('click', function() {
    $('#table-body').empty()

    state.page = Number($(this).val())

    buildTable()
})

}

function buildTable() {
    var table = $('#table-body')

var data = pagination(state.querySet, state.page, state.rows)
var myList = data.querySet

for (var i = 1 in myList) {
    //using  "Template Litterals to create rows"
    var row = `<tr>
              <td>${myList[i].id}</td>
              <td>${myList[i].name}</td>
              <td>${myList[i].email}</td>
              `
    table.append(row)
}

pageButtons(data.pages);
}
  

}