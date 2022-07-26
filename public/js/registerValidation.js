window.addEventListener('load', () => {


    let form = document.querySelector('#registerForm');
    let inputs = document.forms['registerForm'].elements;


    for(let i = 0; i < inputs.length; i++){

        inputs[i].addEventListener('blur', (event) =>{

            //acá validamos que los campos no estén vacíos
            if(inputs[i].name === 'first_name' || inputs[i].name === 'last_name' || inputs[i].name === 'birth' || inputs[i].name === 'address' || inputs[i].name === 'phone' || inputs[i].name === 'city'){
                if(inputs[i].value === '' || inputs[i].value.length < 3){
                    inputs[i].classList.add('invalid');
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                }
            }

            //acá validamos que la contraseña tenga más de 8 caracteres
            if(inputs[i].name === 'password'){
                if(inputs[i].value === '' || inputs[i].value.length < 8){
                    inputs[i].classList.add('invalid');
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                }
            }
            
            
            //acá validamos que los campos de contraseña coincidan
            //PROBLEMA: lo valida bien pero si cambio la contraseña y no cambio el campo de confirmación, no se vuelve a validar :(
            let password = document.querySelector('#password');
            if(inputs[i].name === 'passwordRepeat'){
                if(inputs[i].value !== password.value){
                    inputs[i].classList.add('invalid');
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                }

            }

            //acá validamos que el mail sea un e-mail válido
            if(inputs[i].name === 'email'){
                if(inputs[i].value !== '' && inputs[i].value.includes('@') && inputs[i].value.includes('.')){
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                }else{
                    inputs[i].classList.add('invalid');
                }
            }

            //acá validamos que el archivo sea una imagen válida
            if(inputs[i].name === 'image'){
                if(inputs[i].value.includes('.png') || inputs[i].value.includes('.jpg')|| inputs[i].value.includes('.webp')){
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                }else{
                    inputs[i].classList.add('invalid');
                }
            }

            //acá validamos el código postal
            if(inputs[i].name === 'cp'){
                if(inputs[i].value === '' || inputs[i].value.length < 4 || inputs[i].value.length > 7){
                    inputs[i].classList.add('invalid');
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                }
            }
            
        })


    }

    form.addEventListener('submit', (event) => {
        let errors = [];

        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].value == ''){
                event.preventDefault();
                inputs[i].classList.add('invalid');
                errors.push(`El campo ${inputs[i]} no puede estar vacío`);
                
            }else{
                inputs[i].classList.remove('invalid');
            }
        }
    });


});