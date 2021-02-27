import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList/CardsList";
import { UserContextProvider } from "./shared/Context/userContext";
import { PostsContextProvider } from "./shared/Context/postsContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { useToken } from "./hooks/useToken";
import "./main.global.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Post } from "./shared/Post";
import { Auth } from "./shared/Auth";
import { NotFound } from "./shared/NotFound";

function AppComponent() {
  useToken();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserContextProvider>
          <PostsContextProvider>
            <Layout>
              <Header />
              <Content>
                <Switch>
                  <Route exact path="/">
                    <CardsList />
                  </Route>
                  <Route exact path="/posts/:id">
                    <Post />
                  </Route>
                  <Route path="/posts">
                    <CardsList />
                  </Route>
                  <Route path="/auth">
                    <Auth />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </PostsContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </Provider>
  );
}
export const App = hot(() => <AppComponent />);
