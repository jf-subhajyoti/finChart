import './App.css';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, HomePage, StockDetails, Stocks, News } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/exchanges" exact element={<Exchanges />} />
              <Route path="/stocks" exact element={<Stocks />} />
              <Route path="/stock/:id" exact element={<StockDetails />} />
              <Route path="/news" exact element={<News />} />
            </Routes>
          </div>            
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;