import React from 'react';

import SideMenu from "../components/SideMenu";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Routes from "../Routes";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import StudentReducer from '../store/reducer/studentReducer';
import Hidden from '@material-ui/core/Hidden';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }

})


const useStyles = makeStyles({
  appMain: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '250px',
    },
   // paddingLeft: '250px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  const rootReducer = combineReducers({
    student: StudentReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  

    

  return (
    <ThemeProvider theme={theme}>
      
      <Hidden smDown>
      <SideMenu  /></Hidden>
      <div className={classes.appMain}>
       
     <Provider store={store}>
        <Routes />
        </Provider>
       
        
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
