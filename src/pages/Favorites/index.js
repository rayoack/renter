import React from 'react';
import { connect } from 'react-redux';

import { Container, BannerFavorito } from './styles';

import FavoriteList from '../../Components/FavoriteList';

function Favorites() {
  return (
    <Container>
      <BannerFavorito>
        <h1>Favoritos</h1>
      </BannerFavorito>
      <FavoriteList />
    </Container>
  );
}

export default connect()(Favorites);
