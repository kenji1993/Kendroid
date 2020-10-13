(function(){
    let actualizarHora = function() {
        let hoy = new Date();
        let horas = hoy.getHours();
        let minutos = hoy.getMinutes();

        if(horas < 10) {
            horas = '0' + horas;
          };
          if(minutos < 10) {
              minutos = "0" + minutos;
          };
        
        document.getElementById('hora').innerHTML = horas + ':' + minutos; 
        
      
        
    };

        actualizarHora();
    let intervalo = setInterval(actualizarHora, 1000);
}())