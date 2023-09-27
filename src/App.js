import Routes from "./routes/Routes";
import { AppContextProvider } from "./context/context-app";

function App() {
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}

export default App;
