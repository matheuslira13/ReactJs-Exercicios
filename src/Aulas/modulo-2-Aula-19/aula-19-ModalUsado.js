import React,{ useState } from "react";
import styled from 'styled-components';

const ModalBackground = styled.div `
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:90;
display:flex;
justify-content:center;
align-items:center;
background-color: rgba(0,0,0,0.7);
`;

const ModalArea = styled.div`
background-color:#CCC;
padding:30px;
border-radius:10px;
color:#000;
`;

function Modal(props) {


const pegouOfechar = () =>{
    props.fechar(false);
}

    return(
        <>
                  
        {props.visibilidade && 
            <ModalBackground onClick={pegouOfechar}>
                <ModalArea >
                    {props.children}
                </ModalArea>
            </ModalBackground>
        }
        </>
    );
}

export default Modal;
