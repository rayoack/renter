import styled from 'styled-components';

export const Container = styled.section`
  & {
    width: 100vw;
    height: 100vh;
    margin-top: 200px;
  }
`;

export const PropertyView = styled.div`
  & {
    max-width: 960px;
    height: 80vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
  }
  
  > div {
    background-repeat: no-repeat;
    background-size: cover;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #434345;
    padding-bottom: 20px;
    border-bottom: 4px solid #FF8900;
    margin-bottom: 40px;
  }

  span {
    font-size: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
    border: 0;
    width: 100%;
    height: 40px;
    background-color: #FF8900;

    span {
      color: #FFF;
      font-weight: bold;
      font-size: 1rem;
    }

    &:hover {
      transform: scale(1)
    }
  }
`;
