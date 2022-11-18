import React from "react";
import c from './EpisodeCard.module.css'

const EpisodeCard= ({data}:{data:any})=>{
    return(<div className={c.EpisodeCard}>
        <div className={c.EpisodeCard__info}>
            <p className={c.info__name}>{data.name}</p>
            <p className={c.info__species}>{data.episode}</p>
        </div>
    </div>)
}
export default React.memo(EpisodeCard)