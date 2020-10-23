import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: "20%",
        background : "rgba(0,0,0,0.2)",
        margin :"0 1rem 0 1rem ",
    },
    media: {
        minHeight : "200px",
    },
    title : {
        fontFamily : "sans-serif",
        fontWeight : "bold",
        fontSize : "1rem",
        color : 'white',
        display :"flex",
        justifyContent : "center",
        flexWrap : "wrap",
    }
});

export default function ImageCard({artiste}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={artiste.imgURL}
                    title="img"
                />
                <CardContent>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        {artiste.nom}
                    </Typography>
                </CardContent>
        </Card>
    );
}