import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Header from "./components/Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from "./components/MainPage";

const useStyle = makeStyles((theme) => {
    return ({
        root: {
            minHeight: '100vh',
            background : 'linear-gradient(140deg, #54defd, #000)',
            backgroundRepeat: 'no-repeat',
            backgroundSize : 'cover'
        },
    });
});


export default function App(){
    const classes = useStyle();
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <Header />
            <MainPage />
        </div>
    );
}
/*
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/background.jpg"})`,
        minHeight : 100vh,
        backgroundImage : `url(${process.env.PUBLIC_URL + "/assets/background.jpg"})`,
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
interesant : https://stackoverflow.com/questions/58968461/how-can-i-remove-padding-bottom-in-react-material-ui-card-muicardcontent-rootl

*/