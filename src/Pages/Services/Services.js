import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCard from "./ServicesCard";

function Services() {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('./services.json')
        .then(Response => Response.json())
        .then(data => {
            setServices(data)
            console.log(data)
        })
    },[])
    return (
        <Container id='services'>
            <Row>
            
                    {
                        services.map(service => <ServicesCard
                        key={service.name}
                        serviceObject = {service}
                        ></ServicesCard>)
                    }
                
            </Row>
        </Container>

    )
}
export default Services;