import React from "react";
import {Link} from "react-router-dom";
import c from './CharacterCard.module.css'
import {ICharacter} from "../../interface";

const CharacterCard = ({data}: { data: ICharacter }) => {
    return (<div className={c.CharacterCard}>
        <Link to={`/character/${data.id}`}>
            <img src={data.image} alt={''} style={{width: '100%'}}/>
        </Link>
        <div className={c.CharacterCard__info}>
            <p className={c.info__name}>{data.name}</p>
            <p className={c.info__species}>{data.species}</p>
        </div>
    </div>)
}
export default React.memo(CharacterCard)