import React from 'react'
import {useParams} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Espaco from '../ComponentesMaisUsados/espaco';


function ExemploDeProps (props) {
    return(
     
      <Grid container item alignItems='center'  direction='column'  >
        <Typography variant='h6'>Esse e um exemplo de props com Objeto que dentro tem uma url da img {props.objeto.nome} </Typography>
        <Espaco/>
        <img alt='Kitana' src={props.objeto.url} style={{width:'300px', borderRadius:'50%',height:'300px'}}/>
        <Espaco/>
      </Grid>

    );
    
  }
  
  function ExemploDeProps2 (props2){
    return(
     
        <Grid container justify='center'>
          <Typography variant='h6'>
            Esse é um outro exemplo de props mais simples ate <b>{props2.personagem}</b>
          </Typography>
        </Grid>
      
    );
  }
  
  
  function Aula5() {
    let objeto= {
      url:"https://i.redd.it/zn1gjvqsk0661.jpg",
      nome:'Kitana'
    }

    let {cat} = useParams();

    return (
      <div style={{backgroundColor:'#00BCFA', color:'#FFF', padding:'20px'}} >
        <Typography align='center' variant='h2'  >
           Aula 5 
        </Typography>
        <Typography align='center' variant='h6' >
        {cat} inicio 
        </Typography>
        <Espaco/>
        <Grid container alignItems='center'   >
          
          <Grid container md={6} item justify='center'>
              <ExemploDeProps objeto={objeto}/>
          </Grid>
         
          <Grid container md={6} item justify='center'>
            <Typography align='center' variant='h6'> Esse é uma prop que esta sendo passada pelo mesmo componente </Typography>
            <Espaco/>
            <Paper style={{padding:'30px'}}>
              <ExemploDeProps2 personagem={ 'Mileena'}/>
              <ExemploDeProps2 personagem={ 'Sindel'}/>
            </Paper>
          
          </Grid>
          
        </Grid>
        <Espaco/>
        <hr style={{borderStyle:'solid'}}/>
        <Espaco/>
      </div>
    );
  }

export default Aula5;