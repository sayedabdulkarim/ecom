import styled from 'styled-components'

const ButtonContainer = styled.button`
 text-transform: capitalize;
 font-size: 1.4rem;
 background: transparent;
 border: 0.05rem solid var(--mainPink);
 border-color: var(--mainPink);
 color: var(--mainWhite);
 border-radius: 0.3rem;
outline: none;
 padding: 0.2rem 0.5rem;
 margin: 0.2rem 0.5rem 0.2rem 0;
 transition: all 0.5s ease-in-out;

 &:hover{
   background: var(--mainWhite);
   color: var(--mainPink)
 }
 &:focus{
   outline: none
 }
`
const ProductWrapper = styled.div`
  .pink{
    color: var(--mainPink)
  }
`

const ProductBtn = styled.button `
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--mainPink);
  border: 0.05rem solid var(--mainPink);
  border-color: var(--mainWhite);
  color: var(--mainWhite);
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &:hover{
  background: var(--mainWhite);
  color: var(--mainPink);
  border-color: var(--mainPink);
  }
  &:focus{
  outline: none
  }
`

const AddBtn = styled.button `
  text-transform: capitalize;
  font-size: 1.4rem;
  background: var(--mainYellow);
  border: 0.05rem solid var(--mainYellow);
  border-color: var(--mainYellow);
  color: var(--mainWhite);
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &:hover{
  background: var(--mainWhite);
  color: var(--mainYellow)
  }
  &:focus{
  outline: none
  }
`

export  {
  ButtonContainer,
  ProductWrapper,
  ProductBtn,
  AddBtn
}