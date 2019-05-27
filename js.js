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
    var expresion_regular = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
	if(expresion_regular.test($(".ninput").val())){
	    $("#nerror").html(" ");
		return(true);
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
    var expresion_regular = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
	if(expresion_regular.test($(".pinput").val())){
	    $(".perror").html(" ");
		return(true);
	}else{
	    alert("holacfcff");
		$(".perror").html("*La contraseña  no cumpe con los <p class='req'>requisitos</p>");
		return(false);
	}
}

function verificaPass_reg(){
    var expresion_regular = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
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