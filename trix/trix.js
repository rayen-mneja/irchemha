let scor1=0;
let scor2=0;
let scor3=0;
let scor4=0;
let lp=0;
let pr=1;
function name_players(){
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    let displayNameElement1 = document.getElementById('np1');
    let displayNameElement2 = document.getElementById('np2');
    displayNameElement2.textContent = name2;
    displayNameElement1.textContent = name1;
    let name3 = document.getElementById('name3').value;
    let name4 = document.getElementById('name4').value;
    let displayNameElement3 = document.getElementById('np3');
    let displayNameElement4 = document.getElementById('np4');
    displayNameElement3.textContent = name3;
    displayNameElement4.textContent = name4;
}
function rc(){
    lp+=1
    if (lp===9) {
        var scor=200;
    }else{
        var scor=100;
    }
    let cartBody1 = document.getElementById('cart-body1');
    let cartBody2 = document.getElementById('cart-body2');
    let cartBody3 = document.getElementById('cart-body3');
    let cartBody4 = document.getElementById('cart-body4');
    let p1=document.getElementById('p1');
    let rc1 = document.createElement('button');
    rc1.className = "btn";
    rc1.textContent = 'rc';
    p1.appendChild(rc1);
    rc1.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col1 = document.createElement('td');        
        if (pr===1) {
            scor1+=(scor*2);

            col1.textContent = String(scor*2);  
        }else{
            scor1+=scor;
            col1.textContent = String(scor);  
        }
        cartBody1.appendChild(row);
        row.appendChild(col1);
        document.getElementById('scor1').innerText=scor1;
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove(); 
      }
    );
    let p2=document.getElementById('p2');
    let rc2 = document.createElement('button');
    rc2.className = "btn";
    rc2.textContent = 'rc';
    p2.appendChild(rc2);
    rc2.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col2 = document.createElement('td');
        if (pr===2) {
            scor2+=(scor*2);
            col2.textContent = String(scor*2);
        } else {
            scor2+=scor;
            col2.textContent = String(scor);
        }
        cartBody2.appendChild(row);
        row.appendChild(col2);
        document.getElementById('scor2').innerText=scor2;
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove();
      }
    );
    let p3=document.getElementById('p3');
    let rc3 = document.createElement('button');
    rc3.className = "btn";
    rc3.textContent = 'rc';
    p3.appendChild(rc3);
    rc3.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col3 = document.createElement('td');
        if (pr===3) {
            scor3+=(scor*2);
            col3.textContent = String(scor*2);
        } else {
            scor3+=scor;
            col3.textContent = String(scor); 
        }
        cartBody3.appendChild(row);
        row.appendChild(col3);
        document.getElementById('scor3').innerText=scor3;
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove();
         
      }
    );
    let p4=document.getElementById('p4');
    let rc4 = document.createElement('button');
    rc4.className = "btn";
    rc4.textContent = 'rc';
    p4.appendChild(rc4);
    rc4.addEventListener('click', () => {
        let row = document.createElement('tr');
        let col4 = document.createElement('td');
        if (pr===4) {
            scor4+=(scor*2);
            col4.textContent=String(scor*2);
        } else {
            scor4+=scor;
            col4.textContent = String(scor);
        }
        cartBody4.appendChild(row);
        row.appendChild(col4);
        document.getElementById('scor4').innerText=scor4;
        rc1.remove();
        rc2.remove();
        rc3.remove();
        rc4.remove(); 
      }
    );
}