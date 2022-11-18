import React from "react";
import c from './LocationCard.module.css'
import {ILocation} from "../../interface";

const LocationCard = ({data}: { data: ILocation }) => {
    return (<div className={c.LocationCard}>
        <div className={c.LocationCard__info}>
            <p className={c.info__name}>{data.name}</p>
            <p className={c.info__species}>{data.type}</p>
        </div>
    </div>)
}
export default React.memo(LocationCard)