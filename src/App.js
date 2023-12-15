import './App.css';
import Content from './components/Content';
import { GoodsList } from './components/GoodsList';
import { Header } from './components/Header';
import { Image } from './components/Image';


function App() {
  return (<>
    <Header />
    <Content />
    <Image />
    <GoodsList/>
  </>);
}

export default App;
