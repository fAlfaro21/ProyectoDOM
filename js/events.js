// Se pide:
// Mostrar al usuario un botón en pantalla que tenga dos posibles estados: OFF y ON:
//  OFF : Rojo
//  ON : Verde
// Inicialmente estara en OFF
// Cuando el usuario pinche sobre el botón, este cambiará su color y mostrará la palabra ON
// Cuando vuela a pinchar volvera a apagarse.
//-----------
// En el estado apagado aparecerá una imagen (balrog.jpg) y en el encendido aparecerá otra (newgandalf.jpg)

let enabledButton;
const button1 = document.getElementById("btn1");
const img1 = document.getElementById("img1");

function init(initialState, initialClass, initialText, initialImage){
  enabledButton = initialState;
  button1.className += initialClass;
  button1.innerText = initialText;

  //Cambiar la imagen
  img1.src = initialImage;
}

init(false, " off", "OFF", "img/balrog.jfif");

//-------------------------------- CAMBIOS -------------------------------

function changeState(){
  
  if (enabledButton){
    enabledButton = false;
    //button1.className += " on"; //con el +=, concatena el texto; con el = machacaría el texto. Para efectos de este ejemplo, quiero aniadir la clase on.
    button1.classList.remove("on");
    button1.classList.add("off");
    button1.innerText = "OFF"; //innerText te pega el texto tal cual, mientras que innerHTML te lo interpreta. Se trata de un CONTENEDOR (Texto)
    img1.src = "img/balrog.jfif";
  }
  else{
    enabledButton = true;
    //button1.className += " off"; 
    button1.classList.remove("off");
    button1.classList.add("on");
    button1.innerText = "ON";
    img1.src = "img/newgandalf.jfif";
  }
}

button1.addEventListener ("click", changeState); //cuando haga click en "btn1", debe ocurrir function changeState. OJO: la function NO LLEVA parentesis: esto es para que no se ejecute nada hasta que no ocurra el click. Una vez que hace el click, se ejecuta la función.