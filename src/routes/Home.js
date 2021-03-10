import React, { useState } from 'react'
import HelmetComponent from '../components/HelmetComponent';
import HomeForm from '../components/HomeForm'
import NavBar from '../components/NavBar'

const Home = () => {

    return (
        <>
            <HelmetComponent title="Home" />
            <NavBar></NavBar>
            <HomeForm></HomeForm>
        </>
    )
}

export default Home