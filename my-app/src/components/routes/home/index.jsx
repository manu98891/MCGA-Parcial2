import React from 'react'
import Header from '../../header/header';
import Footer from "../../footer/footer";
import { Link } from 'react-router-dom';
import Main from '../../main/main';

const Home = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer />
        </div>
    )
}
export default Home