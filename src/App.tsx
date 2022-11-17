import React from 'react';
import {Header} from './Components/Header/Header'
import {HomePage} from "./Pages/HomePage/HomePage";
import {CharacterDetailPage} from "./Pages/CharacterDetailPage/CharacterDetailPage";
import LocationPage from "./Pages/LocationPage/LocationPage";

import {Routes,Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import EpisodePage from "./Pages/EpisodePage/EpisodePage";
import "./Assets/css/CardCss.css";
import RickAndMorty from "./Assets/imgs/RickAndMorty.png";

function App() {
  return (

      <div>

<Header/>
          <div className={`MainImage`}>
              <img src={RickAndMorty} alt={'rickmorty'}/>
          </div>
<Routes>
    <Route path={'/'} element={<HomePage/>} />
    <Route path={'/characters'} element={<HomePage/>} />
    <Route path={'/character/:id'} element={<CharacterDetailPage/>}/>
    <Route path={'/locations/'} element={<LocationPage/>}/>
    <Route path={'/episodes/'} element={<EpisodePage/>}/>
    <Route path={'*'} element={<p>40000000000000000000004</p>} />
</Routes>
          <Footer/>
      </div>


  );
}

export default App;
