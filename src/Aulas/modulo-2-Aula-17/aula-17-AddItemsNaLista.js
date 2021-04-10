
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ComponenteDeInput from './aula-17-ComponenteCriadoInput';
import styled from 'styled-components'
import Espaco from '../ComponentesMaisUsados/espaco';



const Base = styled.div`

align-items:center;
background-color: #7CEB17;
padding:20px;
color:#FFF;

`;


const useStyles = makeStyles({
    root: {
        minWidth: 160,
        margin:30,
        backgroundColor:'#00BCFA',
        color:'#FFF'
    },
    media: {
        height: 140,
    },

});

function Aula17() {

    const classes= useStyles();

    const [item, setItem] = useState([]);



    let teclou= function (evento) {

    let novoItem = [...item];

    novoItem.push( {title:evento , done:false});

    setItem(novoItem)
      
    console.log(novoItem)
    }

    let marcaDesmarcar = function (index) {
        let novoItem = [...item];
        novoItem[index].done= ! novoItem[index].done;
        setItem( novoItem)
    }
    return(
        <Base>
            <Typography variant='h2' align='center'> Aula 17</Typography>
            <Typography variant='h6' align='center'> Lista de Tarefa</Typography>
            <Espaco/>
            <Grid justify='center' container >
                <Grid container  md={6} justify='center' item  >
                    <Typography variant='h5' > 
                        Criando um campo de Input e adicionando dentro do card
                    </Typography>
                
                    <Typography variant='body2'>
                        Com auxiolio do useEffect vamos preencher um array criado com o useState
                        para preencher uma lista e usa o card do Material UI para fica um pouco mais
                        interesante
                    </Typography>
                    <Typography variant='h6' >
               Esse e uma lista de tarefaz, add o que precisa ser feito no input e depois vc 
               pode sumblinhar clicando no item
            </Typography>
                </Grid>

                <Grid container md={6} item justify='center'>
                    <ComponenteDeInput onEnter={teclou} />

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent style={{display:'flex',flexDirection:'column'}}>
                                <Typography variant='h4'> Lista de Tarefas</Typography>
                                <Typography gutterBottom variant="body2" component="h2">
                                    <ul>
                                    {item.map( (listItem,index)=>{
                                        return(
                                            <li key={item.index} onClick={()=>{(marcaDesmarcar(index))}}>
                                                {listItem.done &&
                                                <del>{listItem.title}</del>
                                                }
                                                {!listItem.done &&
                                                    listItem.title
                                                }
                                            </li>
                                            
                                        );
                                        } 
                                        )
                                        }

                            
                                    </ul>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        
                    </Card>
                </Grid>           
               
            </Grid>
            <Espaco/>
            <hr style={{border:'1px solid #FFF'}}/>
        </Base>
    );
}

export default Aula17;