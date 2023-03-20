import { Button } from "antd";
import styled from "styled-components";
//voi nhung the html thi dung styled.div`` style.name``
//component thi styled(name)
export const Actions = styled.div`
    button{
        margin-right:10px;
        display:flex;
    }
`;

export const ButtonAction = styled(Button)`
    display:block;
    margin-bottom: 22px;
    background-color:aqua;
    color:rgba(240, 46, 170, 0.8);
    border-color:rgba(240, 46, 170, 0.8);

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