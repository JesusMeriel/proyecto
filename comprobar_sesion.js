$(document).ready(function() {
    sesion();
    $(".icon").click(cerrar_sesion);
});

function sesion(){
    $.ajax({
       type: "POST",
       url: "comprueba_sesion.php",
       success: function(data) {
           console.log(data)
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