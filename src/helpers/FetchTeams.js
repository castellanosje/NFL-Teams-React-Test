import React from 'react'


export const FetchTeams = async(inputValue) => {
    const url = 'https://api.collegefootballdata.com/teams';
    const resp = await fetch(url);
    const data = await resp.json();
    const query = inputValue.toLowerCase();
    const maxQueries = 12;
    let c = 0;

    const teams = data.filter( (team , i) => {          
            const hasAbbreviation = team.abbreviation ? team.abbreviation: " ";
            // const hasAlt_name1= team.alt_name1? : ;
            // const hasAlt_name2= team.alt_name2? : ;
            // const hasAlt_name3= team.alt_name3? : ;
            const hasMascot = team.mascot ? team.mascot: " ";
            const hasSchool = team.school ? team.school: " ";      

            if( c < maxQueries && (hasAbbreviation.toLowerCase().includes(query) || hasMascot.toLowerCase().includes(query) || hasSchool.toLowerCase().includes(query) )){
                c++;
                console.log(c < maxQueries);
                return {
                    abbreviation: team.abbreviation,
                    alt_color: team.alt_color,
                    alt_name1: team.alt_name1,
                    alt_name2: team.alt_name2,
                    alt_name3: team.alt_name3,
                    color: team.color,
                    conference: team.conference,
                    division: team.division,
                    id: team.id,
                    logos: team.logos,
                    mascot: team.mascot,
                    school: team.school,
                }
            }
    });
    return teams;
}
