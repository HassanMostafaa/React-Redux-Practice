import { Home } from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Contacts } from "./Components/Contacts";
import { Nav } from "./Components/Nav";
import { Counter } from "./Components/Counter";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

import { ContactInfo } from "./Components/ContactInfo";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contacts" element={<Contacts />} />
          <Route path="contacts/:id" element={<ContactInfo />} />
          <Route path="counter" element={<Counter />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
