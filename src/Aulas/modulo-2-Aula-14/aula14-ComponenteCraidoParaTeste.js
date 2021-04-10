import React, { useState,useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';


function ComponenteTeste(props) {

    let [text, setText] = useState('');

    let trocaTexto = function (e) {
        setText(e.target.value)
    }

    useEffect ( ()=>{
        props.mudancaAciona(text);
    },[
        text
    ]);

    return (
        <Grid style={{ backgroundColor: '#7CEB17', borderRadius:'20px',padding:'10px'}}>
            <Typography variant='subtitle2' style={{ textAlign: 'center', color: '#FFF', paddingTop: '20px' }}>
               Esse componente esta criado em um arquivo diferente do que esta escrito ai em baixo
            </Typography>
            <Grid container alignItems='center' direction='column' style={{ padding: '50px' }}  >

                <Input type='text' value={text} placeholder="..." onChange={trocaTexto} />
            </Grid>



        </Grid>
    );
}

export default ComponenteTeste;