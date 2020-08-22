import React from 'react'
import { AppBar, Toolbar, Grid,  makeStyles } from '@material-ui/core'
import {Link ,withRouter } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',

    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#333996" };
    } else {
        return { color: "#6e6e6e" };
    }
};

function Header({history}) {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item>
                        <Link
                            className="nav-link"
                            style={isActive(history, "/")}
                            to="/"
                        > STUDENT REGISTRATION
                         </Link>

                    </Grid>
                    <Grid item>
                         <Link
                             className="nav-link"
                             style={isActive(history, "/view-students")}
                              to="/view-students"
                         > VIEW STUDENTS
                        </Link>

                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>  
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Header);