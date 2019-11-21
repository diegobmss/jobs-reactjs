import styled from 'styled-components';

export const JobList = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  strong {
    font-size: 16px;
    color: #333;
  }

  .company {
    color: #777;
    font-size: 14px;
  }

  .description {
    font-size: 15px;
  }

  button {
    width: 100%;
  }
`;
