const formNuevoUsuario = document.querySelector('#formNuevoUsuario');

formNuevoUsuario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#Apellido').value;
    const username = document.querySelector('#Usuario').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#contraseña').value;


    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden',
        });
        return;
    }

    const response = await fetch('http://localhost:4000/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            apellido,
            nombre,
            email,
            password,
        }),
    });

    const respToJson = await response.json();
    
    if(response.status !== 201 && response.status !== 200) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: respToJson.message,
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Usuario creado',
        text: respToJson.message,
    });

    console.log(respToJson.message);

    formNuevoUsuario.reset();

    setTimeout(() => {
        window.location.href = '/usuarios';
    }, 2000);

});
    