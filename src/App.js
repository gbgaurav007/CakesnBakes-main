import React, {useState, useRef} from 'react';
import './App.css';
import Homepage from './Homepage';
import Navbar from './Navbar';
import About from './About';
import Catalog from './Catalog';
import Order from './Order';
import Footer from './Footer';
import Account from './Account';

function App() {
  const [user, setUser] = useState(null);
  const homeRef = useRef(null);

  const handleLogin = (username) => {
    setUser(username);
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    setUser(null);
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Account onLogin={handleLogin} onLogout={handleLogout}/>
        <div ref={homeRef}>
        {user ? <Homepage user={user} /> : <Homepage />}
        </div>
        <About />
        <Catalog />
        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default App;
