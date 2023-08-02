import React from 'react';
import {MdArrowBackIos,MdArrowForwardIos} from 'react-icons/md'
import './HomeCarousel.css'


class HomeCarousel extends React.Component {
  state = {
    currentIndex: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.goToNextSlide();
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  goToNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  goToPreviousSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.props.images.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const {images} = this.props
    const { currentIndex } = this.state;

    return (
      <div className="homecarousel">
        <button className="homecarousel__prev" onClick={this.goToPreviousSlide}>
          <MdArrowBackIos />
        </button>
        <img className="homecarousel__image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="homecarousel__next" onClick={this.goToNextSlide}>
        <MdArrowForwardIos />
        </button>
      </div>
    );
  }
}

export default HomeCarousel;