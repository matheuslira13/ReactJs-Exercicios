import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        position: 'absolute',
        backgroundColor: '#7CEB17',
        zIndex:90,
        transition:'opacity 1s ease-out',
    },
    link:{
        listStyle:'none',
        textDecoration:'none',
        color:'#161A33'
    }
}));



export default function Menu(props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        
    };

    const [clicou, setClicou] = useState(false);

    useEffect( ()=>{
        setClicou(true);
        props.acionaFechar(clicou);
        setTimeout( ()=>{
            setClicou(false)
        },1000)
    },[clicou])

    
    return (
       
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders" onClick={clicou} >
                    <Link to='/Props' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Props" />
                        </ListItem>
                    </Link>

                    <Link to='/StyledComponent' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Styled Component" />
                        </ListItem>
                    </Link>

                    <Link to='/UseState' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary=" Use State" />
                        </ListItem>
                    </Link>

                    <Link to='/Calculadora' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary=" Calculadora de Gorjeta" />
                        </ListItem>
                    </Link>

                    <Link to='/UseEffect' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary=" Use Effect" />
                        </ListItem>
                    </Link>

                    <Link to='/Comunicacao' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Comunicão entre Componentes" />
                        </ListItem>
                    </Link>

                    <Link to='/Criando-uma-Lista' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 6}
                            onClick={(event) => handleListItemClick(event, 6)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary=" Fazendo uma Lista" />
                        </ListItem>
                    </Link>

                    <Link to='/LocalStorage' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 7}
                            onClick={(event) => handleListItemClick(event, 7)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary=" Local Storage" />
                        </ListItem>
                    </Link>

                    <Link to='/Criando-um-modal' className={classes.link}>
                        <ListItem
                            button
                            selected={selectedIndex === 8}
                            onClick={(event) => handleListItemClick(event, 8)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Modal" />
                        </ListItem>
                    </Link>





                </List>

            </div>
   
    );
}
