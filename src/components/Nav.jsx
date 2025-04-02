import React from 'react'
import styled from 'styled-components'

const WrapperNav = styled.nav`
  background-color: #333;
    color: white;
    padding: 1rem;
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
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;

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
const NavTitle = styled.h1`
    margin: 0;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: underline;
    text-decoration-color: #f00;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    &:hover {
        text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
        transform: scale(1.05);
    }
`
const NavList = styled.ul`
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
const NavItem = styled.li`
    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`
const NavLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const Nav = () => {
  return (
      <WrapperNav>
            <NavContainer>
                <NavTitle>Movie App</NavTitle>
                <NavList>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/movies">Movies</NavLink>
                    </NavItem>
                </NavList>
            </NavContainer>
    </WrapperNav>
  )
}

export default Nav