import styled from 'styled-components';

export const Container = styled.section`
  & {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    max-width: 960px;
    height: 100vh;
    margin: 0 auto;
    margin-top: 80px;
  };

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const CardFavorite = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-bottom: 40px;
  padding: 20px;

  &:hover {
    -webkit-box-shadow: 0px -10px 25px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -10px 25px -17px rgba(0,0,0,0.75);
    box-shadow: 0px -10px 25px -17px rgba(0,0,0,0.75);
  }

  > div {
    height: 20vh;
    overflow: hidden;
    background-size: cover;
    background-position: center;

    @media (max-width: 980px) {
      height: 60vh;
    }
  }

  a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #FF8900;
    margin: 20px 0 10px;
  }

  > span {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: auto;
    border: 0;
    height: 40px;
    background-color: #c23616;

  @media (max-width: 980px) {
    height: 80px;
  }

    span {
      color: #FFF;
      font-weight: bold;
      font-size: .9rem;
    }
  }
`;
