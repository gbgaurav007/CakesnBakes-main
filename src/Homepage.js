import React, {useState, useRef} from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './SearchBar';
import Bakery from './Bakery';
import Image from 'react-bootstrap/Image';



const bakeries = [
  { id: 1, name: 'Nik Bakers', location: 'Sector 9, Chandigarh', rating: '4.9', image: 'b1.jpg', desc:'Cakes, Chocolates, Cookies, Breads' },
  { id: 2, name: 'Bakers Lounge', location: 'Sector 9, Chandigarh', rating: '4.5', image: 'b2.avif', desc:'Cakes, Desserts, Cookies' },
  { id: 3, name: 'OvenFresh', location: 'Sector 35, Chandigarh', rating: '4.7', image: 'b3.jpg', desc:'Cakes, Chocolates, Desserts' },
  { id: 4, name: 'Bakers Oven', location: 'Sector 8, Chandigarh', rating: '4.3', image: 'b4.webp', desc:'Cakes, Cookies, Breads' },
  { id: 5, name: 'Cheesecake and co.', location: 'Sector 16, Chandigarh', rating: '4.8', image: 'b5.avif', desc:'Cakes, Cookies, Breads' },
  { id: 6, name: 'Winni Cakes', location: 'Sector 34, Chandigarh', rating: '4.3', image: 'b6.avif', desc:'Cakes, Chocolates, Cookies' },
  { id: 7, name: 'Bakingo', location: 'Sector 16, Chandigarh', rating: '4.7', image: 'b7.avif', desc:'Cakes, Chocolates, Cupcakes' },
  { id: 8, name: 'Belgian Waffle', location: 'Sector 35, Chandigarh', rating: '4.7', image: 'b8.webp', desc:'Cakes, Chocolates, Waffles' },
  { id: 9, name: 'The Crown Patisserie', location: 'Sector 17, Chandigarh', rating: '4.6', image: 'b9.jpg', desc:'Cakes, Cupcakes, Breads' },
  { id: 10, name: 'Super Donuts', location: 'Sector 35, Chandigarh', rating: '4.9', image: 'b10.jpg', desc:'Cakes, Chocolates, Donuts, Breads' },
];


const Homepage = ({user}) => {
  const homeRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const handleSearch = (query) => {
    const results = bakeries.filter(bakery =>
      bakery.desc.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setShowAll(false);
  };

  const handleClear = () => {
    setSearchResults([]);
    setShowAll(true);
    window.scrollTo({ top: homeRef.current.offsetTop, behavior: 'smooth' });
  };

  return (
    <div id="home" ref={homeRef}>
      <Container>
        <Row>
          <Col>
            {user && <h3>Hello {user}</h3>}
            <h1>Welcome to SugaRush Bakery</h1>
            <p>A home of fresh baking</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="c1.avif" 
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="c2.avif"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="c3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <div>
          <ul>
            {searchResults.map((bakery) => (
              <Bakery 
                key={bakery.id}
                name={bakery.name}
                image={bakery.image}
                rating={bakery.rating}
                desc={bakery.desc}
                location={bakery.location}
                lat={bakery.lat}
                long={bakery.long}
              />
            ))}
          </ul>
          <button className="clear-btn" onClick={handleClear}>Clear Search</button>
        </div>
      ) : showAll ? (
        <p></p>
      ) : (
        <p></p>
      )}

    </div>
  );
}

export default Homepage;
