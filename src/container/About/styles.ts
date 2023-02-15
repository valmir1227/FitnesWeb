import styled from "styled-components";
import { device } from "../../../styles/devices";

export const AboutContainer = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media ${device.mobileS} {
    padding: 1rem;
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.laptop} {
    padding: 3rem 6rem;
    flex-wrap: nowrap;
  }

  @media ${device.laptopL} {
    padding: 6rem 7rem;
  }
`;

export const Text = styled.div`
  h1 {
    font-size: 2.4rem;
    color: var(--dark-gray);
  }
  p {
    color: #616783;
    line-height: 1.6rem;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  button {
    margin-top: 2rem;
  }

  @media ${device.mobileS} {
    padding: 1rem;
    width: 100%;
  }

  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.laptopL} {
    width: 40rem;
  }
`;

export const ImageContainer = styled.div`
  width: 26rem;
  height: 26rem;

  margin-left: 3.5rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${device.mobileS} {
    width: 20rem;
    height: 20rem;
    margin: 0;
  }

  @media ${device.mobileM} {
    width: 27rem;
    height: 27rem;
  }

  @media ${device.tablet} {
    width: 45rem;
    height: 45rem;
  }

  @media ${device.laptop} {
    width: 24rem;
    height: 24rem;
    margin-left: 4rem;
  }

  @media ${device.laptopL} {
    width: 34rem;
    height: 34rem;
  }
`;
