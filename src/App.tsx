import React, {lazy} from 'react';
import {Header} from './Components/Header/Header'

import {Routes,Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./Assets/css/CardCss.css";
import RickAndMorty from "./Assets/imgs/RickAndMorty.png";

const HomePage = lazy(() =>
    import('./Pages/HomePage/HomePage')
        .then(({ HomePage }) => ({ default: HomePage })),
);
const CharacterDetailPage = lazy(() =>
    import('./Pages/CharacterDetailPage/CharacterDetailPage')
        .then(({ CharacterDetailPage }) => ({ default: CharacterDetailPage })),
);
const LocationPage = lazy(() =>
    import('./Pages/LocationPage/LocationPage')
        .then(({ LocationPage }) => ({ default: LocationPage })),
);
const EpisodePage = lazy(() =>
    import('./Pages/EpisodePage/EpisodePage')
        .then(({ EpisodePage }) => ({ default: EpisodePage })),
);


function App() {
  return (<div>
<Header/>
          <div className={`MainImage`}>
              <img src={RickAndMorty} alt={'rickmorty'}/>
          </div>
          <React.Suspense fallback={<h2>Loading...</h2>}>
<Routes>
    <Route path={'/'} element={<HomePage/>} />
    <Route path={'/characters'} element={<HomePage/>} />
    <Route path={'/character/:id'} element={<CharacterDetailPage/>}/>
    <Route path={'/locations/'} element={<LocationPage/>}/>
    <Route path={'/episodes/'} element={<EpisodePage/>}/>
    <Route path={'*'} element={<p>40000000000000000000004</p>} />
</Routes>
          </React.Suspense>
          <Footer/>
      </div>


  );
}

export default App;
