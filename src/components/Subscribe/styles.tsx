import styled from 'styled-components';

export const StyledSubscribe = styled.div`
  input {
    background: white;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 4px;
    box-shadow: none !important;
    border: 0px !important;
    height: 40px;
    margin: 0px 5px;
    padding-left: 10px;
    padding-right: 10px;
  }

  button {
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
