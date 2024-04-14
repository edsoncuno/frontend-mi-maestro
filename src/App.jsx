import Layout from "./components/layout";
import Home from "./pages/home";

export default function App({ children }) {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}