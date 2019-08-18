import React, { Component } from 'react'
import HeaderSection from './headerSection'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  top: 0px;
  position: fixed;
  display: flex;
  flex-direction: row;
  text-transform: lowercase;
  justify-content: flex-start;
  width: 100vw;
  height: 60px;
  background-image: linear-gradient(white , rgba(0,0,0,0));
`

class HeaderMenu extends Component {
  render () {
    return (
      <MenuWrapper>
        <HeaderSection text='Home' header="#home"/>
        <HeaderSection text='Projects' header="#projects"/>
        <HeaderSection text='Art' header="#gallery"/>
        <HeaderSection text='Design' header="#design"/>
      </MenuWrapper>
    )
  }
}

export default HeaderMenu