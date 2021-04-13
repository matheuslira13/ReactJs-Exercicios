import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Espaco from '../ComponentesMaisUsados/espaco'

const Happened = styled.div`
display: none;
background-color:#00BCFA;
width:100%;
max-width:200px;
height: 200px;
border-radius:50%;
color:#FFF;
padding:50px;
align-items:center;
text-align:center;
margin:30px;
display:flex;
justify-content:center

`;

const Base = styled.div`

align-items:center;
background-color: #00BCFA;
padding:20px;
color:#FFF;

`;



function UseEffect() {

    let [exemplo1, setExemplo1] = useState('Esse é um exemplo de UseEffect')

    let mudar = function () {
        setExemplo1('mudei o texto')
    }

    useEffect(() => {
        if (exemplo1 !== "Esse é um exemplo de UseEffect") {
            document.querySelector(Happened).style.display = 'flex';
        }
    }, [exemplo1])

    return (
        <Base  >
            <Typography variant='h2' align='center' >  Aula 13</Typography>
            <Typography variant='h6' align='center' > Utilizando o UseEffect </Typography>
            <Espaco/>
            
        <Grid justify='center' container >
            <Grid container md={6} justify='center' item >
                <Paper style={{textAlign:'center',padding:'30px',display:'flex',flexDirection:'column', alignItems:'center'}}>
                
                    <Typography variant='h5' align='center'  style={{margin:'20px'}}>
                        {exemplo1}
                    </Typography>
                    <Button color='primary' variant='outlined' onClick={mudar} > 
                        Clique para mudar o texto
                    </Button>
                    <Happened className={Happened}>
                        <Typography variant='body2'>
                            Esse conteudo só apareceu porquê o useEffect está monitorando a variavel que o botao
                            manipula entao com qualquer mudança nela e acionado esse função, OBS o useEffect
                            sempre chama a função antes de tudo ate mesmo caso voce nao coloque uma  variavel 
                            para ser monitorada, por isso coloquei uma condicional para nao chamar a função no começo 
                        </Typography>
                    </Happened>
                </Paper>
            </Grid>
        </Grid>
        <Espaco/>
        <hr style={{ border:'1px solid #FFF' }}/>
        </Base>
    );
}

export default UseEffect;