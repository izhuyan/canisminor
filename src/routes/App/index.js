import { BackTop, Layout } from "antd";
import { Switch } from "dva/router";
import { Background, Footer, Header, Loading } from "../../components";
import styles from "./index.scss";

const { Content } = Layout;

const App = ({ children }) => {
  return (
    <Layout className={styles.view}>
      <Loading />
      <BackTop style={{ zIndex: 999 }} />
      <Background />
      <Switch>{children}</Switch>
    </Layout>
  );
};

App.Body = ({ children }) => (
  <Layout className={styles.layout}>
    <Header />
    <Content className={styles.content}>
      <Switch>{children}</Switch>
    </Content>
    <Footer />
  </Layout>
);
export default App;
