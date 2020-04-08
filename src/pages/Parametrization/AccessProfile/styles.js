import styled from 'styled-components'

import ReactSelect from '../../../components/Unform/ReactSelect'

export const Container = styled.div`
  margin: 0 2%;
`

export const TopInfo = styled.div`
  @media only screen and (max-width: 1100px) {
    width: calc((100% - 40px) / 3);
  }

  @media only screen and (max-width: 780px) {
    width: calc((100% - 20px) / 2);
  }

  @media only screen and (max-width: 490px) {
    width: 100%;
  }

  margin-top: 20px;
  width: calc((100% - 60px) / 4);
`

export const Select = styled(ReactSelect)``

export const AccessList = styled.ul`
  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  width: 100%;
  /* height: 500px; */
  margin: auto;
  margin: 20px auto;
`

export const AccessBlock = styled.li`
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-top: 15px;
  height: 250px;

  > div {
    margin-bottom: 10px;
    label {
      margin-right: 10px;
    }
  }
`

export const BlockTitle = styled.span`
  font-weight: 450;
  font-size: 20px !important;
  margin-bottom: 20px;
`

export const BottomInfo = styled.div`
  @media only screen and (max-width: 1100px) {
    width: calc((100% - 40px) / 3);
  }

  @media only screen and (max-width: 780px) {
    width: calc((100% - 20px) / 2);
  }

  @media only screen and (max-width: 490px) {
    width: 100%;
  }

  width: calc((100% - 60px) / 4);
`

export const BottomScreen = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  border-top: 1px solid #eee;

  button {
    margin-top: 15px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
`
