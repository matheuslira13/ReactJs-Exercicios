import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Espaco from '../Aulas/ComponentesMaisUsados/espaco';
import { yellow } from '@material-ui/core/colors';



function Home() {


    return (
        <div style={{ backgroundColor: '#00BCFA', color: '#FFF', padding: '20px' }} >
            <Typography align='center' variant='h2'  >
                Bem Vindo
            </Typography>
            <Espaco />
            <Typography align='center' variant='h6' >
                Compilado do React
            </Typography>
            <Espaco />
            <Grid container alignItems='center'   >

            <Grid container sm={6} item direction='column' alignContent='center' justify='center' >
                    <Espaco/>
                    <Typography align='center' variant='subtitle1'>
                        Matheus Lira Barbosa
                    </Typography>
                    <Typography align='center'>
                        Desenvolvedor FrontEnd
                    </Typography>
                    <Espaco />
                    <img 
                    style={{width:'200px',borderRadius:'50%', display:'flex',border:'2px solid #FFF'}}
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQGrPvSUhWaseQ/profile-displayphoto-shrink_800_800/0/1565907581807?e=1623888000&v=beta&t=S9Ik2veY8ixt8wBmtUc4h7OUXBPUr17gEfqMEARNw78" />
                 <Espaco />
                </Grid>

                <Grid container sm={6} item justify='center'>
                    <Grid container sm={10}>
                        <Paper style={{padding:'30px'}}>
                            <Typography variant='body2'>
                                Meu Nome é Matheus e desenvolvi esse compilado conforme fui
                                aprendendo com o curso React Js do Professor Bonieky da B7web,
                                e se tornou um material bem util para consultas, 
                                não esqueça de instalar as depencias antes de rodar o projeto 
                                dando um yarn no terminal... espero ter ajudado
                        </Typography>
                        </Paper>
                        <Espaco/>
                    </Grid>
                </Grid>
            </Grid>
            <Espaco />
            <hr style={{ borderStyle: 'solid' }} />
        </div>
    );
}

export default Home;