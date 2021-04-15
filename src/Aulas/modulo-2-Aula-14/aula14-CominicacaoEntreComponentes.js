import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ComponenteTeste from './aula14-ComponenteCraidoParaTeste';
import styled from 'styled-components'
import Espaco from '../ComponentesMaisUsados/espaco';


const Base = styled.div`

align-items:center;
background-color: #00BCFA;
padding:20px;
color:#FFF;

`;


function UseEffect() {

    let [textoParaSerMudado, setTextoParaSerMudado] = useState('texto que vai ser mudado')

    function funcaoParaMuda(novoText) {
        setTextoParaSerMudado(novoText)
    }

    return (
        <Base>
        <Espaco/>
            <Typography variant='h2' align='center'> Aula 14 </Typography>
            <Typography variant='h6' align='center'> Comunicação entre componentes</Typography>
            <Espaco/>
            <Grid justify='center' container  >

                <Grid container  item md={6} alignItems='center' item style={{padding:'20px'}} >
                    <Typography variant='h6'> Muito importante entender como isso aconteçe</Typography>
                    <Typography variant='body2'> A Comunicação e realizado atraves de props que 
                    são funções e com o auxilio do useState e useEffect essa comnunicação e 
                    logicamente mais facil e possivel, vou tentar explica o que esta 
                    acontecendo. Esse Componente com background verde esta sendo importato (" ou seja e foi criado 
                    em outra pagina"), é um component de input e tudo o que for digitado nele vai ser reenviado 
                    para a pagina onde ele foi importado e ser e trazer de novo o que foi digitado e com isso 
                    mudar o que esta escrito nessa pagina
                    </Typography>
                </Grid>

                <Grid container item md={6} style={{padding:'20px'}}>
                    <Espaco/>
                    <ComponenteTeste mudancaAciona={funcaoParaMuda}/>
                    <Typography variant='body1'>
                    Esse texto vai ser mudado pelo componente de input criado ai em cima: 
                    <br/>
                    <b>{textoParaSerMudado}</b>
                    </Typography>
                </Grid>

            </Grid>
            <Espaco/>
        </Base>
    );
}

export default UseEffect;