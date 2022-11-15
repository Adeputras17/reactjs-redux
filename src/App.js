import { Provider } from "react-redux";
import Head from "./components/Head";
import store from "./app/Features/store";

function App() {

  

  return (
    <div>
      <Provider store={store}>
      <Head/>
      </Provider>
      
    </div>
  );
}

export default App;
