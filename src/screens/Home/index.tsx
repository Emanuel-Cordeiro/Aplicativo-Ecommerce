/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { api } from '../../utils/api';

import { Header } from '../../components/Header';

import {
  CategoryTitle,
  Container,
  ContainerProducts,
  ContainerTitleProduct,
  ProductBackground,
  SidewaysScrollView,
  Title,
} from './styles';

interface ProductsPromotionType {
  title: string;
  thumbnail: string;
  category: string;
}

interface CategoryPromotionType {
  [key: string]: ProductsPromotionType[];
}

export function Home() {
  const [products, setProducts] = useState<CategoryPromotionType>({});
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(
          '/products?sortBy=discountPercentage,category&order=desc',
        );

        const productsArray = response.data.products.map(
          (product: ProductsPromotionType) => ({
            title: product.title,
            thumbnail: product.thumbnail,
            category: product.category,
          }),
        );

        const groupedItems = productsArray.reduce(
          (acc: CategoryPromotionType, item: ProductsPromotionType) => {
            if (!acc[item.category]) {
              acc[item.category] = [];
            }

            acc[item.category].push(item);
            return acc;
          },
          {},
        );

        setCategories(Object.keys(groupedItems));
        setProducts(groupedItems);
      } catch (error) {
        console.error('Erro ao buscar os produtos', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Container showsVerticalScrollIndicator={false}>
        <Title>Promoções</Title>
        {categories.map(category => (
          <SidewaysScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            key={category}>
            <ContainerTitleProduct>
              <CategoryTitle>{category}</CategoryTitle>
              <ContainerProducts>
                {products[category]?.map((product, index) => (
                  <ProductBackground key={index}>
                    <Text
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
      </Container>
    </>
  );
}
