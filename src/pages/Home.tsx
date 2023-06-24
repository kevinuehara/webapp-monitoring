import { Content } from "../components/Content";
import { CustomButton } from "../components/CustomButton";
import { Header } from "../components/Header";
import { trackEvent } from "../integrations/amplitude";

export const Home = () => {
  const handleEventAmplitude = () => {
    trackEvent("Clicked on Button to Send Event");
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
          text="Send Amplitude Event"
          onClick={handleEventAmplitude}
        />
      </Content>
    </>
  );
};
