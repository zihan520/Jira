import React, {Component} from 'react';
import {ProjectList} from 'screens/project-list';
import {useAuth} from 'context/auth-context';
import styled from '@emotion/styled'
// import { Button, Dropdown, Menu } from "antd";
export const AuthenticatedApp = ()=>{
  const { logout } = useAuth();
  return(<Container>
      <button onClick={logout}>登出</button>
      <ProjectList />
  </Container>)
}
const Container = styled.div`
display:grid
`
