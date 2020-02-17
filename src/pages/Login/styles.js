import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  height: 100%;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222239;
  font-family: 'Nunito', sans-serif;
`

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export const Menu = styled.div`
  background: #fff;
  width: 100%;
  max-width: 400px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #bbb;

  img {
    margin-top: 50px;
    height: 60px;
  }

  p {
    font-weight: 300;
    font-size: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 70px;
    margin-top: 30px;

    strong {
      text-align: left;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      display: block;
      border-top: 5px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      height: 30px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: #ced4da;
      }
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    div {
      svg {
        animation: ${rotate} 2s linear infinite;
      }

      div {
        margin-top: 10px;
        display: flex;
        align-items: center;

        button {
          margin: 0 0 0 5px;
          width: 51%;

          &[disabled] {
            cursor: not-allowed;
            opacity: 0.9;
          }
        }

        a {
          border: 1px solid #bbb;
          border-radius: 4px;
          color: #222239;
          padding: 5px 11px;
          height: 32px;
          width: 51%;
          transition: background 0.2s;

          &:hover {
            background: ${darken(0.08, '#fff')};
            text-decoration: none;
          }

          &[disabled] {
            cursor: not-allowed;
            opacity: 0.9;
          }
        }
      }
    }
  }
`

export const CompanyInfo = styled.div``
