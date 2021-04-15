import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {useParams} from 'react-router-dom';

const Base = styled.div`
display:flex;
align-items:center;
background-color: #00BCFA;
padding:20px;
flex-direction:column;
color:#FFF;


`;

function NotFound() {
    let {cat1} = useParams();

    return (
       <Base style={{height:'800px'}}>
           
                    <Typography variant='h1' align='center' >
                        Pagina não encontrada
                    </Typography>
                 
                <Grid container spacing={2} >
                
                    <Grid container item justify='center' alignItems='center' md={6} >
                       
                            <Typography variant='body2'>   
                               Digite uma url valida
                            </Typography>
                       
                           
                    </Grid>
                   
                    <Grid container item justify='center' md={6}>
                        
                    </Grid>
                </Grid>
          
            <hr style={{border:'1px solid #FFF',width:'100%'}}/>
        </Base>
    );
}

export default NotFound;