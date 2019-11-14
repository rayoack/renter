import styled from 'styled-components';
import imagemCatalogo from '../../assets/banner-catalogo.jpg';

export const Container = styled.section`
  & {
    height: 100vh;  
  }
`;

export const BannerFavorito = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 40vh;
    margin-top: 100px;
    background: url(${imagemCatalogo}) no-repeat center;
  }

  h1 {
    position: relative;
    color: white;
    font-size: 5rem;
    background: #FF8900;
    padding: 0 20px;
  }
`;