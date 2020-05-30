$(document).ready(function() {
    
  
});
const imagePreview = document.getElementById('img-preview');
const imageUploader = document.getElementById('img-uploader');
const imageUploadbar = document.getElementById('img-upload-bar');

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/degfyt3eg/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'zhi3whpx';

imageUploader.addEventListener('change', async (e) => {
    console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }
    );
    imagePreview.src = res.data.secure_url;
    url = res.data.secure_url;
    $("#image_button").click(try_category);
    //alert(fecha);
    

    // $.ajax({
    //    type: "POST",
    //    url: ".php",
    //    data: {
    //         'url':url,
    //         'fecha':fecha
    //     },
    //    success: function(data) {
    //         nombre = data;
    //         // alert(nombre);
    //         rol(nombre);
    //     }
    // });
});

function try_category() {  
    if( $("#formulario input[name='categoria']:radio").is(':checked')) {  
        categoria = $('input:radio[name=categoria]:checked').val();
        descripcion = $("#descripcion").val();
        var f = new Date();
        fecha = f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate();
        nombre = $("#nombre_usuario").html();
        //inf_img(categoria, descripcion, fecha, nombre, url);
        if($("#etiqueta").val() != "[object HTMLInputElement]"){
            etiqueta = $("#etiqueta").val();
        }
        if($("#etiqueta2").val() != "[object HTMLInputElement]"){
            etiqueta2 = $("#etiqueta2").val(); 
        }  

        if((etiqueta)&&(etiqueta2)){
            
        }else if(etiqueta){
            etiqueta2 = etiqueta;
        }else if(etiqueta2){
            etiqueta = etiqueta2;
        }
        inf_img(categoria, descripcion, fecha, nombre, url, etiqueta, etiqueta2);
        
        // alert("categoria: "+ categoria +" descripcion: "+ descripcion +" fecha: "+ fecha +" url: "+ url +" nombre:"+ nombre +" etiqueta: "+ etiqueta + " etiqueta2: "+ etiqueta2);
    } else{  
        alert("Selecciona la edad por favor!!!");  
    }  
}

function inf_img(categoria, descripcion, fecha, nombre, url, etiqueta, etiqueta2){
    $.ajax({
       type: "POST",
       url: "call_save_img.php",
       data: {
            'categoria':categoria,
            'descripcion':descripcion,
            'fecha':fecha,
            'nombre':nombre,
            'etiqueta':etiqueta,
            'etiqueta2':etiqueta2,
            'url':url
        },
       success: function(data) {
            alert("entra");
            alert(data);
        }
    });
}