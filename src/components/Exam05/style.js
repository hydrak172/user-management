import styled from "styled-components";
import { Button } from "antd"; 

export const ButtonCreate= styled(Button)`
    display:block;
    margin-bottom: 22px;
    background-color:white;
    color:rgba(240, 46, 170, 0.8);
    border-color:rgba(240, 46, 170, 0.8);
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

    &:hover{
        background-color:red;
        color:rgba(240, 46, 170, 0.8);
        border-color:rgba(240, 46, 170, 0.8);
    }

    &:active ,&:focus{
            background-color:red;
            color:rgba(240, 46, 170, 0.8);
            border-color:rgba(240, 46, 170, 0.8);
    }
    `