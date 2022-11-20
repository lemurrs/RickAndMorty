import React from "react";
import c from './LocationCard.module.css'
import {ILocation} from "../../interface";
import {Link} from 'react-router-dom'

const LocationCard = ({data}: { data: ILocation }) => {
    return (
        <div className={c.LocationCard}>
            <Link to={`/location/${data.id}`}>
        <div className={c.LocationCard__info}>
            <p className={c.info__name}>{data.name}</p>
            <p className={c.info__species}>{data.type}</p>
        </div>
            </Link>
    </div>)
}
export default React.memo(LocationCard)