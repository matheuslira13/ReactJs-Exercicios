import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Espaco from '../ComponentesMaisUsados/espaco'
import Modal from './aula-19-ModalUsado';

const Base = styled.div`
display:flex;
align-items:center;
background-color: #00BCFA;
padding:20px;
flex-direction:column;
color:#FFF;

`;


function Aula16() {

    const [moadlVisibilidade, setModalVisibilidade] = useState(false);

    const abriModal = () =>{
        setModalVisibilidade(true)
    }

    return (
        <Base>
            <Typography variant='h2' align='center'> Aula 19 </Typography>
            <Espaco/>
            <Typography variant='h6'> Criando um Modal </Typography>
          

            <Grid justify='center' container  >

                <Grid container item md={10} justify='center'  >

                    <Button variant='contained' color='secondary' onClick={abriModal} style={{marginTop:'300px'}}>
                         Abri Modal</Button>
          
                    <Modal visibilidade={moadlVisibilidade} fechar={setModalVisibilidade}>
                        <Typography variant='h1'>
                            Esse é o modal
                        </Typography>
                    </Modal>
                    
                </Grid>
            </Grid>
            <Espaco />
            <hr style={{ border: '1px solid #FFF', width: '100%' }} />
            <Espaco/>
        </Base>
    );
}

export default Aula16;