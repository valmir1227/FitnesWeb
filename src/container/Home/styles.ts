import styled from "styled-components";
import { device } from "../../../styles/devices";
import HeaderImage from "../../assets/header-bg-img.png";
import HeaderMobile from "../../assets/header-bg-mobile.png";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .banner {
    width: 35rem;
    height: 36rem;

    left: 0;
    bottom: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div {
    width: 46.6rem;
    height: auto;
    position: absolute;

    top: 50%;
    transform: translateY(-40%);
    text-align: left;

    h1 {
      font-family: serif;
      font-size: 4.5rem;
      line-height: 5.4rem;
      color: var(--grey);
      word-break: break-all;
    }

    p {
      color: #fff;
      margin: 1rem 0;
      font-size: 0.9rem;
      line-height: 1.5rem;
    }

    a {
      text-transform: uppercase;
      font-style: italic;
      color: var(--orange);
      display: flex;
      align-items: center;

      &:hover {
        svg {
          transform: scale(1.2);
        }
      }
    }
  }

  @media ${device.mobileS} {
    padding: 1rem;
    background-position: right;
    background-image: url(${HeaderMobile.src});

    div {
      padding: 1rem;
      width: 100%;

      h1 {
        font-size: 2rem;
        line-height: 2.4rem;
      }
    }
  }

  @media ${device.tablet} {
    background-image: url(${HeaderImage.src});
    background-position: center;

    div {
      width: 40rem;
      padding: 0 3rem;
      left: 0;
    }
  }

  @media ${device.laptop} {
    padding: 3rem 6rem;
    div {
      width: 56.6rem;

      left: 40%;

      h1 {
        font-size: 6rem;
        line-height: 5.4rem;
      }
    }
  }

  @media ${device.laptopL} {
    padding: 6rem 12rem;

    div {
      left: 50%;
      width: 46.6rem;
    }
  }
`;

export default Container;
