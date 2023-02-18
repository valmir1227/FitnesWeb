import styled from "styled-components";
import VideoBg from "../../assets/video_bg.png";

export const Container = styled.section`
  background: url(${VideoBg?.src});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 35rem;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;

    h1 {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: -2x;
    }
    img {
      cursor: pointer;
      margin: 1rem 0;

      transition: all 0.3s;

      &:hover {
        filter: brightness(0.95);
      }
    }

    p {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: -2px;
      font-weight: 700;
      color: var(--orange);
      margin-top: 1rem;
    }
  }
`;
