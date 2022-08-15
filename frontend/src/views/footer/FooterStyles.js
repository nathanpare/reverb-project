import styled from "styled-components";

const Box = styled.div`
padding: 0px 0px;
background: darkblue;
bottom: 0%;
margin-bottom: 3rem;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
 
  @media (min-width: 1000px) {    
   padding-left:120px;
   padding-right: 120px;
  }

`;
   
const Row = styled.div`
  display: flex;
  vertical-align: top;
  justify-content: center;
`;
   

const FooterLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 16px;
font-family: fantasy, Helvetica, sans-serif;
text-decoration: none;

&:hover {
  color: green;
  transition:200ms ease-in;
}
`;
const Heading = styled.p`
  font-size: 22px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;
export { Box, Container, Column, Row, FooterLink, Heading};


