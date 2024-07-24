import "./App.css";
import "./language/i18n";
import RoutesProvider from "./routes";

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <RoutesProvider />
    </div>
  );
}

export default App;
