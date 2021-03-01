import React, { useEffect, useState } from 'react'
import { TeamsGrid } from "./components/TeamsGrid";
import { useFetchTeams } from './hooks/useFetchTeams';


export const MainComponent = () => {
    
   
    const [ inputValue, setInputValue ] = useState('');
    const { data:teams, loading } = useFetchTeams(inputValue);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit = { handleSubmit }>
                <input
                    type="text"
                    value = {inputValue}
                    placeholder = "buscar un equipo..."
                    onChange = { handleInputChange }
                />
            </form>
            
            { teams && <TeamsGrid teams={ teams } loading = { loading } />}
        </>
    )
}
