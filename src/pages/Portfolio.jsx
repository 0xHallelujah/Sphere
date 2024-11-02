import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TonConnect } from '@tonconnect/sdk';

const Portfolio = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const tonConnect = new TonConnect();

    // Получение баланса после подключения
    const fetchBalance = async () => {
      try {
        const walletInfo = await tonConnect.getBalance();
        setBalance(walletInfo.balance);
      } catch (error) {
        console.error("Ошибка получения данных кошелька:", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Container>
      <Header>Ваш Портфель</Header>
      <PortfolioInfo>
        <h2>Общий баланс: {balance} TON</h2>
      </PortfolioInfo>
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 24px;
  color: #0a74da;
`;

const PortfolioInfo = styled.div`
  margin: 20px 0;
  h2 {
    color: #333;
  }
`;
