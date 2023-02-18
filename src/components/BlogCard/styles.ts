import styled from "styled-components";

export const Container = styled.div`
  max-width: 28rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-bottom: 2px solid var(--orange);

    div img {
      filter: grayscale(0);
    }

    h3 {
      color: var(--orange);
    }
  }

  div {
    width: 100%;
    padding-bottom: 2rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      width: 100%;
      height: 20rem;

      object-fit: cover;
      filter: grayscale(1);
    }
  }
`;

export const Text = styled.div`
  text-align: left;
  padding: 0 1rem 1rem;

  span {
    position: absolute;
    top: 0;
    right: 2rem;
    font-size: 0.9rem;
    padding: 2rem 1rem;
    background: var(--orange);
    color: var(--white);
    font-weight: 500;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  }

  h3 {
    font-weight: 500;
    letter-spacing: -0.5px;
    font-size: 1.2rem;
    color: var(--dark-gray);
  }

  p {
    font-size: 0.9rem;
    color: var(--grey);
    margin-top: 1rem;
  }
`;
