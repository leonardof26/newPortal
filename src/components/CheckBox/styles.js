import styled from 'styled-components'

export const Container = styled.label`
  display: inline-flex;
  align-items: center;
  align-content: center;
  padding-bottom: 0;
  margin-bottom: 0;
  border: 1px solid #222239;
  border-radius: 2px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkbox {
      background-color: #fff;
    }

    &:checked ~ .checkbox:after {
      display: block;
    }
  }

  .checkbox {
    position: relative;
    top: 0;
    left: 0;
    height: 13px;
    width: 13px;
    background-color: #fff;

    &:hover {
      background-color: #f1f1f1;
    }

    &:after {
      content: '';
      position: absolute;
      display: none;

      left: 5px;
      top: 0px;
      width: 4px;
      height: 11px;
      border: solid #222239;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
