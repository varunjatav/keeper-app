import AppComp from "./component/App";
import './App.css';
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header/>
      <AppComp/>
      <Footer/>
    </div>
  );
}

export default App;
