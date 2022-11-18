import React, {memo} from "react";
import {Link} from "react-router-dom";
import c from './Header.module.css'
import {Container} from "@mui/material";
import logo from '../../Assets/imgs/HeaderLogo.png'
function Header() {

    return (<div className={`${c.Header}`}>

        <Container maxWidth={'lg'}>
            <div className={c.Header__content}>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                    <img src={logo} alt={'RickAndMorty'}/>
                </Link>
                <nav className={c.Header__nav}>
                    <Link to={'/characters'} style={{textDecoration: 'none', color: 'black'}}>Characters</Link>
                    <Link to={'/locations'} style={{textDecoration: 'none', color: 'black'}}>Locations</Link>
                    <Link to={'/episodes'} style={{textDecoration: 'none', color: 'black'}}>Episodes</Link>
                </nav>
            </div>
        </Container>


    </div>)
}

export default memo(Header)