import React, { useEffect } from 'react';
import { useTonConnectUI, TonConnectButton } from '@tonconnect/ui-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ConnectWallet = () => {
  const [tonConnectUI] = useTonConnectUI();
  const navigate = useNavigate();

  useEffect(() => {
    // Подписка на событие подключения кошелька
    tonConnectUI.onStatusChange((status) => {
      if (status === 'connected') {
        // Если подключение прошло успешно, перенаправляем на Portfolio
        navigate('/portfolio');
      }
    });
  }, [tonConnectUI, navigate]);

  return (
    <Container>
      <h1>Подключите ваш кошелек</h1>
      <p>Для продолжения работы с приложением, подключите кошелек TON.</p>
      <TonConnectButton />
    </Container>
  );
};

export default ConnectWallet;

// Стили
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;
