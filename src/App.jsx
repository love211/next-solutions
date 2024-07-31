import "./App.css";
import useAuth from "./auth/useAuth";
import Loading from "./components/Loading";
import "./language/i18n";
import RoutesProvider from "./routes";

function App() {
  const { isInitialized } = useAuth();
  return (
    <div className="w-full h-full flex items-center flex-col main-bg bg-white">
      {isInitialized ? <RoutesProvider /> : <Loading />}
    </div>
  );
}

export default App;
