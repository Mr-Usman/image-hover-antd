import React from "react";
import { Row, Col, Card } from "antd";

import "./App.css";

import FilterBar from "./components/Filterbar";

function App() {
  return (
    <Row>
      <Col span={24}>
        <FilterBar />
      </Col>
    </Row>
  );
}

export default App;
