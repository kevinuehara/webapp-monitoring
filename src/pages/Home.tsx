import { Content } from "../components/Content";
import { CustomButton } from "../components/CustomButton";
import { Header } from "../components/Header";
import { trackEvent } from "../integrations/amplitude";

export const Home = () => {
  const handleTrackSentryError = () => {
    throw new Error("Hi! I'm an error!");
  };

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
        <div className="flex flex-col w-2/4">
          <CustomButton
            text="Send Amplitude Event"
            onClick={handleEventAmplitude}
          />
          <CustomButton
            text="Track me on Sentry"
            onClick={handleTrackSentryError}
            style="bg-red-700 hover:bg-red-500 mt-2"
          />
        </div>
      </Content>
    </>
  );
};
