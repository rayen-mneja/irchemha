let ScorTeam1=0;
let ScorTeam2=0;
let inputField = document.getElementById("team1");
let inputField2 = document.getElementById("team2");
let nameteam1=document.getElementById("nameteam1").value;
let nameteam2=document.getElementById("nameteam2").value;
function addToInput1(value) {
  
  inputField.value= value;
  inputField2.value = "-";
  updatemarkaSum();
}
function addToInput2(value) {
  inputField2.value = value;
  inputField.value = "-";
  updatemarkaSum();
}
function nameteam(){
    document.getElementById("n").textContent=String(document.getElementById("nameteam1").value);
    document.getElementById("v").textContent=String(document.getElementById("nameteam2").value);
}
function renderCart() {
    let cartBody = document.getElementById('cart-body');
    let team1=document.getElementById('team1').value;
    let team2=document.getElementById('team2').value;
    let scor1=document.getElementById('scor1');
    let scor2=document.getElementById('scor2');
    let row = document.createElement('tr');
    let productCell = document.createElement('td');
    let priceCell = document.createElement('td');
    let teamm1=0;
    let teamm2=0;
    if (team1==="-") {
      ScorTeam2=ScorTeam2+ Number(team2);
      priceCell.textContent = String(team2);
    } 
    if (team2==="-"){
      ScorTeam1=ScorTeam1+ Number(team1) ;
      productCell.textContent = String(team1) ;
    }
    if (team1!=="-" && team2!=="-") {
      if ( Number(team1)%10 in [0,1,2,3,4]) {
        teamm1=Number(team1)-(Number(team1)%10);
        productCell.textContent = String(teamm1) ;
      }else {
        teamm1=Number(team1)-(Number(team1)%10)+10;
        productCell.textContent = String(teamm1) ;
      
      };
      if ( Number(team2)%10 in [0,1,2,3,4]) {
         teamm2=Number(team2)-(Number(team2)%10);
         priceCell.textContent = String(teamm2) ;
      }else {
         teamm2=Number(team2)-(Number(team2)%10)+10;
         priceCell.textContent = String(teamm2);
         
      };
      ScorTeam1=ScorTeam1+ Number(teamm1) ;
      ScorTeam2=ScorTeam2+ Number(teamm2);
      
    }
    
    
    cartBody.appendChild(row);
    row.appendChild(productCell);
    row.appendChild(priceCell);
    scor1.innerHTML=String(ScorTeam1);
    scor2.innerHTML=String(ScorTeam2);
    document.getElementById('team1').value="";
    document.getElementById('team2').value="";

};