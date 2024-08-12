import React from 'react';
import { Container, Inline, InlineItem } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Home = () => {
  return (
    <Container>
      <Inline>
        <InlineItem>
          <Button title="Home" />
        </InlineItem>
        <InlineItem>
          <Button title="Home" />
        </InlineItem>
      </Inline>
      <Button title="Home" />
      <Input label="Home" />
      <Inline>
        <InlineItem>
          <Input label="Home" />
        </InlineItem>
        <InlineItem>
          <Input label="Home" />
        </InlineItem>
      </Inline>
    </Container>
  );
};

export default Home;
