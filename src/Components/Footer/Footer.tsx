import React, {useState} from "react";
import {Container, Typography} from "@mui/material";
import c from './Footer.module.css'

const Footer = () => {
    return (<div className={c.Footer}>
        <Container maxWidth={'lg'}>
            <Typography variant="h1" component="h1" sx={{fontFamily: 'RickMorty', textAlign: 'center'}}>
                Lemming and Morty
            </Typography>
        </Container>
    </div>)
}
export default React.memo(Footer)