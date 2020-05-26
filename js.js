$(document).ready(function() {
    $(".buscador").focus(a);
    $(".buscador").blur(b);
    $(".ninput").blur(verificaMail_login);
    $(".minput").blur(verificaMail_reg);
    $(".pinput").blur(verificaPass_login);
    $(".cinput").blur(verificaPass_reg);
    $(".inombre").blur(verificanom);
    $(".iapellido").blur(verificaap);
    $(".fregis").click(registro);
    $(".perror").click(requisitos_login);
    $(".cerror").click(requisitos_reg);
    entrar = 0;
    $(".binput").click(validacion_servidor);
    $(".binput").click(enviar_inf);
    $(".binput_reg").click(datos_registro);
    $("#busqueda").keyup(buscar);
    $(".estiloAd").click(admin_usuario);
    // setTimeout(function(){  alert("espera");   alert(mail); }, 3000);
    

    // $("#inf").text(mail);
    // p = $("#inf").html();
    // if(p == undefined){

    // }else{
      
    // }
});

function prueb(correo){
  $("#inf").text(correo);
}
ok = 0;
function a(){
    $(".divbusc").addClass("fbusc");
}

function b(){
    $(".divbusc").removeClass("fbusc");
}

function borrar_user(){
    mail = this.id;
    if (!!nombre) {
        $.ajax({
           type: "POST",
           url: "delete_usu.php",
           cache: false,
           data: {
               'mail':mail
           },
            success: function(data) {
                if(data==1){
                    alert("borrado");
                }else{
                    alert("no borrado");
                }
            }
         });
    } else { 
        $("#resultadoBusqueda").html('');
	} 
    
}

function buscar(){
    resul_busqueda = $(".buscador").val();
    if (!!resul_busqueda) {
        $.ajax({
           type: "POST",
           url: "buscar.php",
           cache: false,
           data: {
               'resul_busqueda':resul_busqueda
           },
           success: function(data) {
                
            }
         });
    } else { 
        $("#resultadoBusqueda").html('');
	} 
}

function requisitos_login(){
    $(".login").css("margin-top","10%");
    $(".requisitos_login").removeClass("invisible");
}

function requisitos_reg(){
    $(".registro").css("margin-top","7%");
    $(".requisitos_reg").removeClass("invisible");
}

function verificaMail_login(){
    chiv = 0;
    var expresion_regular = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
	if(expresion_regular.test($(".ninput").val())){
	    $("#nerror").html(" ");
		entrar++;
	}else{
		$("#nerror").html("*La sintaxis del mail no es correcta");
		return(false);
	}
	
	
}

function verificaMail_reg(){
    var expresion_regular = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
	if(expresion_regular.test($(".minput").val())){
	    $("#merror").html(" ");
		m = "t";
	}else{
		$("#merror").html("*La sintaxis del mail no es correcta");
		ok--;
		return(false);
	}
}

function verificanom(){
    var expresion_regular = /^([A-ZÁÉÍÓÚ a-zñáéíóú]{1}[a-zñáéíóú]+[\s]*)+$/
    if(expresion_regular.test($(".inombre").val())){
	    $("#errornom").html(" ");
		n = "t";
	}else{
		$("#errornom").html("*La sintaxis del  nombre no es correcta");
		ok--;
		return(false);
	}
}

function verificaap(){
    var expresion_regular = /^([A-ZÁÉÍÓÚ a-zñáéíóú]{1}[a-zñáéíóú]+[\s]*)+$/
    if(expresion_regular.test($(".iapellido").val())){
	    $("#errorap").html(" ");
		a = "t";
	}else{
		$("#errorap").html("*La sintaxis del  apellido no es correcta");
		ok--;
		return(false);
	}
}

function verificaPass_login(){
    var expresion_regular = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
	if(expresion_regular.test($(".pinput").val())){
	    $(".perror").html(" ");
		entrar++;
	}else{
		$(".perror").html("*La contraseña  no cumpe con los <p class='req'>requisitos</p>");
		return(false);
	}
}

function verificaPass_reg(){
    var expresion_regular = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
	if(expresion_regular.test($(".cinput").val())){
	    $(".cerror").html(" ");
		p = "t";
	}else{
		$(".cerror").html("*La contraseña  no cumpe con los <p class='req'>requisitos</p>")
		ok--;
		return(false);
	}
}

function registro(){
    $(".login").addClass("invisible");
    $(".registro").removeClass("invisible");
}

function validacion_servidor(){
    mail = $(".ninput").val();
    pass = $(".pinput").val();
    correo = $(".ninput").val();

    if (!!mail) {
        $.ajax({
           type: "POST",
           url: "call_login.php",
           cache: false,
           data: {
               'mail':mail,
               'pass':pass
           },
           success: function(data) {
                //alert(data);
                if(data == 1){
                    location.href="home.html";
                    prueb(correo);
                }else{
                    $(".perror").html("*El mail o la contraseña son incorrectos");
                }
            }
         });
    } else { 
        $("#resultadoBusqueda").html('');
    }
}


function admin_usuario(){
    $.ajax({
       type: "POST",
       url: "administrar.php",
       cache: false,
       success: function(data) {
            $(".cuerpo2").html(data);
            $(".removeicon").click(borrar_user);
        }
    });
} 

function datos_registro(){
    nombre = $(".inombre").val();
    apellido = $(".iapellido").val();
    mail = $(".minput").val();
    pass = $(".cinput").val();
    
    console.log(n +" "+ a +" "+ m +" "+ p);
    if((p === "t")&&(n === "t")&&(m === "t")&&(a === "t")){
        alert("entra");
        $.ajax({
           type: "POST",
           url: "call_insert.php",
           cache: false,
           data: {
               'nombre':nombre,
               'apellido':apellido,
               'mail':mail,
               'pass':pass
           },
           success: function(data) {
                if(data != 2){
                    $(".inombre").val("");
                    $(".iapellido").val("");
                    $(".minput").val("");
                    $(".cinput").val("");
                    $(".registro").addClass("invisible");
                    $(".login").removeClass("invisible");
                    ok = 0;
                }else{
                    $("#merror").html("*El correo utilizado ya está registrado");
		            ok=2;
                }
            }
         });
    }
}
cont = 0;
function enviar_inf(){
  alert("inicio "+ cont);
  cont ++;
  if(cont == 1){
    alert(cont);
    mail = $(".ninput").val();
    pass = $(".pinput").val();
  }else if(cont == 2){
    alert("entra2");
    $("#inf").text("pene");
  }

  
}