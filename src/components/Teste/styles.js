import styled from 'styled-components'

export const Container = styled.div`
  label {
    position: relative;
  }

  label > span {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #b3b8bd;
    z-index: 100;
    border-right: 1px solid #ced4da;
    padding-right: 10px;
  }

  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  input {
    width: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 12px !important;

    height: 32px;
    padding: 4px 45px;
  }

  /* .icon {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 32px;
    border: 1px solid #b3b8bd;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  } */
`
