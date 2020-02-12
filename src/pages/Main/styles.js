import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  .Carousel {
    width: 75%;
  }

  .carousel-item img {
    height: 450px;
    width: 100%;
  }

  ol.carousel-indicators li {
    height: 8px;
    width: 8px;
    background-color: white;
    border-radius: 50%;
  }
`

export const LateralMenu = styled.div`
  display: table;

  ul {
    display: table-row;
    cursor: pointer;
  }

  a {
    display: table-cell;
    color: white;
    background: #222239;
    border: 1px solid white;
    border-top: 0px;
    text-align: center;
    vertical-align: middle;
    height: 150px;
    width: 175px;
    font-size: 11px;
    font-weight: 300;

    &:nth-child(1),
    &:nth-child(2) {
      border-top: 1px solid white;
    }

    &:hover {
      backface-visibility: hidden;
      transform: translateZ(0);
      -webkit-font-smoothing: subpixel-antialiased;
      transform: scale(1.011, 1.011);
      color: #ffffff;
      font-size: 14px;
    }
  }
`
