import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
