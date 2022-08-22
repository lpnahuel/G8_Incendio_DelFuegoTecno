import { useState, useEffect } from "react";

export const useAllProducts = (url) => {
    
    const [state, setState] = useState({
        dataProducts : null,
        isLoadingProducts : true
      });

    useEffect(() => {
        setState({
            ...state,
            isLoadingProducts : true
        });
        fetch(url)
        .then(response => response.json())
        .then(data => 
            setState({
                dataProducts : data,
                isLoadingProducts : false
            }))
            .catch(error => 
            setState({
                dataProducts : (error, 'error en el catch del fetch'),
                isLoadingProducts : false,
            })
        )
    } , []);

    return {
        dataProducts : state.dataProducts,
        isLoadingProducts : state.isLoadingProducts
    }

}