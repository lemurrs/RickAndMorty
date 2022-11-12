import React from "react";
import Episode from "./Episode.tsx";

const AllEpisodes=({episodes}:{episodes:string[]})=>{
    return(<div>
        <h3>Episodes</h3>
        {episodes.length < 5 ? episodes.map(el =>
            <Episode key={Number(el.replace(/[^0-9]/g, ''))}
                     id={Number(el.replace(/[^0-9]/g, ''))}/>
        ) : episodes.slice(1, 6).map(el =>
            <Episode key={Number(el.replace(/[^0-9]/g, ''))}
                     id={Number(el.replace(/[^0-9]/g, ''))}/>
        )}</div>)
}
export default AllEpisodes