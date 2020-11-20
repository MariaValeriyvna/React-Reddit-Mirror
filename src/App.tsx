import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}
export const App = hot(AppComponent);