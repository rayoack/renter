import styled from 'styled-components';
import imagemBanner from '../../assets/banner-home.jpg';

export const Container = styled.section`
  & {
    height: 100vh;  
  }

  

`;

export const Banner = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url(${imagemBanner}) no-repeat center;
  }

  h1 {
    position: relative;
    color: white;
    font-size: 5rem;
    background: #FF8900;
    padding: 0 20px;
  }

  
  @media (max-width: 1265px) {
    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 1020px) {
    h1 {
      font-size: 3rem;
    }
  }
  
  @media (max-width: 780px) {
    h1 {
      font-size: 2rem;
    }
  }
`;