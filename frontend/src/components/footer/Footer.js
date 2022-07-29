import React from 'react';

import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

function Footer() {
  return (
  <Box>
    <h1> Reverb - Your music library !!!</h1>
    <Container>
      <Row>
        <Column>
        <Heading>
          About Us
        </Heading>
        </Column>
        <Column>
        <Heading>
          Services
        </Heading>
        </Column>
        <Column>
        <Heading>
          Contact Us
        </Heading>
        </Column>
      </Row>
    </Container>
  </Box>
)      }

export default Footer;