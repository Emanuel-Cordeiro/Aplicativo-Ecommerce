import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { api } from '../../utils/api';

import {
  CategoryTitle,
  ContainerScroll,
  ProductBackground,
  SidewaysScrollView,
  ContainerTitleProduct,
} from './styles';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get('/products/category-list/?limit=7');

      setCategories(response.data);
    }

    fetchCategories();
  }, []);

  return (
    <ContainerScroll showsVerticalScrollIndicator={false}>
      {categories.map(category => (
        <SidewaysScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ContainerTitleProduct>
            <CategoryTitle>{category}</CategoryTitle>
            <ProductBackground>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 30 }}>
                {category} aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Text>
            </ProductBackground>
            <ProductBackground>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 30 }}>
                {category} aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </Text>
            </ProductBackground>
          </ContainerTitleProduct>
        </SidewaysScrollView>
      ))}
    </ContainerScroll>
  );
};

export default Home;
