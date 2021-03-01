import React, { useEffect, useState } from 'react'

const FavButton = ({id, favCallBack}) => {

    const favIt = (e)=>{
        favCallBack(id);
    }

    

    return (
        <>
         <button className="favBtn" onClick={ favIt }><i className="fa fa-star"></i></button> 
        </>
    )
}

export default FavButton;