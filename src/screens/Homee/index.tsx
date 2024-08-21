import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { api } from '../../utils/api';

import {
  CategoryTitle,
  ContainerScroll,
  ProductBackground,
  SidewaysScrollView,
  ContainerTitleProduct,
  ContainerProducts,
} from './styles';
import Button from '../../components/Button';

const Homee = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    async function fetchCategories() {
      try {
        let respCategories = await api.get('/products/category-list');
        respCategories = respCategories.data;

        setCategories(respCategories);

        const fetchProductsByCategory = respCategories.map(
          async (category: any) => {
            let responseProducts = await api.get(
              `/products/category/${category}`,
            );
            return { [category]: responseProducts.data.products };
          },
        );

        const productsCategory = await Promise.all(fetchProductsByCategory);

        const products = productsCategory.reduce(
          (acc, product) => ({
            ...acc,
            ...product,
          }),
          {},
        );

        setProductsByCategory(products);
      } catch (error) {
        console.error('Error fetching categories or products:', error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <ContainerScroll showsVerticalScrollIndicator={false}>
      {categories.map(category => (
        <SidewaysScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          key={category}>
          <ContainerTitleProduct>
            <CategoryTitle>{category}</CategoryTitle>
            <ContainerProducts>
              {productsByCategory[category]?.map((product, indexs) => (
                <ProductBackground key={product.id || indexs}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: 18,
                    }}>
                    {product.title}
                  </Text>
                </ProductBackground>
              ))}
            </ContainerProducts>
          </ContainerTitleProduct>
        </SidewaysScrollView>
      ))}
    </ContainerScroll>
  );
};

export default Homee;
