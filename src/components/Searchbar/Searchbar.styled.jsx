import styled from '@emotion/styled';

export const Header = styled.header`
  margin-bottom: 25px;
  padding: 20px;
  min-width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background-color: #0000CD;
  border-radius: 3px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 11px 25px;
  width: 400px;
  display: inline-block;
  width: 500px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 18px;

  color: grey;
  border: 1px solid black;
  border-radius: 15px;
  transition: all 300ms ease-in-out;

  :focus {
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var(--accent);
  }
`;

export const ButtonSubmit = styled.button`
  padding: 10px 25px;

  font-weight: 500;
  font-size: 18px;
  color: grey;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  :hover {
    color: black;
    background-color: #D3D3D3;
  }

  :focus {
    background-color:#D3D3D3;
    outline: 3px solid var(--bg);
    box-shadow: 0px 0px 0px 6px var;
  }
`;
