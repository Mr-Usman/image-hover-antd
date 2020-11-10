import React, { Component, useState } from "react";
import { Row, Col, Button, Card, Image } from "antd";
import { PushpinOutlined, StarOutlined, PushpinFilled, StarFilled, StarTwoTone, PushpinTwoTone } from "@ant-design/icons";
import "../App.css";
const { Meta } = Card;

const FilterBar = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <h2>Hover on the Image to see the Buttons</h2>
      <div className="show-image">
      <Card
        hoverable
        className="show-image ant-card-design"
        style={{ width: 200 }}
        headStyle={{ width : 100 }}
        cover={<img style={{ height: '139px' }} onClick={(() => console.log('image clicked'))} alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlLIftekhJmrq6YtvS0Dvodv4NdEt1xX04Ew&usqp=CAU" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <span className="star">
      <Button
        style={{ backgroundColor: 'white', color: '#4287f5', borderStyle: 'none', borderRadius: 5 }}
        onClick={() => console.log("al ok")}
        // icon={<PushpinOutlined style={{ backgroundColor: "white"}} />}
        type="primary"
      ><StarFilled /></Button>
    </span>
    <span className="pin">
    <Button
      style={{ backgroundColor: 'white', color: '#4287f5', borderStyle: 'none', borderRadius: 5 }}
      onClick={() => console.log("al ok")}
      // icon={<StarFilled />}
      type="primary"
    ><PushpinFilled /></Button>
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
