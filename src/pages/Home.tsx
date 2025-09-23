import React from 'react';
import { 
  Card, 
  CardsContainer, 
  CardText, 
  CardTitle, 
  HomeContainer, 
  Subtitle, 
  Title 
} from '../styles/Home.Styled';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Title>Bem-vindo ao GiftApp!</Title>
      <Subtitle>
        Aqui você pode adicionar seus amigos e descobrir exatamente o que eles querem ganhar em qualquer data comemorativa! 
        <br />
        Finalmente o marido vai saber qual presente dar para a esposa, o amigo secreto não vai ser mais um drama, e até o namorado(a) vai arrasar na surpresa!
      </Subtitle>

      <CardsContainer>
        <Card>
          <CardTitle>🎁 Amigos e Família</CardTitle>
          <CardText>
            Adicione seus amigos, familiares e colegas de trabalho e veja suas listas de desejos para aniversários, Natal, Dia dos Namorados e muito mais!
          </CardText>
        </Card>

        <Card>
          <CardTitle>📝 Listas de Presentes</CardTitle>
          <CardText>
            Cada pessoa tem sua própria lista de presentes. Nunca mais erre na escolha do presente e evite presentes "meh" de última hora!
          </CardText>
        </Card>

        <Card>
          <CardTitle>😎 Fácil e Divertido</CardTitle>
          <CardText>
            Interface simples e divertida. Você consegue ver tudo de um jeito rápido e até brincar de adivinhar o que cada um quer!
          </CardText>
        </Card>

        <Card>
          <CardTitle>📱 Adicione à Tela Inicial</CardTitle>
          <CardText>
            Para usar o GiftApp como um aplicativo no seu iPhone, abra este site no navegador Safari, toque no ícone de Compartilhar (uma caixa com uma seta para cima), role a lista de opções para baixo e toque em <strong>Adicionar à Tela de Início</strong>.
            <br /><br />
            <strong>Observação:</strong> Não foi possível publicar na Apple Store devido a custos, mas você ainda pode usar o app diretamente do navegador como se fosse um app nativo!
          </CardText>
        </Card>
      </CardsContainer>
    </HomeContainer>
  );
};

export default Home;
