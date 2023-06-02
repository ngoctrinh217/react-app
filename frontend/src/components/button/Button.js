import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive/Responsive'

export const TopButton = styled.button`
      /*Space*/
      padding:10px;
      /*Font-Style*/
      font-weight: 600;
      /*Display*/
      cursor: pointer;
      /*Button-Style*/
      cursor: pointer;
      border-radius:30px;
      border: ${(props) => props.type === "filled" && "none"};
      background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
      color: ${(props) => props.type === "filled" && "white"}; 
      ${mobile({flexDirection:"column"})}
`
export const Button = styled.button`
      width: 100%;
      padding: 10px;
      background-color: black;
      color: white;
      font-weight: 600;
      border-radius: 30px;
      margin: 20px;
`
