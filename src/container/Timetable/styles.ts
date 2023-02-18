import styled from "styled-components";
import { device } from "../../../styles/devices";

export const Container = styled.section`
  width: 100vw;
  padding: 0 7rem;
  background: #f8f8f9;

  @media ${device.mobileS} {
    padding: 1rem;
  }

  @media ${device.tablet} {
    padding: 1rem 3rem 3rem;
  }

  @media ${device.laptop} {
    padding: 1rem 6rem 3rem;
  }
`;

export const Text = styled.div`
  text-align: center;

  h1 {
    font-size: 2.4rem;
    color: var(--dark-gray);
    margin-top: 4rem;
  }
`;

export const CardConTainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  flex-wrap: wrap;
`;
