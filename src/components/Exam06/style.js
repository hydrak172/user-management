import styled from "styled-components";
import { Button, Input } from "antd";

//designer thuong se cung cap 2 phien ban : laptop 1336,1440,mobile
//px pt , rem em
//8px=0.5rem
// 1rem=16px;
//  1.25rem=20px ,
//  1.5rem=24px,
//  32px=2rem,
//  40px=2.5rem
export const ButtonCreate = styled(Button)`
    display:block;
    margin-bottom: 1.25rem;
    background-color:white;
    color:rgba(240, 46, 170, 0.8);
    border-color:rgba(240, 46, 170, 0.8);
     &:hover{
        background-color:aqua;
        color:rgba(240, 46, 170, 0.8);
        border-color:rgba(240, 46, 170, 0.8);
    }

    &:active ,&:focus{
            background-color:yellow;
            color:rgba(240, 46, 170, 0.8);
            border-color:rgba(240, 46, 170, 0.8);
    }
    `
export const InputSeach = styled.div`
    {
        display:flex;
    }
`;
export const Search = styled(Input.Search)`
    width:30%;
`
export const Borderdiv = styled.div`
    {
        border: 7px solid aqua;
        border-radius:10px;
    }
`;