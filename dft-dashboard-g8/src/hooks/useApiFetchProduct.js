import { useState, useEffect } from 'react';

export const useApiFetchProduct = (url) => {


    const [state, setState] = useState({
        dataProduct: null,
        isLoading: true,
    });

    //esto era para que se ejecutara solo una vez, cuando hay algún cambio, y no todo el tiempo
    useEffect(() => {

        setState({
            ...state,
            isLoading: true,
        })

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setState({
                    dataProduct: data,
                    //como la función ya terminó de hacer la búsqueda, le mandamos "isLoading" a false porque ya terminó de hacer la carga
                    isLoading: false,
                    //si llegó al .then(), es porque no hubo errores, así que sigue siendo nulo
                    // hasErrors: null
                })
            })
            .catch(err => {
                setState({
                    dataProduct : null,
                    //si hubo un error, le mandamos "isLoading" a false porque ya terminó de hacer la carga
                    isLoading: false,
                    //le mandamos "hasErrors" con el error que se produjo
                    // hasErrors: err
                })
            })

    }, [url]);
    //le mando en la dependencia el valor que tiene que mirar para volver a ejecutarse.


    return {
        dataProduct : state.dataProduct,
        isLoading : state.isLoading,
        // hasErrors : state.hasErrors
    }
}