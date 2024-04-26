import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ShowAllDegrees() {
    const [degrees, setDegrees] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/degree")
            .then(response => response.json())
            .then(data => {
                setDegrees(data);
            })
            .catch(err => console.log(err));
    }, []);
    const displayDegrees = () => {
        return degrees.map(elem => (
            <Col key={elem.id} xs={12} md={6} lg={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>{elem.full_name}</Card.Title>
                        <Card.Text>{elem.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };

    return (
        <Container>
            <Row>
                {displayDegrees()}
            </Row>
        </Container>
    );
}

export default ShowAllDegrees;
