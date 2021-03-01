import React, { useState, useEffect} from 'react';
import {FetchTeams} from '../helpers/FetchTeams';

export const useFetchTeams = (query) => {
    /*precarga*/
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        FetchTeams(query).then(teams => {
            setState({
                data:teams,
                loading:false
            });
        });
    }, [ query ])
    
    return state;
    /*precarga*/
};

