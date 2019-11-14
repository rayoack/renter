import React, { useState, useEffect }  from 'react';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container, BannerCatalogo } from './styles';

import PropertyList from '../../Components/PropertyList';

export default function Catalog() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getProperties() {
      const response = await api.get('/rentals');
      
      const data = response.data.map(property => ({
        ...property,
        priceFormatted: formatPrice(property.value),
      }));

      setProperties(data)
    }

    getProperties()
  }, []);

  return (
    <Container>
      <BannerCatalogo>
        <h1>Catálogo de imóveis</h1>
      </BannerCatalogo>
      <PropertyList properties={properties} />
    </Container>
  );
}
