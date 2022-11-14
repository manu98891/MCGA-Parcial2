import React from 'react'
import Header from '../../header/header';
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import { Link } from 'react-router-dom';
import Body from '../../body/body';

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar />
            <Body/>
            <Footer />
        </div>
    )
}
export default Home