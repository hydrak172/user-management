import styled from 'styled-components'
import { Button } from 'antd'

export const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:grey;
    padding-top:1rem;
    padding-bottom:1rem;
    a{
        font-size:2rem;
    }
`
export const ButtonNew = styled(Button)`
    border-color:rgba(240, 46, 170, 0.8);
    color:rgba(240, 46, 170, 0.8);
    &:hover{
        background-color:aqua;
        color:rgba(240, 46, 170, 0.8);
        border-color:rgba(240, 46, 170, 0.8);
    }
    
`

export const Main = styled.main`
    display:grid;
    grid-template-columns:20rem 1fr;
    min-height:calc(100vh - 9.25rem );
`
export const Sizebar = styled.div`
    
`;
export const Content = styled.div`
    padding:1rem;
`
export const Footer = styled.footer`
    background-color:grey;
    text-align:center;
    padding:1rem;
`