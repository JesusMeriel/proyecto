$(document).ready(function() {
    sesion();
    $(".icon").click(cerrar_sesion);
});

function sesion(){
    $.ajax({
       type: "POST",
       url: "comprueba_sesion.php",
       success: function(data) {
            $(".nomu").html(data);
        }
    });
}

function cerrar_sesion(){
    close = 1;
    $.ajax({
       type: "POST",
       url: "comprueba_sesion.php",
       data: {
               'close':close,
        },
       success: function(data) {
            $(".nomu").html(data);
        }
    });
}