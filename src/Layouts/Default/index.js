import { Button } from "antd";
import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { Header, Footer, Main, ButtonNew, Sizebar, Content } from "./style";

const DefaultLayout = ({ children }) => {

    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem('token')
        navigate("/")
    }
    return (
        <div>
            <Header>
                <i>Green Academy</i>
                <ButtonNew onClick={onLogout}>Logout</ButtonNew>
            </Header>
            <Main>
                <Sizebar>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/students'>students</Link>
                </Sizebar>
                <Content>
                    {children}
                </Content>
            </Main>

            <Footer><i>PowerBy HydraK</i></Footer>
        </div>
    )
};

export default DefaultLayout;