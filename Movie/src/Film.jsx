import React, { useState, useEffect } from 'react'; 
import { Form, Row, Col, Card, Button } from 'react-bootstrap';  

const Film = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovie = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`);
      const data = await response.json();
      setMovies(data.Search || []);  // Set empty array if no movies found
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (search) {
      fetchMovie();  // Fetch movie data only when there is a search term
    } else {
      setMovies([]);  // Clear movie list if the search is empty
    }
  }, [search]);  // Re-run effect when search changes

  return (
    <div>
      <Form className='mb-4'>
        <h1>Search Movies</h1>
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
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Col key={movie.imdbID}>
              <Card>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Year || 'No Description Available'} - {movie.Type}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No movies found. Try searching again!</p>  
        )}
      </Row>
    </div>
  );
};

export default Film;
