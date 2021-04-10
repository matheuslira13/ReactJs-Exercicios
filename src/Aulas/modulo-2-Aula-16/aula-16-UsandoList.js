import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Espaco  from '../ComponentesMaisUsados/espaco'

const Base = styled.div`
display:flex;
align-items:center;
background-color: #0B5AD9;
padding:20px;
flex-direction:column;
color:#FFF;

`;

// useStyles criado para o uso do MAterial UI
const useStyles = makeStyles({
    root: {
        minWidth: 160,
        margin:30,
    },
    media: {
        height: 140,
    },

});

function Aula16() {
  
    const classes = useStyles();
    let [list, setList] = useState([])

    useEffect(() => {
        setList(
            [
                { title: "Kitana", vantagens: 'alcance', treinou: true, img: 'https://i.redd.it/zn1gjvqsk0661.jpg' },
                { title: 'Sheeva', vantagens: 'Pulo', treinou: false, img: 'https://i.redd.it/hfxy05kvvo251.png' },
                { title: 'Millena', vantagens: 'Velocidade', treinou: true, img: 'https://noticias.maisesports.com.br/wp-content/uploads/2020/11/mileena-mortal-kombat-11.jpeg' }

            ]
        )
    }, [])

    return (
        <Base>
            <Typography variant='h2' align='center'> Aula 16 </Typography>
            <Typography variant='h6'> Criando uma Lista com UseEffect </Typography>
            <Espaco/>

        <Grid justify='center' container  >
       
            <Grid container md={10} justify='center' item >
              

                <Typography variant='body2'>
                    Com auxiolio do useEffect vamos preencher um array criado com o useState
                    para preencher uma lista e usa o card do Material UI para fica um pouco mais
                    interesante
                </Typography>

                
                    {list.map(function (item, index) {
                        return (
                            <Card key={index} className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={item.img}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <b> Vantagem :</b> {item.vantagens}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary" component="p">
                                        <b> Treinou ?</b> {item.treinou &&
                                             <> Sim</>
                                             }
                                            {!item.treinou &&
                                            <del>Não</del>
                                            }                                     
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                            </Card>
                        );
                    
                    }
                    )
                    }
      
            </Grid>
        </Grid>
        <Espaco/>
        <hr style={{border:'1px solid #FFF',width:'100%'}}/>
        </Base>
    );
}

export default Aula16;