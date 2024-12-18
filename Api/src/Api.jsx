import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Api.css';

const Api = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");  

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

  const filteredMeals = meals.filter(meal =>
    meal.strCategory.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Form className='mb-4'>
        <Form.Group controlId="search"> 
          <Form.Control
            className="search-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}  
          />
        </Form.Group>
      </Form>

      <Row>
        {filteredMeals.map((meal) => (
          <Col key={meal.idCategory}>
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
