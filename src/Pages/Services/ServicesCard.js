import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServicesCard({serviceObject}) {
    const {name, imgSrc, description} = serviceObject;

    return (
        <Col xs={12} md={4}>
        <Card style={{margin:"1.5em"}}>
            <Card.Img variant="top" src={imgSrc} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to='/login'><Button variant="primary">Talk With Exparts</Button></Link>
            </Card.Body>
        </Card>
        </Col>
    )
}
export default ServicesCard;