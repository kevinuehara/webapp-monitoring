import { initializeSentry } from "./sentry";

initializeSentry();

function App() {
  const handleError = () => {
    throw new Error("Hi! I'm an error");
  };

  return (
    <>
      <button className="button-error" onClick={handleError}>
        Click to Explode
      </button>
    </>
  );
}

export default App;
