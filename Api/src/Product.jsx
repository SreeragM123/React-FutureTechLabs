import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

const App = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProduct(data.products || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const filteredProduct = product.filter(pro =>
    pro.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
              {filteredProduct.map((pro) => (
                <Col key={pro.id}>
                  <Card>
                    <Card.Img variant="top" src={pro.images[0]} />
                    <Card.Body>
                      <Card.Title>{pro.title}</Card.Title>
                      <Link to={`/product/${pro.id}`}>
                        <Button variant="primary">GO</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        } />
        
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

const ProductDetail = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
      <h1>{product.title}</h1>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>Category: <b>{product.category}</b></Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title><b>Price: {product.price}</b></Card.Title>
          <Card.Title><b>Rating: {product.rating}</b></Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
