import React from 'react';
import AffichageNombre from './components/affichage-nombre/affichage-nombre';
import DateDuJour from './components/date-du-jour/date-du-jour-momentjs';
import EventBtn from './components/event-btn/event-btn';

function App() {
  return (
    <div className="App">
      <AffichageNombre />
      <DateDuJour />
      <EventBtn />
    </div>
  );
}

export default App;
