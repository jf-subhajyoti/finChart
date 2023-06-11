import React from 'react'

import { Link } from 'react-router-dom';
import millify from 'millify';
import { Layout, Typography, Space, Row, Col, Statistic } from 'antd';

const { Title, Text } = Typography;

const HomePage = () => {
  return (
    <>
        <Title level={2} className="heading">Stocks Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Sensex" value="5" /></Col>
            <Col span={12}><Statistic title="Nifty" value="5" /></Col>
        </Row>

    </>
  )
}

export default HomePage
