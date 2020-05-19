$(document).ready(function() {
    sesion();
    $(".icon").click(cerrar_sesion);
});


function rol(){
    $.ajax({
        type: "POST",
        url: "call_login.php",
        data: {
            'nombre':nombre
        },
        success: function(data) {
           if(data == 1){
               
           }else{
               $("#nombre_usuario").html(nombre);
               
           }
        }
    });
}

function sesion(){
    $.ajax({
       type: "POST",
       url: "comprueba_sesion.php",
       success: function(data) {
            nombre = data;
            rol();
            $(".nomu").html(data);
        }
    });
}

function cerrar_sesion(){
    $.ajax({
       type: "POST",
       url: "logout.php",
       success: function(data) {
           window.location.href = "index.html";
        }
    });
}