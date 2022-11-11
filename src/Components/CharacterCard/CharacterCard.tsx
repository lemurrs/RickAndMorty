import React from "react";
import {Link} from "react-router-dom";
import c from './CharacterCard.module.css'
import {Typography} from "@mui/material";

const CharacterCard= ({data}:{data:any})=>{
    return(<div className={c.CharacterCard}>
        <Link to={`/character/${data.id}`}>
            <img src={data.image} alt={''} style={{width:'100%'}}/>
        </Link>
        <Typography sx={{textAlign:'center'}}>{data.name}</Typography>
    </div>)
}
export default CharacterCard