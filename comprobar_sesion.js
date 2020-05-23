$(document).ready(function() {
    $(".binput").click(sesion);
    $(".icon").click(cerrar_sesion);
});


function rol(nom){
  alert("nom");
    $.ajax({
        type: "POST",
        url: "call_login.php",
        cache: false,
        data: {
            'nom':nom,
        },
        success: function(data) {
           if(data == 1){
               
           }else{
               $("#nombre_usuario").html(nom);
               
           }
        }
    });
}

function sesion(){
    mail = $(".ninput").val();
    pass = $(".pinput").val();
    $.ajax({
       type: "POST",
       url: "comprueba_sesion.php",
       data: {
            'mail':mail,
            'pass':pass
        },
       success: function(data) {
            nombre = data;
            rol(nombre);
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