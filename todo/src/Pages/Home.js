import React from 'react'
import { Row, Col, Divider} from 'antd';


export default function Home() {
    return (
        <section className="site-layout-content">
            <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} md={6} className="bg-white gutter-row">
                    <h1>Home</h1>
                </Col>
                <Col  xs={24} md={6}  className="bg-primary gutter-row"  >
                    <h1>Home2</h1>
                </Col>
                <Col  xs={24} md={6}  className="bg-orang gutter-row"  >
                    <h1>Home3</h1>
                </Col>
                <Col  xs={24} md={6}  className="bg-red gutter-row"  >
                    <h1>Home4</h1>
                </Col>
            </Row>
            <Row >
                <Col xs={24} md={6} span={6} className="bg-white gutter-row">
                    <h1>Home</h1>
                </Col>
                <Col  xs={24} md={6}  className="bg-primary gutter-row"  >
                    <h1>Home2</h1>
                </Col>
                <Col  xs={24} md={6}  className="bg-orang gutter-row"  >
                    <h1>Home3</h1>
                </Col>
                <Col  xs={24} md={6}  className="bg-red gutter-row"  >
                    <h1>Home4</h1>
                </Col>
            </Row>
        </section>
    )
}
