import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import useWindowPosition from "../hook/useWindowPosition";
import GridArtistes from "./GridArtistes";
import Carousel from 'react-elastic-carousel';
import Billeterie from "./Billeterie";

const useStyles = makeStyles((theme => ({
    root : {
        minHeight : '100vh',
        //backgroundColor : '#ddd',
        minWidth : "80%",
        display : 'flex',
        justifyContent : "center",
        alignItems : "center"
    }
})));

export default function MainPage() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    console.log("Offset1 : "+window.pageYOffset , checked);
    return (
        <div className={classes.root} id="id_main_page">
            <Carousel itemsToShow={1}>
                <GridArtistes number ="1"/>
                <Billeterie number="2"/>
            </Carousel>


        </div>
    );
}



/*

<div >

                        <ImageCard artiste={artistes[0]} />
                        <ImageCard artiste={artistes[1]} />
                        <ImageCard artiste={artistes[2]} />
                        <ImageCard artiste={artistes[3]} />
                        <ImageCard artiste={artistes[4]} />
                        <ImageCard artiste={artistes[5]} />
                        <ImageCard artiste={artistes[6]} />
                        <ImageCard artiste={artistes[7]} />
                        <ImageCard artiste={artistes[8]} />
                        <ImageCard artiste={artistes[9]} />
                    </div>

listArtistes : {
        display: "flex",
        justifyContent : 'center',
        alignItems : 'center',
        flexWrap : "wrap",
        backgroundColor : 'red'
    },

import ImageCard from "./ImageCard";
import artistes from "../static/artistes";
export default function MainPage(){
    const classes = useStyles();
    console.log(artistes);
    return <div className={classes.root} id="id_main_page">
        <Container maxWidth="sm">
            <ImageCard artiste={artistes[0]} />
            <ImageCard artiste={artistes[1]} />
            <ImageCard artiste={artistes[2]} />
            <ImageCard artiste={artistes[3]} />
            <ImageCard artiste={artistes[4]} />
            <ImageCard artiste={artistes[5]} />
            <ImageCard artiste={artistes[6]} />
            <ImageCard artiste={artistes[7]} />
            <ImageCard artiste={artistes[8]} />
            <ImageCard artiste={artistes[9]} />
        <Container />
    </div>;
}

*/