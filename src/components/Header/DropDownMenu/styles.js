import styled from 'styled-components'

export const Container = styled.div`
  font-weight: 600;

  @media (min-width: 1200px) {
    padding: 14px 18px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    padding: 5px 5px;
  }

  @media (min-width: 1px) and (max-width: 1000px) {
    padding: 5px 1px;
  }
`

export const Menu = styled.div`
  .teste {
    padding: 3px 10px;
    background: ${props => (props.currentPage ? '#fff' : '#222239')};
    border-radius: ${props => (props.currentPage ? '4px' : 0)};
  }

  span {
    font-size: 12px;
    color: ${props => (props.currentPage ? '#222239' : '#fff')};
  }

  i {
    width: 0;
    height: 0;
    margin-left: 4px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    display: inline-flex;
    border-top: 5px solid;
    border-top-color: ${props => (props.currentPage ? '#222239' : '#fff')};
  }
`

export const DropDownContent = styled.div`
  display: none;
  background-color: rgba(238, 238, 238, 0.95);
  margin-right: 5px;
  margin-bottom: 0%;
  z-index: 1;
  position: fixed;
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  ${Container}:hover & {
    display: inline-flex;

    @media (min-width: 1px) and (max-width: 960px) {
      display: flex;
      flex-direction: column;
    }
  }
`

export const DropDownColumn = styled.div`
  float: left;
  padding: 0 10px;
  height: 100%;

  @media (min-width: 1200px) {
    width: 200px;
  }

  @media (min-width: 960px) and (max-width: 1200px) {
    width: 150px;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(5%);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eeeeee;
  }

  h3 {
    display: block;
    margin-top: 10px;
    margin-left: 50px;
    margin-right: 50px;
    text-align: right;
    font-size: 12px;
    border-bottom: 1px solid #222239;
    margin-bottom: 15px;
    font-weight: 500;
  }

  a {
    float: none;
    color: #222239;
    padding: 10px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 12px;
    font-weight: 300;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      text-decoration: underline;
      color: #222239;
    }
  }
`
