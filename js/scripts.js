$(function() {

    //Function/Method do jogo Shoot On The Target Game.
    var gameShootOnTheTarget = function(){

//Variáveis/Atributos da function gameShootOnTheTarget
        var positionX;
        var positionY;
        var viewPlay = document.getElementById("view");
        var viewPlayWidth = document.getElementsByTagName("canvas")[0].attributes.getNamedItem("width").value;
        var viewPlayHeight = document.getElementsByTagName("canvas")[0].attributes.getNamedItem("height").value;
        var view = viewPlay.getContext("2d");
        var color1 = "white";
        var color2 = "red";
        var ray = 10;
        var remainingHTML = document.getElementById("remaining");
        var onTheTargetHTML = document.getElementById("onTheTarget");
        var remaining = document.getElementById("remaining").innerHTML;
        var onTheTarget = document.getElementById("onTheTarget").innerHTML;

        var shots = remaining;
        var setTime = 2000;
//End - Atributos

//Métodos do jogo
//Constructor
        this.constructor = function(){
            clickShoot();
        }; //end constructor
//End constructor

        var clickShoot = function(){
            setInterval(printView, setTime);
            viewPlay.onclick = function(evento){
            var x = evento.pageX - viewPlay.offsetLeft;
            var y = evento.pageY - viewPlay.offsetTop;
            //console.log("pos X " + x);
            //console.log("pos Y " + y);
            rulesOfGame(x, y);
          }; //onclick
        }; //end clickShoot

        var cleanView = function(){
                view.clearRect(0,0,viewPlayWidth,viewPlayHeight);
        }; //end cleanView

        var structTarget = function(x, y, color1, color2){
            styleTarget(x, y, ray+30, color1);
            styleTarget(x, y, ray+20, color2);
            styleTarget(x, y, ray+10, color1);
            styleTarget(x, y, ray, color2);
        }; //end structTarget

        var styleTarget = function(x, y, ray, color){
            view.fillStyle = color;
            view.beginPath();
            view.arc(x, y, ray, 0, 2 * Math.PI);
            view.fill();
        }; //end styleTarget

        var rafflesPositionTarget = function(max){
            //console.log("rafflesPositionTarget " + max);
            //console.log("Math.floor(Math.random() * max) " + Math.floor(Math.random() * max));
            return Math.floor(Math.random() * max);
        }; //end rafflesPositionTarget

        var rulesOfGame = function(x, y){
            //ammunition(shots);
            //console.log('remaining ' + remaining);
            //console.log('on The Target ' + onTheTarget);

          if ( shots <= 1){

            alert("You don't have ammunition, the game will be restarted!");
            inTarget(x,y);
            //window.location.reload();

          } else {

            shots = shots - 1;
            remainingHTML.innerHTML = shots;
            //onTheTargetHTML.innerHTML = onTheTarget;
            inTarget(x,y);
            return alert("You still have " + shots + " shots!");

          };

        }; //end rulesOfGame

        var inTarget = function(x, y){
          //Acerto
          if((x > positionX - ray) && (x < positionX + ray) && (y > positionY - ray) && (y < positionY + ray)){

            onTheTarget  = parseInt(onTheTarget) + 1;
            onTheTargetHTML.innerHTML = onTheTarget;
            console.log('onTheTarget ' + onTheTargetHTML.innerHTML);
            alert("Yes, you hit the target!");

          };
        }; //end inTarget

        var printView = function(){
            cleanView();
            positionX = rafflesPositionTarget(viewPlayWidth);
            positionY = rafflesPositionTarget(viewPlayHeight);
            structTarget(positionX, positionY, color1, color2);
        }; //end printView

//End - Métodos do jogo

    }; //end gameShootOnTheTarget funciton

    //Instanciando o objeto gameShootOnTheTarget
    var gameShootOnTheTarget = new gameShootOnTheTarget();

    //Setando o construtor do jogo
    gameShootOnTheTarget.constructor();

}); //end $function