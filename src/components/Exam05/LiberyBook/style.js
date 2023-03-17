import { Button } from "antd";
import styled from "styled-components"; 
//voi nhung the html thi dung styled.div`` style.name``
//component thi styled(name)
export const Actions=styled.div`
    button{
        margin-right:10px;
    }
`;

export const ButtonAction =styled(Button)`
    display:block;
    margin-bottom: 22px;
    background-color:white;
    color:rgba(240, 46, 170, 0.8);
    border-color:rgba(240, 46, 170, 0.8);
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

    &:hover{
        background-color:aqua;
        color:rgba(240, 46, 170, 0.8);
        border-color:rgba(240, 46, 170, 0.8);
    }

    &:active ,&:focus{
            background-color:green;
            color:rgba(240, 46, 170, 0.8);
            border-color:rgba(240, 46, 170, 0.8);
    }
`