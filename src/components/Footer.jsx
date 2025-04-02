import React from 'react'
import styled from 'styled-components'

const WrapperFooter = styled.footer`
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: underline;
    text-decoration-color: #f00;
    text-decoration-thickness: 2px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`
const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
    h1 {
        margin: 0;
    }
    ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        li {
            a {
                color: white;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`
const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`
const FooterText = styled.p`
    margin: 0;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: underline;
    text-decoration-color: #f00;
`
const FooterList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    li {
        a {
            color: white;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`
const FooterItem = styled.li`
    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`



const Footer = () => {
  return (
    <WrapperFooter>
      <FooterContainer>
        <FooterText>© 2025 ACD Innov Services</FooterText>
        <FooterList>
          <FooterItem>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#">Terms of Service</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href="#">Contact Us</FooterLink>
          </FooterItem>
        </FooterList>
      </FooterContainer>
    </WrapperFooter>
  )
}

export default Footer