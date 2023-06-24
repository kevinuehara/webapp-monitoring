import { Content } from "../components/Content";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Content>
        <h2 className="mb-2">Home</h2>
        <h2 className="mb-2 text-gray-700">
          Demo Application to Monitoring WebApps
        </h2>
      </Content>
    </>
  );
};
