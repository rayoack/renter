import React, { useState, useEffect } from 'react';
import { formatPrice } from '../../util/format';
import { useDispatch } from 'react-redux';

import { MdStar } from 'react-icons/md';
import { Container, PropertyView } from './styles';

import api from '../../services/api';

export default function Property({ match }) {
  const [property, setProperty] = useState('')

  useEffect(() => {
    async function getProperty() {
      const response = await api.get(`/rentals/${match.params.id}`);
      
      setProperty(response.data)
    }

    getProperty()
  }, [])

  const dispatch = useDispatch();

  return (
    <Container>
      <PropertyView>
        <div style={{backgroundImage: `url(${property.image})`}}></div>
        <div>
          <h2>{property.title}</h2>
          <span>Valor mensal: {formatPrice(property.value)}</span>
          <button
            type="button"
            onClick={() => dispatch({
              type: 'ADD_TO_FAVORITE',
              property: {property}
            })}>
            <MdStar size={24} color="#FFF"/>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </div>
      </PropertyView>
    </Container>
  );
}
