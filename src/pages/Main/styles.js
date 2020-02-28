import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .carousel {
    width: -webkit-fill-available;
  }

  .carousel-inner img {
    width: 100%;
    height: 370px;
  }
`

export const BoxContainer = styled.ul`
  margin: 0;
  padding: 20px;
  margin: 0 auto;
  flex-wrap: wrap;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
`

export const Box = styled.li`
  margin-right: 40px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
    width: 120px;
    height: 120px;
    border-radius: 30px;
    box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.16);
    padding: 15px;
    margin-bottom: 15px;
  }

  img {
    width: 100%;
    height: auto;
  }

  span {
    align-items: center;
    font-size: 13px !important;
    font-weight: 600;
    color: #222239;
  }

  :hover {
    backface-visibility: visible;
    -webkit-font-smoothing: subpixel-antialiased;
    transform: scale(1.05);
  }

  :hover span {
    color: #222239;
    font-weight: bolder;
    text-decoration: underline;
    text-decoration-color: #222239;
  }
`
