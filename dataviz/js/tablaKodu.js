var kodu = [
    {
        titulo:'Diseño',
        crear: '',
        animacion: '',
        nivel: "Niveles",
        
    },
    {
        titulo:'Genero',
        crear: '3D',
        animacion:"", 
        nivel: "", 
    },
    {
        titulo:'Programación',
        crear: 'Enemigos y personaje',
        animacion:"", 
        nivel: "", 
    },
    
];
console.log(kodu);
var divTable = document.getElementById("tableK");
var tr = document.createElement("tr");
var table = document.createElement("table");
var tbody = document.createElement("tbody");

kodu.forEach(k => {
    var textNode1 = document.createTextNode(k.titulo);
    var td1 = document.createElement('td');
    var textNode2 = document.createTextNode(k.crear);
    var td2 = document.createElement('td');
    var textNode3 = document.createTextNode(k.animacion);
    var td3 = document.createElement('td');
    var textNode4 = document.createTextNode(k.nivel);
    var td4 = document.createElement('td');
    var tr = document.createElement("tr");
    td1.appendChild(textNode1);
    td2.appendChild(textNode2);
    td3.appendChild(textNode3);
    td4.appendChild(textNode4);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
}); // forEach para cada elemento de un arreglo solomante
table.classList.add("table");
table.appendChild(tbody);
divTable.appendChild(table);//ponemos el elemento tabla en el div