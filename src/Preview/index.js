import React from 'react';
import PropTypes from 'prop-types';
import parts from '../parts';
import './styles.scss';

const Preview = ({part, value, base}) => {
  
  const getImageSrc = () => {
    if (part === 'base' || (part === 'tear' && !value)) {
      return null;
    }
    if (part === 'eyes' && ['sad', 'angry'].includes(value)) {
      return parts.eyes[value]['low']
    }
    if (part === 'tear') {
      return parts.tear.low;
    }
    return parts[part][value];
  }

  const imageSrc = getImageSrc();
  const baseVal = part === 'base' ? value : base;

  return (
    <div className='preview'>
      <img src={parts.base[baseVal]} alt=''></img>
      {imageSrc && <img src={imageSrc} alt=''></img>}
    </div>
  )
};

Preview.propTypes = {
  part: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  base: PropTypes.string.isRequired
}

export default Preview;