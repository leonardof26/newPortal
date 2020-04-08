import styled from 'styled-components'

import ReactPaginate from 'react-paginate'

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  float: right;
  margin-top: 20px;
  margin-bottom: 15px;
`
export const Button = styled.button`
  border: 1px solid #222239;
  height: 30px;
  width: 30px;
  border: 1px solid;
  border-color: ${props => (props.current ? '#222239' : '#bdbdbd')};
  margin-bottom: 10px;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.07);
  background-color: ${props => (props.current ? '#222239' : '#fff')};
  color: ${props => (props.current ? '#fff' : '#222239')};
  border-right: none;

  &:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: #fff;
    color: #222239;
    font-size: 10px !important;
    font-weight: bold;
  }

  &:last-child {
    border-right: 1px solid #bdbdbd;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #fff;
    color: #222239;
    font-size: 10px !important;
    font-weight: bold;
  }

  &:hover {
    background-color: ${props => (props.current ? '#222239' : '#eee')};
    color: ${props => (props.current ? '#fff' : '#214e75')};
    border-color: ${props => (props.current ? '#222239' : '#bdbdbd')};

    z-index: 2;
    /* color: #214e75; */
    /* background-color: #eee; */
  }
`
