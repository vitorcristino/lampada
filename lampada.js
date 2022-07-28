const turnOnOff = document.getElementById ('turnOnOff')
const lamp = document.getElementById ('lamp')

function isLampBroken (){
    return lamp.src.indexOf ( 'quebrada' ) > -1
}


function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.png';
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h1").style.color = "black";
        turnOnOff.textContent = 'Desligar';

    }
}
function lampOff (){
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.png';
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
        turnOnOff.textContent = 'Ligar';

    }
}
function lampBroken (){
    lamp.src = './img/quebrada.png';
    turnOnOff.textContent = 'Trocar 💡'
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector('.trocar').textContent = 'A lâmpada quebrou, clique em trocar 💡'
}

// var btn = document.querySelector ("#resetar");

// btn.addEventListener('click', function() {
//     location.reload();
// });

function lampOnOff (){
    if ( turnOnOff.textContent == 'Ligar'&&!isLampBroken()){
        lampOn();
        turnOnOff.textContent = 'Desligar';
         document.querySelector('.trocar').textContent = ''
    }else {lampOff();
        turnOnOff.textContent = 'Ligar';
         document.querySelector('.trocar').textContent = ''
    }
}

function lampBrokenReset(){
    if(isLampBroken()){
        lamp.src='./img/desligada.png';
        lampOff();
         document.querySelector('.trocar').textContent = ''
    }
}



turnOnOff.addEventListener ('click', lampOnOff) ;
lamp.addEventListener ('mouseover', lampOn );
lamp.addEventListener ('mouseleave', lampOff );
lamp.addEventListener ('dblclick', lampBroken);
turnOnOff.addEventListener('click', lampBrokenReset);
