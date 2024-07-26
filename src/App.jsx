import "./App.css";
import useAuth from "./auth/useAuth";
import "./language/i18n";
import RoutesProvider from "./routes";

function App() {
  const { isInitialized } = useAuth();
  return (
    <div className="w-full h-full flex items-center flex-col main-bg bg-white">
      {isInitialized ? <RoutesProvider /> : <div> Loading......</div>}
    </div>
  );
}

export default App;
