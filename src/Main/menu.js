import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        position: 'absolute',
        backgroundColor: '#FFF',
        zIndex:90,
        transition:'opacity 1s ease-out',
       
        
    },
}));

export default function Menu() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        
    };

    return (
       
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <Link to='/Props'>
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

                    <Link to='/StyledComponent'>
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

                    <Link to='/UseState'>
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

                    <Link to='/Calculadora'>
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

                    <Link to='/UseEffect'>
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

                    <Link to='/Comunicacao'>
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

                    <Link to='/Criando-uma-Lista'>
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

                    <Link to='/LocalStorage'>
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

                    <Link to='/Criando-um-modal'>
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
