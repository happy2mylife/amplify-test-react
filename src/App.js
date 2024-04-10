import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Card, Flex, Image, Badge, Text, StepperField, Button } from '@aws-amplify/ui-react';



function App() {
  // 数量の状態を管理するためのステートフック
  const [quantity, setQuantity] = useState(1);
  // カート内の合計商品数を管理するためのステートフック
  const [cartQuantity, setCartQuantity] = useState(0);

  // Add to Cart ボタンのクリックイベントハンドラ
  const addToCart = () => {
    // カートの合計数量を更新する
    setCartQuantity(cartQuantity + quantity);
    alert(cartQuantity)
  };

  // 数量変更イベントハンドラ
  const onQuantityChange = (newValue) => {
    setQuantity(newValue);
  };

  return (
    <Card variation="elevated">
      <Flex alignItems="flex-start">
        <Image src="/amplify-placeholder.svg"
          alt="Amplify" width="8rem" />
        <Flex direction="column" gap="xs">
          <Flex>
            <Badge variation="success">New</Badge>
          </Flex>
          <Text fontSize="large" fontWeight="semibold">
            Product title
          </Text>
          <Text color="font.tertiary">
            Product description
          </Text>
          <Text
            fontSize="large"
            color="secondary">
            $199.99
          </Text>
          <Flex>
            <StepperField
              label="Quantity"
              min={0}
              max={10}
              step={1}
              defaultValue={1}
              labelHidden
              value={quantity} // StepperFieldのvalueをステートフックにバインド
              onStepChange={onQuantityChange} // StepperFieldの変更イベントハンドラ
            />
            <Button variation="primary" onClick={addToCart}>Add to cart</Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>);
}

export default App;
