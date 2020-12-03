import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/Context/TokenContext';
import { UserContextProvider } from './shared/Context/userContext';
import { PostsContextProvider } from './shared/Context/postsContext';

function AppComponent() {
  const [token] = useToken();
  
  return (
    <tokenContext.Provider value={token}>
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
    </tokenContext.Provider>
  );
}
export const App = hot(() => <AppComponent />);
