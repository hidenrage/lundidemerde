import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles} from "@material-ui/core/styles";
import Header from "./components/Header";
import Billeterie from "./components/Billeterie";

const useStyle = makeStyles((theme) => {
    return ({
        root: {
            minHeight: '100vh',
            background : 'linear-gradient(190deg, pink, #156987)',
            backgroundRepeat: 'no-repeat',
            backgroundSize : 'cover'
        },
    });
});


class App extends React.Component {
    const classes = useStyle();
    render() {

        return(
            <div>
                hello
            </div>
        );

    };
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles} from "@material-ui/core/styles";
import Header from "./components/Header";
import Billeterie from "./components/Billeterie";

const useStyle = makeStyles((theme) => {
    return ({
        root: {
            minHeight: '100vh',
            background : 'linear-gradient(190deg, pink, #156987)',
            backgroundRepeat: 'no-repeat',
            backgroundSize : 'cover'
        },
    });
});

class App extends React.Component {
    render() {
        const classes = useStyle();
        return(
            <div className={classes.root}>
                hello
            </div>
        );

    };
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

*/