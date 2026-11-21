import { useState } from 'react'

import './App.css'
import MusicPlayer from './components/MusicPlayer'
import Main from './components/Main'


function App() {
 
  return( 
    <div id="container"> 
      <MusicPlayer/>
      <Main/>
    </div>

  );
  
}

export default App
