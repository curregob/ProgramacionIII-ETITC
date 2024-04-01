document.getElementById("quinto-div").addEventListener("click", scrollUp);
function scrollUp(){
    var currentScroll= document.documentElement.scrollTop;
    if(currentScroll > 0){
        window.scrollTo (0,0);
    }
}


function calcularSuma(numeroLimite) {
    let suma = 0;
    for (let i = 1; i <= numeroLimite; i++) {
      suma += i;
    }
    return suma;
  }
  
  const numeroLimiteInput = document.getElementById("numeroLimite");
  numeroLimiteInput.addEventListener("blur", function() {
    const numeroLimite = parseInt(numeroLimiteInput.value);
    const resultado = calcularSuma(numeroLimite);
    document.getElementById("resultado").textContent = resultado;
  });

  
  
  