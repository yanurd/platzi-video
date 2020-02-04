import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState';

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Search />
      {mylist.length > 0 &&
        (
          <Categories title='Mis videos'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )}
      <Categories title='Tendencias'>
        <Carousel>
          {
            trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {
            originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

//export default Home;
export default connect(mapStateToProps, null)(Home);
