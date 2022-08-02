import React from 'react';

import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

function Footer() {
  return (
    <Box>     
      <Container>
        <Row>
          <Column>
            <Heading>
              About Us
            </Heading>
            <FooterLink href='#'>Vision</FooterLink>
          </Column>

          <Column>
            <Heading>
              App Feature
            </Heading>
            <FooterLink href='#'>Playing Songs</FooterLink>
            <FooterLink href='#'>Playlists</FooterLink>
            <FooterLink href='#'>Liked Songs</FooterLink>
          </Column>
          <Column>
            <Heading>
              Contact Us
            </Heading>
            <FooterLink href='#'>Ottawa</FooterLink>
            <FooterLink href='#'>Edminton</FooterLink>
            <FooterLink href='#'>Vancouver</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Footer;