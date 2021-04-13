import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


function ComponenteDeInput(props) {

    let [text, setText] = useState('');

    let trocaTexto = function (e) {
        setText(e.target.value)
    }

    let apertoEnter= function (e) {
        if( e.keyCode === 13){
            if(props.onEnter){
            props.onEnter(text);
        }
            setText(' ');
         }
         
    }

   

    return (
        <Grid >
            
            <Grid container alignItems='center' direction='column' style={{ padding: '50px' }}  >

                <TextField type='text' value={text} label='Digite aqui' onChange={trocaTexto} onKeyUp={apertoEnter} />
            </Grid>



        </Grid>
    );
}

export default ComponenteDeInput;