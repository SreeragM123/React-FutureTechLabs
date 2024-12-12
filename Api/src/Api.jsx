import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Api.css';

const Api = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setMeals(data.categories || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <Container>
      <Row>
        {meals.map((meal) => (
          <Col key={meal.idCategory} >
            <Card>
              <Card.Img variant="top" src={meal.strCategoryThumb} />
              <Card.Body>
                <Card.Title>{meal.strCategory}</Card.Title>
                <Card.Text>{meal.strCategoryDescription || 'No Description Available'}</Card.Text>
                <Button variant="primary">GO</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Api;
