import React from "react";
import { Button, Card, Col } from "react-bootstrap";

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
                <Button variant="primary">See Details</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}
export default ServicesCard;