import styled from "styled-components";
import { device } from "../../../styles/devices";
import coursesBg from "../../assets/course_bg.png";

export const Container = styled.section`
  width: 100vw;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${coursesBg.src});
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 2.4rem;
    color: var(--white);
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  @media ${device.mobileS} {
    padding: 6rem 1rem;
  }
`;

export const Cards = styled.div`
  gap: 1rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
