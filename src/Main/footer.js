import React from 'react'
import styled from  'styled-components'
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

function Footer () {
    
const Footer = styled.div`
height:50px;
width:80%;
display:flex;
justify-content:flex-end;
align-items:flex-start;

`;

const UlList = styled.ul`
list-style:none;
display:flex;
`;

const Lilist = styled.li`
text-decoration:none;
padding-left:10px;
padding-right:10px;

`;

    return(
        <Grid container justify='center' style={{backgroundColor:'#7CEB17'}}>
        <Footer> 
            
            <UlList style={{listStyle:'none',display:'flex'}}>
        
                <Lilist>
                    <a>
                        <GitHubIcon/>
                    </a>
                </Lilist>
                <Lilist>
                    <a>
                        <LinkedInIcon/>
                    </a>
                </Lilist>
            </UlList>
            
        </Footer>
        <div style={{paddingBottom:'10px'}}> © Nenhum Direito Reservado é de todo mundo</div>
        </Grid>
    );

}

export default Footer;