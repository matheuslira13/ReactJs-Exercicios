import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Espaco from '../ComponentesMaisUsados/espaco';

const Base = styled.div`
display:flex;
align-items:center;
background-color: #00BCFA;
padding:20px;
flex-direction:column;
color:#FFF;

`;

const Styled1 = styled.div`
    width: 100%;
    padding:0px 50px 50px 50px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    box-sizing: border-box;
`;

const Styled2 = styled.div`
    color:#FFF;
    justify-content:center;
    margin-Bottom:50px;
`;

const Styled3 = styled.button`
    width:300px;
    background-color:#00FF00;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Styled4 = styled.button`
    width:50%;
    height:100px;
    font-size:19px;
    padding: 10px 15px;
    background-color: ${props => props.back};
    color: ${props => props.color};
    margin:20px;
    border-radius:10px;
    border:none;
    

`;
const Styled5 = styled(Styled3)`
    border:none;
    border-radius:20px;
    padding:20px;
    box-sinzing:border-box;
`;
const Styled6 = styled(Styled4)`
    height:50px;
    background-color:#FDF61C;
    color:#222024;
`;

function Aula7() {
 

    return (
       <Base>
            <Styled1>
                <Styled2>
                    <Typography variant='h2' align='center' >
                        Aula 06 07 e 08
                    </Typography>
                    <Typography variant='h6' align='center'>
                        Uso do Styled component
                    </Typography>
                </Styled2>
                <Grid container spacing={2} >
                
                    <Grid container item justify='center' md={6} >
                        <Paper style={{padding:'30px', textAlign:'center'}}>
                            <Typography variant='body2'>   
                                Mesmo componente com background diferentes 
                            </Typography>
                            <Styled4 back='#DE9A42' color='#222024'>Botao 1</Styled4>
                            <Styled4 back='#7CFA28' color='#222024'>Botao 2</Styled4>
                            </Paper>
                    </Grid>
                   
                    <Grid container item justify='center' md={6}>
                        <Styled5>
                            <Typography variant='body2'>
                                olhe o codigo e perceba que foi aproveitado o mesmo codigo, dentro do codigo 
                                no componente Styled5 nao possi atributo Css nenhum porem ele copiou os mesmos 
                                atributos do que o Styled3 , e o Styled6 e a copia do botao Styled4 porem com o 
                                atributo do background-color, color e height modificado
                            </Typography>
                        </Styled5>
                            <Styled6>Botao 3</Styled6>
                            <Styled6>Botao 3</Styled6>
                    </Grid>
                </Grid>
                
            </Styled1>
            <hr style={{border:'1px solid #FFF',width:'100%'}}/>
        </Base>
    );
}

export default Aula7;