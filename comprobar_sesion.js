$(document).ready(function() {

  p = $("#inf").html();
  alert(p); 
  sesion();
  $(".icon").click(cerrar_sesion);
});


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
               //alert("mierda"); 
           }else{
              //alert("jejejejeje");
              $("#nombre_usuario").text("nombre");
               
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
            $("#nombre_usuario").html(data);
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