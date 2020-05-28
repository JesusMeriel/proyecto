$(document).ready(function() {

  inf();

  $(".icon").click(cerrar_sesion);
});


function inf(){
  $.ajax({
        type: "POST",
        url: "call_inf.php",
        success: function(data) {
          sesion(data);
           
        }
    });
}

function rol(nom){
    //alert("hhhh");
    $.ajax({
        type: "POST",
        url: "call_log.php",
        data: {
            'nom':nom
        },
        success: function(data) {
            //alert(data);
           if(data == 1){
              //alert("jejejejeje");
              $("#admin_usuario").removeClass("rol");
              $("#nombre_usuario").html(nom);
           }else{
              //alert("jejejejeje");
              $("#nombre_usuario").html(nom);
               
           }
        }
    });
}

function sesion(){
    mail = "jesusmeriel@gmail.com";
    pass = "P@ssw0rd";
    // alert(pass);
    $.ajax({
       type: "POST",
       url: "comprueba_sesion.php",
       data: {
            'mail':mail,
            'pass':pass
        },
       success: function(data) {
            nombre = data;
            // alert(nombre);
            rol(nombre);
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