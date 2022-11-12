import React from "react";
import c from './LocationCard.module.css'

const LocationCard= ({data}:{data:any})=>{
    console.log(data)
    return(<div className={c.LocationCard}>
        <div className={c.LocationCard__info}>
            <p className={c.info__name}>{data.name}</p>
            <p className={c.info__species}>{data.type}</p>
        </div>
    </div>)
}
export default LocationCard