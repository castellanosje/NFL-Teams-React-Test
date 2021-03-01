import React, { useEffect, useState } from 'react'
import defLogo from '../assets/logo.png'
import FavButton from '../components/FavButton'
//logo colegio colores

//- abbreviation: team.abbreviation,
// alt_color: team.alt_color,
// alt_name1: team.alt_name1,
// alt_name2: team.alt_name2,
// alt_name3: team.alt_name3,
//- color: team.color,
// conference: team.conference,
// division: team.division,
//- id: team.id,
//- logos: team.logos,
//- mascot: team.mascot,
//- school: team.school,


export const TeamGridItem = ({color, alt_color, id, logos, mascot, school, abbreviation}) => {

    useEffect(() => {
        if(logos){

            /*guardarlos en un array y buscar por dark en la carpeta final para priorizar el logo blanco*/
            FetchImage(logos[0]).then(status => {
                const result = status ? logos[0] : defLogo;
                if(status){
                    const tempResult = result.replace(/(^\w+:|^)\/\//, '');
                    const finalResult = "https://"+tempResult;
                    setImage(finalResult);

                }else{
                    setImage(result);
                }
                
             });

            FetchImage(logos[1]).then(status => {
                const result = status ? logos[1] : defLogo;
                if(status){
                    const tempResult = result.replace(/(^\w+:|^)\/\//, '');
                    const finalResult = "https://"+tempResult;
                    setImage(finalResult);

                }else{
                    setImage(result);
                }
            });
        }

    }, [ ]);

    const [image, setImage] = useState(defLogo);
    
    const FetchImage = async(url) => {
            const resp = await fetch(url);
            return resp.status !== 404;
    }

    //const [childData, setChildData] = useState();

    const getFav = (fav)=>{
        //setChildData(fav);
        console.log(fav);
    }
    
    const estilos ={
        backgroundColor: color,
    }


    return (
        <div style={estilos} className="card" id={id}>
            <img src={ image } />
            <p>The {mascot} of:</p>
            <h2>{school}</h2>
            <p>- {abbreviation} -</p>
            {/* relamente necesito un componente para crear una lista de favs desde el boton? o lo hago desde aqui */}
            <FavButton id={ id } favCallBack={ getFav } />
            
        </div>
    )
}
