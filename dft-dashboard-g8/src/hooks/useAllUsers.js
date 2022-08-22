import {useState, useEffect} from 'react';

export const useAllUsers = (url) => {

    const [state, setState] = useState({
        dataUsers : null,
        isLoadingUsers : true
    })

    useEffect(() => {
        setState({
            ...state,
            isLoadingUsers : true
        });
        fetch(url)
        .then(response => response.json())
        .then(data => 
            setState({
                dataUsers : data,
                isLoadingUsers : false
            }))
            .catch(error => 
            setState({
                dataUsers : (error, 'error en el catch del users fetch'),
                isLoadingUsers : false,
            })
        )
    }, []);

    return {
        dataUsers : state.dataUsers,
        isLoadingUsers : state.isLoadingUsers
    }

}