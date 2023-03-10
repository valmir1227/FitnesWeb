import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Head = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;

  h1 {
    display: flex;
    font-size: 2rem;
    gap: 5px;
    color: var(--orange);
    span {
      color: var(--white);
    }
  }

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    gap: 2rem;
  }

  @media ${device.mobileS} {
    padding: 1rem;
  }

  @media ${device.tablet} {
    padding: 2rem 3rem;
  }

  @media ${device.laptop} {
    padding: 2rem 7rem;
  }
`;

export const Mobile = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
  position: absolute;
  h1 {
    display: flex;
    font-size: 2rem;
    gap: 5px;
    color: var(--orange);
    span {
      color: var(--white);
    }
  }

  div {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    nav {
      list-style: none;
      background: var(--orange);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(146, 88, 249, 1);
      text-align: center;
      padding: 2rem 1rem;
      margin-top: 0.5rem;
      border-radius: 5px;
      z-index: 99;

      li {
        padding: 0.5rem 0;
        text-transform: uppercase;
        font-weight: 500;
        color: #fff;
      }
    }
    svg {
      cursor: pointer;
    }
  }
`;
