import React from 'react';
import {Header} from './Components/Header/Header'
import {HomePage} from "./Pages/HomePage/HomePage";
import {CharacterDetailPage} from "./Pages/CharacterDetailPage/CharacterDetailPage";

import {Routes,Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (

      <div>

<Header/>

<Routes>
    <Route path={'/'} element={<HomePage/>} />
    <Route path={'/characters'} element={<HomePage/>} />
    <Route path={'/character/:id'} element={<CharacterDetailPage/>} />
    <Route path={'*'} element={<p>40000000000000000000004</p>} />
</Routes>
          <Footer/>
      </div>


  );
}

export default App;
