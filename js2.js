$(document).ready(function() {
    show_img_user();

});


function show_img_user(){
  nombre = $(".nombre_usuario").text();
  alert(nombre);
  $.ajax({
    type: "POST",
    url: "show_user.php",
    data: {
       'nombre':nombre
    },
    dataType:"JSON",
    success: function(data) {

      alert(data);
      while(cont < Object.keys(data).length){
        $(".a").append(data[cont]);
        cont++;
        $(".b").append(data[cont]);
        cont++;
        $(".c").append(data[cont]);
        cont++;
        $(".d").append(data[cont]);
        cont++;
        $(".e").append(data[cont]);
        cont++;
      }

    }
  });
}

