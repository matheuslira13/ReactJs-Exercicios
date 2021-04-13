import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Espaco from '../ComponentesMaisUsados/espaco'
import TextField from '@material-ui/core/TextField';

const Base = styled.div`
display:flex;
align-items:center;
background-color: #00BCFA;
padding:20px;
flex-direction:column;
color:#FFF;

`;

const Img = styled.div`
width:300px;
height:300px;
border-radius:50%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin:auto;
`;

function Aula9() {

    let [contador, setContador] = useState(0);

    let clicou = function () {
        setContador(contador + 1);
    }
    /*************************************************** */
    let [texto, setTexto] = useState('"Esse é o texto que vai ser mudado"');
   

    let escrever = function (e) {
        setTexto(e.target.value)
    }

 
    /********************************************** */

    let [estaLogado, setEstaLogado] = useState(false);

    let outOrIn = function () {
        setEstaLogado(!estaLogado);
    }

    let [digitado, setDigitado] = useState('');

    let mudaTexto = function (e) {
        setDigitado(e.target.value);
    }

    return (
        <Base>
            <Typography variant='h2' align='center' >
                    Aula 09 10 11
            </Typography>
            <Typography variant='h5' align='center' >
                    Utilizando o useState
            </Typography>
            <Espaco/>
            <Grid container  justify='center' >   

                <Grid item md={6} container justify='center' alignItems='center' direction='column'>
                    <Typography variant='h6' style={{ padding: '50px' }}>
                        Alterando o valor desse contato com o useState  
                    </Typography>

                    <Button onClick={clicou} variant="contained" color="primary">
                    Clique aqui para acresentar +1
                    </Button>

                    <Espaco/>

                    <Typography align='center' variant='h4'> 
                            {contador} 
                        </Typography>
                  
                </Grid>
                        
                <Grid item md={6} container alignItems='center' direction='column'>
                    <Paper  elevation={3} style={{ padding: '50px', marginBottom: '50px' }}>
                        <Typography variant='subtitle2' >
                            Observer que com o uso do State mudamos o valor em tempo real do texto
                        </Typography>
                        <Espaco/>
                        <Grid container direction='column' alignItems='center' >
                        <TextField label='Digite aqui' onChange={escrever} style={{width:'100%', display:'flex',marginBottom:'30px'}} />
                            <Typography variant='body1'>  
                                Texto digitado:  <b>{texto}</b>
                            </Typography>
                        
                        </Grid>
                    </Paper>
                </Grid>
            
            </Grid>
        
            <Espaco/>
            <Typography align='center' variant='h4' >
                Usando condicionais de exibição
            </Typography>
            <Espaco/>
        
            <Grid item md={6} container alignItems='center' direction='column' justify='center' >
                <Paper elevation={3} style={{ padding: '20px', display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'center' }}>
                   
                    {estaLogado ?
                        <div>
                            <Typography variant='h6'>
                                Voce esta logado 
                                <Button onClick={outOrIn} style={{color:'#23E319'}}>
                                    Clique aqui para sair
                                </Button> 
                            </Typography>
                            <div >
                                <Img style={{ backgroundImage: "url('https://i0.wp.com/uploads.spiritfanfiction.com/usuarios/jornal/uma-ano-depois-estou-de-volta-minha-gente-982850,290720132101.jpg')" }}
                                /> 
                                <Espaco/>
                            </div>
                        </div>
                        :
                        <div>
                            <Typography variant='h6'>
                                Voce nao esta logado 
                                <Button color='secondary' onClick={outOrIn}> 
                                    Clique aqui entrar
                                </Button> 
                            </Typography>
                        </div>
                    }

                    {estaLogado ?
                        <Typography variant='subtitle2'> Esse conteudo só esta disponivel quando voce esta logado</Typography>
                        :
                        <Typography variant='subtitle2'> É esse conteudo somente quando esta deslogado </Typography>
                    }
                    <Espaco/>

                    <Typography variant='body2'> Digite no campo abaixo e oberseve com o uso do length e
                    com variaveis de condição o que pode ser feito </Typography>

                    <TextField type="text" value={digitado} onChange={mudaTexto} label='Digite aqui' />

                    {digitado.length > 0 &&
                        <div>
                            <Espaco/>
                            <Typography variant='h6'> 
                                {digitado.length} caractere{digitado.length === 1 ? '' : 's'}
                            </Typography>


                            <Typography variant='subtitle1'>
                                Observer no codigo nao na pagina HTML, que foi necessario incrobi toda a condição
                                e esse texto com uma divi por que assim como um componente é necessario retorna um
                                unico "container"
                            </Typography>
                        </div>
                    }
                </Paper>
            </Grid>
        
            <Espaco/>
            <hr style={{width:'100%', borderStyle:'solid'}}/>
        </Base>
    );
}

export default Aula9;