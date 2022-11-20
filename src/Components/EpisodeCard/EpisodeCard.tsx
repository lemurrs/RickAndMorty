import React from "react";
import c from './EpisodeCard.module.css'
import {Link} from "react-router-dom";
import {IEpisode} from "../../interface";

const EpisodeCard= ({ data }:{ data: IEpisode })=>{
    return(<div className={c.EpisodeCard}>
        <Link to={`/episode/${data.id}`}>
        <div className={c.EpisodeCard__info}>
            <p className={c.info__name}>{data.name}</p>
            <p className={c.info__species}>{data.episode}</p>
        </div>
        </Link>
    </div>)
}
export default React.memo(EpisodeCard)