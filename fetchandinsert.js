var arrHead = new Array();
arrHead = ['Planet Name', 'Climate', 'Diameter', 'Terrain', 'Population']; // table headers.
document.addEventListener( "DOMContentLoaded", getData, false );
document.addEventListener( "DOMContentLoaded", createTable, false );
// first create a TABLE structure by adding few headers.
function createTable() {
    var pTable = document.createElement('table');
    pTable.setAttribute('id', 'pTable');  // table id.

    var tr = pTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th'); // the header object.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(pTable);    // add table to a container.
}

// function to add new row.
function getData(){
    url = "https://swapi.dev/api/planets/" ;
    fetch(url).then((response)=>{
        return response.json();
    }).then(data=>{
        console.log(data['results']);
        append_json(data['results'])
        

    })
    
}

function append_json(data){
    var table = document.getElementById('pTable');
    data.forEach(function(object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.name + '</td>' +
        '<td>' + object.climate + '</td>' +
        '<td>' + object.diameter + '</td>' +
        '<td>' + object.terrain + '</td>' +
        '<td>' + object.population + '</td>' ;
        table.appendChild(tr);
    freestuff = object    
    });
}

// function addRow(){
//     getData();
// }



