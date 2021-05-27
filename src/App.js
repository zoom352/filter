
import './App.css';
import Profile from './Profile/Profile';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import { Route } from 'react-router';


const App = () => {

  return (
    <div className="app-wrapper">
      <Navbar />
      <Header />
      <div className='app-wrapper-content'>
        <Route path='/Profile'
          render={() => <Profile />} />

        

      </div>
    </div>

  );
}

export default App;
