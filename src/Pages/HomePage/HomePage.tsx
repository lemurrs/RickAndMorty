import React, {useState} from "react";
import { useGetAllCharactersQuery} from "../../store/api/characters";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import RickAndMorty from '../../Assets/imgs/RickAndMorty.png'
import c from './HomePage.module.css'
import {Button, Container} from "@mui/material";

export function HomePage() {

    let [page, setPage] = useState(1)
    let [inputName, setInputName] = useState('')
    let [inputSpecies, setInputSpecies] = useState('')
    let [inputGender, setInputGender] = useState('')
    let [inputStatus, setInputStatus] = useState('')

    const {data: allCharacters, isLoading, error} = useGetAllCharactersQuery(page)

    if (isLoading) return <h1>Loading data...</h1>
    if (error) return <h1>Something wrong</h1>

    let finalFilter = allCharacters?.results
        if (inputName) finalFilter =finalFilter?.filter(el => el.name.toLowerCase().includes(inputName.toLowerCase()))
        if (inputSpecies) finalFilter =finalFilter?.filter(el => el.species.toLowerCase().includes(inputSpecies.toLowerCase()))
        if (inputGender) finalFilter = finalFilter?.filter(el => el.gender.toLowerCase()===inputGender.toLowerCase())
        if (inputStatus) finalFilter = finalFilter?.filter(el => el.status.toLowerCase().includes(inputStatus.toLowerCase()));

    return (<div className={c.HomePage}>

        <div className={c.HomePage__RickAndMorty}>
            <img src={RickAndMorty} alt={'rickmorty'}/>
        </div>
        <Container maxWidth={'lg'}>

            <div className={c.HomePage__filter}>
                <input type="text" placeholder={'Filter by name...'}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           setInputName(e.target.value);
                       }} value={inputName}/>
                <input type="text" placeholder={'Species'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputSpecies(e.target.value);
                }} value={inputSpecies}/>
                <input type="text" placeholder={'Gender'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputGender(e.target.value);
                }} value={inputGender}/>
                <input type="text" placeholder={'Status'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputStatus(e.target.value);
                }} value={inputStatus}/>
            </div>
            <div className={c.HomePage__cards}>
                {finalFilter ? finalFilter?.map(characterData => (
                        <CharacterCard key={characterData.id}
                                       data={characterData}
                        />)) :
                    allCharacters?.results.map(characterData => (
                        <CharacterCard key={characterData.id}
                                       data={characterData}
                        />))
                }
            </div>
            <div className={c.HomePage__paginator}>
                {page > 1 &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty',}}
                            onClick={() => {
                                setPage(--page)
                            }}>Prev</Button>}
                {page < 42 &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty'}}
                            onClick={() => {
                                setPage(++page)
                            }}>Next</Button>}
            </div>

        </Container>
    </div>)
}