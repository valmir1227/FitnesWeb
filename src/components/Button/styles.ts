import styled from "styled-components";

export const Button = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s;
  background: var(--orange);
  border: 0;

  transition: all 0.3s;

  &:hover {
    -webkit-box-shadow: 0px 4px 5px 0px rgba(239, 108, 9, 0.8);
    -moz-box-shadow: 0px 4px 5px 0px rgba(239, 108, 9, 0.8);
    box-shadow: 0px 4px 5px 0px rgba(239, 108, 9, 0.8);
  }
`;
