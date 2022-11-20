import React, {useState} from "react";
import {useGetAllCharactersQuery} from "../../store/api/characters";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import '../../Assets/css/GeneralCss.css'
import c from './HomePage.module.css'
import {Button, Container} from "@mui/material";


export function HomePage() {

    let [page, setPage] = useState(1)
    let [inputName, setInputName] = useState('')
    let [inputSpecies, setInputSpecies] = useState('')
    let [inputGender, setInputGender] = useState('')
    let [inputStatus, setInputStatus] = useState('')
    const {
        data: allCharacters,
        isLoading,
        error
    } = useGetAllCharactersQuery([inputName, inputSpecies, inputGender, inputStatus, page])
    console.log(allCharacters)
    return (<div className={c.HomePage}>

        <Container maxWidth={'lg'}>
            <div className={c.HomePage__filter}>
                <input type="text" placeholder={'Filter by name...'}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           setInputName(e.target.value);
                           setPage(1)
                       }} value={inputName}/>

                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setInputSpecies(e.target.value)
                    setPage(1)
                }} name="Species" id="Species-select">
                    <option value="">Species</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Poopybutthole">Poopybutthole</option>
                    <option value="Mythological Creature">Mythological Creature</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Robot">Robot</option>
                    <option value="Animal">Animal</option>
                    <option value="Cronenberg">Cronenberg</option>
                    <option value="Disease">Disease</option>
                </select>

                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setInputGender(e.target.value)
                    setPage(1)
                }} name="gender" id="gender-select">
                    <option value="">Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>


                <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setInputStatus(e.target.value)
                    setPage(1)
                }} name="status" id="status-select" placeholder={'Choose status'}>
                    <option value="">Status</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            <div className={`CardGallery`}>
                {error ?
                    <h1>No such creatures</h1> :
                    allCharacters?.results.map(characterData => (
                        <CharacterCard key={characterData.id}
                                       data={characterData}
                        />))
                }
            </div>
            <div className={`PaginatorButtons`}>
                {allCharacters?.info.prev && !error &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty',}}
                            onClick={() => {
                                setPage(--page)
                            }}>Prev</Button>}
                {allCharacters?.info.next && !error &&
                    <Button variant="contained" size={'large'} sx={{fontSize: '2rem', fontFamily: 'RickMorty'}}
                            onClick={() => {
                                setPage(++page)
                            }}>Next</Button>}
            </div>

        </Container>
    </div>)
}