import React from 'react'
import Experience from './Experience/Experience'
import PrivatePaired from './PrivatePaired/PrivatePaired'
import PackagePay from './PackagePay/PackagePay'
import Download from './Download/Download'
// import Groups from './Groups/Groups'
import Secure from './Secure/Secure'
import FreeSession from './FreeSession/FreeSession'
import Studio from './Studio/Studio'
import PersonalTrainers from './PersonalTrainers/PersonalTrainers'
import Banner from './Banner/Banner'

function Home() {
  return (
    <>
      <Banner />
      <Secure /> 
      <FreeSession /> 
      <PersonalTrainers />
      <Studio/>
      <PrivatePaired />
      <PackagePay />
      {/* <Groups/> */}
      <Download/>
      <Experience />
    </>
  )
}

export default Home
