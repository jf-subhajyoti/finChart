import './App.css';

import { Link, Routes, Route } from 'react-router-dom';
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
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Stock Market App <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;