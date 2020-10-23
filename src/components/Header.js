import React, {useEffect, useState} from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {AppBar, IconButton, Toolbar , Collapse} from "@material-ui/core";
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import {Link as Scroll} from 'react-scroll'

const useStyles = makeStyles((theme => ({
    root : {
      display : 'flex',
      justifyContent: 'center',
        alignItems : 'center',
        height : '100vh'
    },
    appbar: {
        background : 'none',
        fontFamily: 'Anton, sans-serif',
    },
    icon : {
      color : 'red',
      fontSize : '4em'
    },
    appbarTitle : {
        flexGrow : '3'
    },
    appbarWrapper : {
        width :  '80%',
        margin : "0 auto"
    },
    divMainTitle : {
      textAlign : 'center',
    },
    mainTitle : {
        fontSize : "4em"
    },
    goDown : {
        color : 'pink',
        fontSize : '4em'
    }
})));

export default function Header(){
    const classes = useStyles();
    const [checked,setChecked]=useState(false)
    useEffect(()=>{
        setChecked(true)
    },[])
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>LundiDeMerde</h1>

                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
                <div className={classes.divMainTitle}>
                    <h1 className={classes.mainTitle}>
                        Bienvenue au <br/> Lundi de Merde
                    </h1>
                    <Scroll to="id_main_page" smooth={true}>
                        <IconButton>
                            <FavoriteBorderSharpIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>)
}

/*                    <IconButton>
                        <MenuOpenSharpIcon className={classes.icon}/>
                    </IconButton>*/