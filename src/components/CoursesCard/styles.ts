import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--white);

  .image {
    width: 40%;
    height: 243px;
    -webkit-clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  }

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 33%;
  }

  @media ${device.laptop} {
    width: 30%;
  }
`;

export const Text = styled.div`
  text-align: left;
  margin: 0 2rem;
  h2 {
    color: var(--dark-gray);
  }

  p {
    color: var(--grey);
    margin: 1rem 0;
    font-size: 0.9rem;
  }

  a {
    text-transform: uppercase;
    font-style: italic;
    color: var(--orange);
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    letter-spacing: -1px;

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  }
`;
