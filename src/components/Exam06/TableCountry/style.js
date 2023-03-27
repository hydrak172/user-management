import { Button } from "antd";
import styled from "styled-components";
//voi nhung the html thi dung styled.div`` style.name``
//component thi styled(name)
export const Actions = styled.div`
    {
         display:flex;
    }
`;

export const ButtonAction = styled(Button)`
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

export const Country = styled.div`
    display:grid;
    grid-template-columns: 3rem 1fr;
    gap: 1rem;
    align-item:center;

    img{
        witdh:100%;
        border-radius:50%;
        height:auto;
    }

    h6{
        font-size:1rem;
        margin: 0 auto;
    }
`

export const Image = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    border-radius:50%;
    padding-top:100%;
`

export const Population = styled.div`
    color:${props => props.color};
    font-weight:700;
`