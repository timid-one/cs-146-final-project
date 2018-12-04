var TotalVotes = 6;
var UsVotes = 3;
var FranceVotes = 2;
var ItalyVotes = 1;

function modifyBars(){
    document.getElementById("usBAR").style.width = UsVotes/TotalVotes*100 + "%";
    document.getElementById("italyBAR").style.width = ItalyVotes/TotalVotes*100 + "%";
    document.getElementById("franceBAR").style.width = FranceVotes/TotalVotes*100 + "%";
}

function UnitedStates(){
    UsVotes += 1;
    TotalVotes += 1;
    modifyBars();
}

function Italy(){
    ItalyVotes += 1;
    TotalVotes += 1;
    modifyBars();
}

function France(){
    FranceVotes += 1;
    TotalVotes += 1;
    modifyBars();
}

function displayprice(){
  var TicketPrices = document.getElementsByClassName("ticket");

  for(var i = 0; i < TicketPrices.length; i++){

    if (TicketPrices[i].style.display === "none") {
        TicketPrices[i].style.display = "table-cell";
    } else {
        TicketPrices[i].style.display = "none";
    }
}
}

function displayvotes(){
    document.getElementById("US").innerHTML = "United States: 24%";
    document.getElementById("italy").innerHTML = "Italy: 37%";
    document.getElementById("france").innerHTML = "France: 39%";
    document.getElementById("thanks").innerHTML = "Thank you for voting!";

}

function hideVotes(){
    document.getElementById("US").innerHTML = "";
    document.getElementById("italy").innerHTML = "";
    document.getElementById("france").innerHTML = "";
    document.getElementById("thanks").innerHTML = "";
}


function submitComment() {
    var text = document.getElementById("addComment").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    console.log(node);
    node.style.width = "100%";
    node.style.borderTop = "solid 1pt black";
    node.style.padding = "3px";
document.getElementById("insertComment").appendChild(node);
document.getElementById("addComment").value = "";
}
