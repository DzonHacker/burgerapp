import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
function App() {
  return (
    <div className="app">
      <div className="app__body"> 
        <Layout>
          <p>This is test body</p>
        </Layout>
        <BurgerBuilder/>
      </div>
      
    </div>
  );
}

export default App;
