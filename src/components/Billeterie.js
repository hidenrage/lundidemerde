import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme => ({
    root : {
        height : '100vh',
    },
    container : {
        minWidth : "80%",
        minHeight : '80vh',
        backgroundColor : '#3dce8a',
        display : "flex",
        justifyContent :"center",
        alignItems : 'center',
        flexWrap :"wrap",
        borderRadius : "2em"
    },
    event : {
        width : '90%',
        height : 'auto',
        backgroundColor : 'red'
    }
})));

export default function Billeterie(){
    const classes = useStyles();
    var exampleCallback = function() {
        console.log('Order complete!')
    };
    React.useEffect(() =>{

        window.EBWidgets.createWidget({
            // Required
            widgetType: 'checkout',
            eventId: '126011179831',
            iframeContainerId: 'eventbrite-widget-container-126011179831',

            iframeContainerHeight: 425,
            onOrderComplete: exampleCallback
        });
    },[]);

    return <div className={classes.container} id="id_billeterie">

        <div id="eventbrite-widget-container-126011179831" className={classes.event} />
    </div>;
}