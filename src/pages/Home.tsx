import { Content } from "../components/Content";
import { CustomButton } from "../components/CustomButton";
import { Header } from "../components/Header";

export const Home = () => {
  const handleTrackSentryError = () => {
    throw new Error("Hi! I'm an error!");
  };

  return (
    <>
      <Header />
      <Content>
        <h2 className="mb-2">Home</h2>
        <h2 className="mb-2 text-gray-700">
          Demo Application to Monitoring WebApps
        </h2>
        <CustomButton
          text="Track me on Sentry"
          onClick={handleTrackSentryError}
        />
      </Content>
    </>
  );
};
