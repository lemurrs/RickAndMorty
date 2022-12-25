import React, {memo, useState} from "react";
import {Link} from "react-router-dom";
import c from './Header.module.css'
import {Container} from "@mui/material";
import logo from '../../Assets/imgs/HeaderLogo.png'
import Menu from "../Menu/Menu";
function Header() {
    const [active,setActive]=useState(false)
    const items=[{value:'Characters',href:'/characters',icon:null},{value:'Locations',href:'/locations',icon:null},{value:'Episodes',href:'/episodes',icon:null}]
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
                <nav className={c.Hamburger} onClick={()=>{setActive(!active)}}>
                    <div className={`${c.HamburgerBtn} ${active? c.active : ''}`}>
                        <span></span>
                    </div>
                </nav>
            </div>
        </Container>
        <Menu active={active} setActive={setActive} header={'Menu'} items={items} />
    </div>)
}

export default memo(Header)