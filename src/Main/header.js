import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './menu';
import { Link } from 'react-router-dom';




function Header() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
        }
    }));

    const [mostra, setMostra] = useState(false);

    const abritMenu = () => {
        setMostra(!mostra)
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={abritMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' className={classes.link}>
                        <Typography variant="h6" color="inherit">
                            React Js
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            {mostra &&
                <Menu />
            }
        </div>
    );
}

export default Header;
