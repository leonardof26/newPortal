import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

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
    /* border-right: 0; */
    padding: 4px;
    /* border-top-right-radius: 0;
    border-bottom-right-radius: 0; */
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
