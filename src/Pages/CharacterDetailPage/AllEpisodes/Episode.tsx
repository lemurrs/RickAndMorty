import React from "react";
import {useGetEpisodeByIdQuery} from "../../../store/api/characters";

const Episode = ({id}: { id: number }) => {
    const {data: Data, isLoading, error} = useGetEpisodeByIdQuery(id)
    if (isLoading) return <div>Loading</div>

    return <div>
        <p><b>{Data?.episode}</b> <br/> {Data?.name} </p>
    </div>

}
export default React.memo(Episode)