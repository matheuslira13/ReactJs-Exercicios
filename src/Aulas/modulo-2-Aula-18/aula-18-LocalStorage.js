import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Espaco from '../ComponentesMaisUsados/espaco';



const Base = styled.div`

align-items:center;
background-color: #00BCFA;
padding:20px;
color:#FFF;

`;


function Aula18() {

let [nome, setNome] = useState(localStorage.getItem('storageNome'));

let acionarMudanca = (e) =>{ 
    setNome(e.target.value)
}

let apertouEnter = (e)=>{
    if(e.keyCode === 13){
        localStorage.setItem('storageNome',nome)
    }
}

 
    return (
        <Base>
            <Typography variant='h2' align='center'> Aula 18 </Typography>
            <Typography variant='h6' align='center'> Usando Local Storage </Typography>
            <Espaco/>

            <Grid justify='center' container    >
                <Grid container md={10} item  style={{margin:'30px'}}>
                    <Paper style={{textAlign:'center',padding:'30px', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#0B5AD9',color:'#FFF'}}>
                        <Typography variant='body2' style={{marginBottom:'30px'}}> O que voce digitar no input aqui de 
                        baixo sera salvo no LocalStorage, ou seja pode redenrizar a pagina que 
                        o conteudo digitado nao vai ser resetado, obs fiz uma verificação para salvar no localStorage precisa aperta Enter
                        </Typography>

                        <TextField onKeyUp={apertouEnter} label='Digite aqui' value={nome} onChange={acionarMudanca} style={{width:'300px', display:'flex',marginBottom:'30px'}} />
                        <Typography variant='h5'>
                                {nome} 
                            </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Espaco/>
            <hr style={{border:'1px solid #FFF'}}/>
        </Base>
    );
}

export default Aula18;