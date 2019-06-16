import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-konva';

// Component rather than function as there is an issue with useEffect & react-konva
// https://github.com/konvajs/react-konva/issues/365
class CanvasImage extends Component {
  state = {
    img: null
  }

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(props) {
    if (props.src !== this.props.src) {
      this.loadImage();
    }
  }

  componentWillUnmount() {
    this.imgEl.removeEventListener('load', this.onImgLoad);
  }

  loadImage = () => {
    this.imgEl = new window.Image();
    this.imgEl.src = this.props.src;
    this.imgEl.addEventListener('load', this.onImgLoad);
  }

  onImgLoad = () => {
    this.setState({img: this.imgEl});
  }

  render() {
    return (
      <Image image={this.state.img} height={100} width={100}/>
    );
  }
}

CanvasImage.propTypes = {
  src: PropTypes.string.isRequired
}

export default CanvasImage;
