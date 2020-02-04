import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playButton from '../assets/static/play-icon.png';
import plusButton from '../assets/static/plus-icon.png';
import deleteButton from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props;
  //funcion que maneja el guardado a favoritos
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img src={playButton} alt='Reproducir' />
          <img
            src={plusButton}
            alt='Mas'
            onClick={handleSetFavorite}
          />
          <img
            src={deleteButton}
            alt='Eliminar favorito'
            onClick={() => handleDeleteFavorite(id)}
          />
        </div>
        <p className='carousel-item__details--modificador'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}min`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDispatchToProps)(CarouselItem);
