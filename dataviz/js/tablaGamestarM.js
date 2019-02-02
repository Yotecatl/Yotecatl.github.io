
var gamestar = [
    {
        titulo:'Diseño',
        crear: '',
        animacion: '',
        nivel: "Niveles",
        
    },
    {
        titulo:'Genero',
        crear: 'Plataforma y top-down',
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
console.log(gamestar);
var divTable = document.getElementById("tableG");
var tr = document.createElement("tr");
var table = document.createElement("table");
var tbody = document.createElement("tbody");

gamestar.forEach(gs => {
    var textNode1 = document.createTextNode(gs.titulo);
    var td1 = document.createElement('td');
    var textNode2 = document.createTextNode(gs.crear);
    var td2 = document.createElement('td');
    var textNode3 = document.createTextNode(gs.animacion);
    var td3 = document.createElement('td');
    var textNode4 = document.createTextNode(gs.nivel);
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