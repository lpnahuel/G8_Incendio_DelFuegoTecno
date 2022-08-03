window.addEventListener('load', () => {


    let userForms = document.querySelector('#userForms');
    let inputs = document.forms['userForms'].elements;
    let errorMessages = document.querySelectorAll('.jsError');


    for(let i = 0; i < inputs.length; i++){

        inputs[i].addEventListener('blur', (event) =>{

            if(inputs[i].name === 'first_name' || inputs[i].name === 'last_name' || inputs[i].name === 'address' || inputs[i].name === 'phone' || inputs[i].name === 'city'){
                if(inputs[i].value === '' || inputs[i].value.length < 3){
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    errorMessages[i].innerHTML = '*Este campo es obligatorio y debe tener más de 3 caracteres';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    errorMessages[i].innerHTML = '';
                }
            }


            if(inputs[i].name === 'birth'){
                if(inputs[i].value === ''){
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    errorMessages[i].innerHTML = '*Este campo es obligatorio';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    errorMessages[i].innerHTML = '';
                }
            }

            if(inputs[i].name === 'password'){
                if(inputs[i].value === '' || inputs[i].value.length < 8){
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    document.getElementById('passwordError').innerHTML = 'La contraseña debe tener más de 8 caracteres';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    document.getElementById('passwordError').innerHTML = '';

                }
            }
            
            let password = document.getElementById('password').value;
 
            if(inputs[i].name === 'passwordRepeat'){
                if(inputs[i].value !== password || inputs[i].value === ''){
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    document.getElementById('passwordRepeatError').innerHTML = 'Las contraseñas deben coincidir';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    document.getElementById('passwordRepeatError').innerHTML = '';
                }

            }

            if(inputs[i].name === 'email'){
                if(inputs[i].value !== '' && inputs[i].value.includes('@') && inputs[i].value.includes('.')){
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    document.getElementById('emailError').innerHTML = '';
                }else{
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    document.getElementById('emailError').innerHTML = 'Debes ingresar un email válido';
                }
            }


            if(inputs[i].name === 'cp'){
                if(inputs[i].value === '' || inputs[i].value.length < 4 || inputs[i].value.length > 7){
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                }
            }
            
        })

        inputs[i].addEventListener('change', (event)=>{

            if(inputs[i].name === 'image'){
                if(inputs[i].value.includes('.png') || inputs[i].value.includes('.jpg')|| inputs[i].value.includes('.webp')){
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    document.getElementById('imageRegister').innerHTML = '';
                }else{
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    document.getElementById('imageRegister').innerHTML = 'Formato inválido! Los formatos de imagen permitidos son: .jpg, .png y .webp';
                }
            }
        })


    }

    userForms.addEventListener('submit', (event) => {
        let errors = [];

        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].value === '' && inputs[i].name !== 'image'){
                event.preventDefault();
                inputs[i].classList.remove('valid');
                inputs[i].classList.add('invalid');
                errors.push(`El campo ${inputs[i]} no puede estar vacío`);
                
            }else{
                inputs[i].classList.remove('invalid');
                inputs[i].classList.add('valid');
                form.submit();
            }
        }
    });


});