import React from 'react';

const SelectPreset = ({onSelectPreset}) => {
  
  const onSelect = (event) => {
    const react = event.target.value;
    
    onSelectPreset({
      mouth: react,
      eyes: react,
      base: react === 'angry' ? 'angry' : 'normal',
      showTear: react === 'sad'
    });
  }

  return (
    <select onChange={onSelect}>
      {['haha', 'wow', 'sad', 'angry'].map((react) => (
        <option key={react}>{react}</option>
      ))}
    </select>
  )
};

export default SelectPreset;