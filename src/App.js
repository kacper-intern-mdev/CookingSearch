import React from 'react';
import Shelf from './components/Shelf';
import Header from './components/Header/Header'
import FoodContent from './components/FoodContent/FoodContent';

import "./styles.css";

const classes = {
  appBody: {
    width: "100%",
  }
}

function App() {

  return (
    <div style={classes.appBody}>
      { false && <Shelf /> }
      <Header />
      <FoodContent />
    </div>
  );
}

export default App;
