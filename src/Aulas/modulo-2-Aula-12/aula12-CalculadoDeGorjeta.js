import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Espaco from '../ComponentesMaisUsados/espaco';


function Aula12() {

    let [primeiro, setPrimeiro] = useState();

    let mexerNoInput = function (e) {
        setPrimeiro(e.target.value)
    }

    let [segundo, setSegundo] = useState();

    let mexerNoInput2 = function (e) {
        setSegundo(e.target.value)
    }

    let calculo = (segundo / 100) * primeiro;

    let resultado = primeiro - calculo;

    return (
        <Grid container direction='column' alignItems='center' style={{backgroundColor:'#7CEB17',padding:'20px'}}>
            
            <Typography variant='h2' align='center' style={{color:'#FFF'}}> Aula 12 </Typography>
            <Espaco/>
            <Grid item md={6} container alignItems='center' direction='column'   >
                <Paper style={{ padding: '30px' }}>
                    <Typography variant='h6'> Calculadora de Gorjeta</Typography>
                        <Espaco/>
                        <Typography variant='body2'> Valor do pedido</Typography>
                        
                        <Input type='number' value={primeiro} placeholder="..." onChange={mexerNoInput} />
                        <Espaco/>
                 
                        <Typography variant='body2'> Valor de desconto </Typography>
                        <Input type='number' value={segundo} placeholder="..." onChange={mexerNoInput2} />
                 

                    {calculo > 0 &&
                        <Grid>
                            <Espaco/>
                            <Typography variant='body1'> Total :  {`R$:${resultado}`} </Typography>
                        </Grid>
                    }
                </Paper>
            </Grid>
            <Espaco/>
            <hr style={{border:'1px solid #FFF',width:'100%'}}/>
        </Grid>
    );
}

export default Aula12;