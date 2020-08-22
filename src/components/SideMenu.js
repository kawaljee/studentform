import React from 'react'
import {  withStyles, Avatar, Grid } from "@material-ui/core";
import logo from '../assets/university.png'

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '250px',
        height: '100%',
        backgroundColor: '#253053',
        textAlign: 'center',  

    },

    large: {
        height: '150px',
        width: '150px',
        margin: '20px 0 20px 40px',
        display:'flex'
    },

    labelColor: {
        color: '#fff',
        fontWeight: '800',
        fontSize:'22px',
        fontFamily: 'Concert One ',
        textAlign:'center'
       
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu} >
            <Grid containerFluid
                alignContent="center">
                <Grid item >
                    <Avatar alt="Remy Sharp" src={logo} className={classes.large} />
                    <label className={classes.labelColor}>ADDWEB SCHOOL</label>
                </Grid>
            </Grid>


        </div>
    )
}

export default withStyles(style)(SideMenu);
