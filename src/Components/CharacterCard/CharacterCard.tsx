import React from "react";
import {Link} from "react-router-dom";
import c from './CharacterCard.module.css'
import {Typography} from "@mui/material";

const CharacterCard= ({data}:{data:any})=>{
    return(<div className={c.CharacterCard}>
        <Link to={`/character/${data.id}`}>
            <img src={data.image} alt={''} style={{width:'100%'}}/>
        </Link>
        <div className={c.CharacterCard__info}>
            <p className={c.info__name}>{data.name}</p>
            <p className={c.info__species}>{data.species}</p>
        </div>


    </div>)
}
export default CharacterCard