window.addEventListener('load', () => {

    let productForms = document.querySelector('#productForms');
    let inputs = document.forms['productForms'].elements;
    let errorMessages = document.querySelectorAll('.jsError');

    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('blur', (event) =>{

            //validamos que el campo nombre no esté vacío y tenga mínimo  5 caracteres y máximo 100
            if(inputs[i].name === 'name'){
                if(inputs[i].value === '' || inputs[i].value.length < 5 || inputs[i].value.length > 100){
                    inputs[i].classList.add('invalid');
                    document.getElementById('prod-name').innerHTML = '*Este campo es obligatorio y debe tener entre 5 y 100 caracteres';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    document.getElementById('prod-name').innerHTML = '';
                };
            };

            //campos obligatorios: precio, stock y categoría
            //STOCK y PRECIO que sean un número que no sé como se hace :D
            if(inputs[i].name === 'stock' || inputs[i].name === 'price' || inputs[i].name === 'category_id'){
                if(!inputs[i].value){                    
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    errorMessages[i].innerHTML = '*Este campo es obligatorio';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    errorMessages[i].innerHTML = '';
                };
            };

            //validamos la descripción obligatoria y que tenga mínimo 20 caracteres y max 1000
            if(inputs[i].name === 'description'){
                if(inputs[i].value === '' || inputs[i].value.length < 20 || inputs[i].value.length > 1000){                    
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    document.getElementById('prod-descript').innerHTML = '*Este campo es obligatorio, y debe tener entre 20 y 1000 caracteres';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    document.getElementById('prod-descript').innerHTML = '';
                };
            };
            
            //validamos las especificaciones hasta 1000 caracteres
            if(inputs[i].name === 'specs'){
                if(inputs[i].value.length > 1000){
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('invalid');
                    document.getElementById('prod-specs').innerHTML = '*No podés exceder los 1000 caracteres';
                }else{
                    inputs[i].classList.remove('invalid');
                    inputs[i].classList.add('valid');
                    document.getElementById('prod-specs').innerHTML = '';
                };
            };

        });

        // inputs[i].addEventListener('change', (event) =>{
            
            //validación array de imagenes principales: Por lo menos una imagen, hasta 4, y formatos válidos
            // if(inputs[i].name === 'image'){
            //     console.log('IMAGE?',inputs[i].value)
            // }


            //validamos la miniatura: sólo se permite una imagen, es obligatoria, y formatos válidos
        //     if(inputs[i].name === 'thumb'){
        //         console.log('THUMB?',inputs[i].value)
        //         if(inputs[i].value.includes('.png') || inputs[i].value.includes('.jpg') || inputs[i].value.includes('.webp')){
        //             inputs[i].classList.remove('invalid');
        //             inputs[i].classList.add('valid');
        //             document.getElementById('prod-thumb').innerHTML = '';
        //         }else{
        //             inputs[i].classList.remove('valid');
        //             inputs[i].classList.add('invalid');
        //             document.getElementById('prod-thumb').innerHTML = '*Formato inválido! Los formatos de imagen permitidos son: .jpg, .png y .webp';
        //         };

                
        //     };
        // });
    };

});