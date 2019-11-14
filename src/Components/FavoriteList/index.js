import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../util/format';

/* AOS é a biblioteca responsável por fazer as animações do scroll do mouse */
import AOS from 'aos';
import 'aos/dist/aos.css'; 

/* Icone de lixeira que vem do Material Design */
import { MdDeleteForever } from 'react-icons/md';

import { Container, CardFavorite } from './styles';

export default function PropertyList() {
  AOS.init();

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favReducers);

  return (
    <Container>
      { favorites.map(favorite => (
        <CardFavorite data-aos="fade-up" key={favorite.property.id}>
          <div style={{backgroundImage: `url(${favorite.property.image})`}} />
          <Link to={`/imovel/${favorite.property.id}`}>{favorite.property.title}</Link>
          <span>{formatPrice(favorite.property.value)}/mês</span>
          <button
            type="button"
            onClick={() => {
              dispatch({
                type: 'REMOVE_TO_FAVORITES',
                id: favorite.property.id
              })
            }}
          >
            <MdDeleteForever size={24} color="#FFF"/>

            <span>DELETAR DOS FAVORITOS</span>
          </button>
        </CardFavorite>
      )) }
    </Container>
  );
}
