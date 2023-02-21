import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.footer`
  width: 100%;
  background: #f0edee;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  @media ${device.mobileS} {
    padding: 5rem 1rem;
  }
  @media ${device.tablet} {
    padding: 5rem 3rem;
  }
  @media ${device.laptop} {
    padding: 5rem 7rem;
  }
`;

export const Logo = styled.div`
  width: 20rem;
  line-height: 2rem;

  h1 {
    display: flex;
    font-size: 2rem;
    gap: 5px;
    color: var(--orange);
    margin-bottom: 2rem;
    span {
      color: var(--white);
    }
  }

  p {
    color: var(--grey);
    font-size: 0.9rem;
  }
`;

export const Links = styled.div`
  h3 {
    color: var(--dark-gray);
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      font-size: 0.8rem;
      list-style: none;
      font-weight: 500;
      color: var(--grey);
      text-transform: uppercase;

      &:hover {
        color: var(--orange);
      }
    }
  }
`;

export const SciContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  div {
    display: flex;
    gap: 2rem;

    img {
      width: 1rem;
      height: 1rem;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Instagram = styled.div`
  width: 16.6rem;
  height: 16.6rem;

  h3 {
    color: var(--dark-gray);
    text-transform: uppercase;
    letter-spacing: -1px;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px; /* espaço entre as imagens */
  }

  .grid-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const Contact = styled.div`
  h3 {
    color: var(--dark-gray);
    text-transform: uppercase;
    letter-spacing: -1px;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  p {
    color: var(--grey);
    display: flex;
    gap: 20px;
    margin-bottom: 2rem;

    a {
      color: inherit;
      font-size: 0.8rem;
    }
  }
`;
