import React, { useState } from 'react';
import Header from './components/Header';
import Onama from './components/Onama';
import Partneri from './components/Partneri';
import ImgSlider from './components/ImgSlider';
import Footer from './components/Footer';
import Zakazivanje from './components/Zakazivanje';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Galerija from './components/Galerija';
import PocetnaGalerija from './components/PocetnaGalerija';
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
      <div>
          <Header/>    
            <Router>
              <Switch>
                <Route exact path="/zakazivanje">
                  <Zakazivanje/>
                </Route>
                <Route exact path="/galerija">
                  <Galerija/>
                </Route>
                <Route exact path="/">
          /*<ImgSlider/>
          <PocetnaGalerija/>
          <Onama/>
          <Partneri/>
                </Route>
              </Switch>
            </Router>
            <ScrollToTop/>
            <Footer/> 
      </div>
  );
}

export default App;
