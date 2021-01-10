import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { UserContextProvider } from './shared/Context/userContext';
import { PostsContextProvider } from './shared/Context/postsContext';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useToken } from './hooks/useToken';
import './main.global.css';

function AppComponent() {
  useToken();
  return (
    <Provider store={store}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </Provider>
  );
}
export const App = hot(() => <AppComponent />);
