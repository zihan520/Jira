import React, {Component} from 'react';
import {ProjectList} from 'screens/project-list';
import {useAuth} from 'context/auth-context';
import styled from '@emotion/styled'
import { constants } from 'os';
// import { Button, Dropdown, Menu } from "antd";
export const AuthenticatedApp = ()=>{
  const { logout } = useAuth();
  return(<Container>
      <Header>
        <HeaderLeft>
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
        <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Nav>nav</Nav>
      <Main>
      <ProjectList />
      </Main>
      <Aside>aside</Aside>
      <Footer>footer</Footer>
  </Container>)
}
const Container = styled.div`
  display:grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns:20rem 1fr 20rem;
  grid-template-areas: "header header header"
  "nav main aside"
  "footer footer footer";
  height:100vh;
`
const Header = styled.header`
  grid-area:header;
  display:flex;
  flex-dirextion:row;
  align-items:center;
  justify-content:space-between
`
const HeaderLeft = styled.div`
display:flex;
align-items:center;
`
const HeaderRight = styled.div`

`

const Aside = styled.aside``
const Nav = styled.nav``
const Main = styled.main``
const Footer = styled.footer``
