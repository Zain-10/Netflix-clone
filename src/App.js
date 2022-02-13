import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {action,Originals,Trending,Comedy,Horror,Romance} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import Posters from './Components/Posters/Posters'
function App() {
    return (
      <>
      <Navbar />
      <Banner />
      <Posters title='Netflix Originals' url={Originals}/>
      <Posters url={action} title='Action' isSmall/>
      <Posters url={Trending} title='Trending' isSmall/>
      <Posters url={Comedy} title='Comedy' isSmall/>
      <Posters url={Horror} title='Horror' isSmall/>
      <Posters url={Romance} title='Romance' isSmall/>
      </>
       
    )
}

export default App


