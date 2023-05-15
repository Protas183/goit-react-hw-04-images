import styled from '@emotion/styled';

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 10px 25px;
  font-weight: 500;
  font-size: 18px;

  background-color: white;
  border: 1px solid black;
  border-radius: 5px;

  cursor: pointer;
  box-shadow: var(--main-shadow);

  transition: all 300ms ease-in-out;

  :hover {
    color: var(--bg);
    background-color: #D3D3D3;
  }

  :focus {
    color: var(--bg);
    background-color: D3D3D3;
  }
`;
