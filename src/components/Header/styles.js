import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  padding: 0 30px;
  background: #222239;
  height: 60px;
  display: flex;
  align-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    align-content: center;

    img {
      max-height: 25px;

      @media only screen and (max-width: 810px) {
        margin-right: 20px;
        padding-right: 20px;
        border-right: 2px solid #eee;
      }
    }

    h1 {
      color: #fff;
      font-size: 25px;
      font-weight: 400;
      padding-right: 20px;
      border-right: 2px solid #eee;
      margin: 0 10px 0 20px;

      @media only screen and (max-width: 810px) {
        display: none;
      }
    }
  }

  .loginButton {
    height: 36px;
    padding: 8px 30px;
    border-radius: 4px;
    color: #222239;
    background: #fff;

    &:hover {
      background: ${darken(0.001, '#bbb')};
      text-decoration: none;
    }
  }
`

export const MenuItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`

export const Profile = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;

    strong {
      font-weight: normal;
      color: #fff;

      @media only screen and (max-width: 900px) {
        display: none;
      }
    }
  }
`

export const UserButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border: 1px solid #bbb;
  border-radius: 50%;
  background: #fff;
  padding: 6px;
  color: #222239;
  position: relative;

  &:hover {
    background: ${darken(0.05, '#fff')};
  }
`

export const DropDownExit = styled.div`
  display: none;
  position: absolute;
  width: 140px;
  height: 40px;
  left: calc(100% - 130px);
  top: calc(100% + 10px);
  background: #eee;
  z-index: 20000;

  ${UserButton}:hover & {
    display: flex;
  }

  button {
    background: none;
    border: none;
    text-align: left;
    color: #222239;
    margin-left: 10px;
    font-size: 12px;
    padding: 5px;

    &:hover {
      text-decoration: underline;
    }

    &::before {
      content: '';
      position: absolute;
      left: 70%;
      top: -7px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #eee;
    }
  }
`
