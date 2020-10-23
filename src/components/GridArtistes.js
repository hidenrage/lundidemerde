import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'
import ImageCard from "./ImageCard";
import artistes from "../static/artistes";
import useWindowPosition from "../hook/useWindowPosition";
import Collapse from "@material-ui/core/Collapse";
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme => ({
    container : {
        minHeight : '80vh',
        backgroundColor : '#3dce8a',
        display : "flex",
        justifyContent :"space-around",
        alignItems : 'center',
        flexWrap :"wrap",
        borderRadius : "1em"
    },
    lesArtistes : {
        minWidth : "90vh",
    },
})));


export default function GridArtiste() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    console.log("Offset1 : "+window.pageYOffset , checked);
    return (
        <div className={classes.root} id="id_grid_artiste">
            <Collapse in={checked} {...(checked ? { timeout: 3000 } : {})}>
                <CssBaseline />
                <Container maxWidth="lg" className={classes.container}>
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
                </Container>
            </Collapse>
        </div>
    );
}

/*
 <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
                <CssBaseline />
                <Container maxWidth="lg" className={classes.container}>
                    <div className={classes.lesArtistes} >
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
                    <Button>
                        <ArrowForwardIosIcon className={classes.arrowRight}/>
                    </Button>
                </Container>
            </Collapse>

    arrowLeft : {
        display : "flex",
        alignItems : "center",
        fontSize : "5rem"
    },
    arrowRight : {
        display : "flex",
        justifyContent : "flex-end",
        alignItems : "center",
        fontSize : "5rem",
    }

*/