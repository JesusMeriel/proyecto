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
    sesion();
});

function a(){
    $(".divbusc").addClass("fbusc");
}

function b(){
    $(".divbusc").removeClass("fbusc");
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
		return(true);
	}else{
		$("#merror").html("*La sintaxis del mail no es correcta");
		return(false);
	}
}

function verificanom(){
    var expresion_regular = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/
    if(expresion_regular.test($(".inombre").val())){
	    $("#errornom").html(" ");
		return(true);
	}else{
		$("#errornom").html("*La sintaxis del  nombre no es correcta");
		return(false);
	}
}

function verificaap(){
    var expresion_regular = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/
    if(expresion_regular.test($(".iapellido").val())){
	    $("#errorap").html(" ");
		return(true);
	}else{
		$("#errorap").html("*La sintaxis del  apellido no es correcta");
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
		return(true);
	}else{
		$(".cerror").html("*La contraseña  no cumpe con los <p class='req'>requisitos</p>");
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
    if (!!mail) {
        $.ajax({
           type: "POST",
           url: "login.php",
           data: {
               'mail':mail,
               'pass':pass
           },
           success: function(data) {
                console.log(data);
                if(data == 1){
                    location.href="home.html";
                }else{
                    $(".perror").html("*El mail o la contraseña son incorrectos")
                }
            }
         });
    } else { 
        $("#resultadoBusqueda").html('');
	}
}