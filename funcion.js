

document.getElementById('boton').addEventListener('click', function(){

    let correo = document.getElementById('correo');
    
    if(correo.innerHTML== 'francobenitezd94@gmail.com')
        correo.innerHTML= 'franco.benitez@est.fi.uncoma.edu.ar';
    else correo.innerHTML= 'francobenitezd94@gmail.com';
});