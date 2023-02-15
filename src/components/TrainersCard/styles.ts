import styled from "styled-components";

export const Container = styled.div`
  height: 30rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: sticky;
  z-index: 1;
  margin-left: 1rem;
`;

export const Profile = styled.main`
  position: relative;
  cursor: pointer;
  width: 26rem;
  height: 26rem;
  z-index: -1;
  border: 5px solid var(--orange);
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

  &:hover {
    .text {
      visibility: visible;

      transform: translateY(50%);
    }
  }

  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    transform: translateY(100%);

    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    background: var(--white);
    transition: transform 0.3s ease;
    visibility: hidden;

    h3 {
      text-transform: uppercase;
      font-weight: 900;
      margin: 1.5rem 0 0.5rem;
      color: var(--dark-gray);
    }

    span {
      text-transform: uppercase;
      font-weight: 600;
      color: var(--orange);
    }
  }
`;

export const SocialMedia = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;

  img {
    width: 15px;
    height: 15px;

    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
