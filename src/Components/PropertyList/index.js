import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

/* AOS é a biblioteca responsável por fazer as animações do scroll do mouse */
import AOS from 'aos';
import 'aos/dist/aos.css'; 

/* Icone de estrela que vem do Material Design */
import { MdStar } from 'react-icons/md';

import { Container, CardProperty } from './styles';

export default function PropertyList({ properties }) {
  AOS.init();

  const dispatch = useDispatch();

  return (
    <Container>
      { properties.map(property => (
        <CardProperty data-aos="fade-up" key={property.id}>
          <div style={{backgroundImage: `url(${property.image})`}} />
          <Link to={`/imovel/${property.id}`}>{property.title}</Link>
          <span>{property.priceFormatted}/mês</span>
          <button
            type="button"
            onClick={() => dispatch({
              type: 'ADD_TO_FAVORITE',
              property: {property}
            })}>
            <MdStar size={24} color="#FFF"/>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </CardProperty>
      )) }
    </Container>
  );
}
