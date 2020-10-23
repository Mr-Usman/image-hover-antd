import React, { Component, useState } from "react";
import { Row, Col, Button, Card, Image } from "antd";
import { PushpinOutlined } from "@ant-design/icons";

const FilterBar = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <h2>Hover on the Image to see the Buttons</h2>
      <div className="show-image">
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />

        <span className="usman">
          <Button
            onClick={() => console.log("al ok")}
            icon={<PushpinOutlined />}
            type="primary"
          />
        </span>
      </div>
    </React.Fragment>
  );
};

// <div className="site-card-wrapper">
//   <Row gutter={16}>
//     <Col span={8}>
//       <Card bordered={false}>
//         {show === true ? (
//           <span className="btnTop">
//             <Button type="primary">Show</Button>
//           </span>
//         ) : null}
//         <span
//           onMouseEnter={() => setShow(true)}
//           onMouseLeave={() => setShow(false)}
//         >
//           <Image
//             width={200}
//             src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//           />
//         </span>
//       </Card>
//     </Col>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>
//         Card content
//       </Card>
//     </Col>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>
//         Card content
//       </Card>
//     </Col>
//   </Row>
// </div>;

export default FilterBar;
