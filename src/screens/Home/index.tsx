import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import {
  CategoryTitle,
  Container,
  ContainerProducts,
  ContainerTitleProduct,
  ProductBackground,
  SidewaysScrollView,
} from './styles';
import { api } from '../../utils/api';

interface ProductsPromotionType {
  title: string;
  thumbnail: string;
  category: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductsPromotionType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      let response = await api.get(
        '/products?sortBy=discountPercentage,category&order=desc',
      );

      const productsArray = response.data.products.map(
        (product: ProductsPromotionType) => {
          return {
            title: product.title,
            imgUrl: product.thumbnail,
            category: product.category,
          };
        },
      );

      const groupedItems = productsArray.reduce((acc: any, item: any) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }

        acc[item.category].push(item);

        return acc;
      }, {});

      const categoriesList = Object.keys(groupedItems);
      setCategories(categoriesList);
      setProducts(productsArray);
    }

    fetchProducts();
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false}>
      {categories.map(category => (
        <SidewaysScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          key={category}>
          <ContainerTitleProduct>
            <CategoryTitle>{category}</CategoryTitle>
            <ContainerProducts>
              {products?.map((product, indexs) => (
                <ProductBackground key={indexs}>
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
    </Container>
  );
}
