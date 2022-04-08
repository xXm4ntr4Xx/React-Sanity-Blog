import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import AllPosts from './components/AllPosts';
import OnePost from './components/OnePost';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route component={AllPosts} path='/' exact/>
      <Route component={OnePost} path='/:slug' exact/>

    </div>
    </BrowserRouter>
  );
}

export default App;
