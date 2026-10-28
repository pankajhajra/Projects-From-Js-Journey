const forrm = document.querySelector('form')

///const height = parseInt(documnet.querySelector('#height).value) /// give empty Value
//stop default

forrm.addEventListener('submit', function (e) {
    e.preventDefault()


    const heiight = parseInt(document.querySelector('#height').value)
    const weiight = parseInt(document.querySelector('#weight').value)
    const ressult = document.querySelector("#results");


    if(heiight === '' || heiight < 0 || isNaN(heiight) ){
        ressult.innerHTML = `<h1>please give a valid height</h1> ${heiight}`;
    }else if (weiight === '' || weiight < 0 || isNaN(weiight)) {
        ressult.innerHTML = `<h1> Please give a valid weight </h1> ${weiight}`;
    } else {
        const bmi = (weiight / ((heiight * heiight) / 10000)).toFixed(2) //x.yy 
        ressult.innerHTML = `<span>${bmi}</span>`;    
         
        
        if (bmi < 18.6) {
           ressult.innerHTML = `${bmi} is So You are underweight`;
         } else if (bmi > 18.6 && bmi < 24.9) {
           ressult.innerHTML = ` ${bmi} is SO Normal Weight`;
         } else {
           ressult.innerHTML = `${bmi} is So You're Over Weight`;
         }
    }
   

})