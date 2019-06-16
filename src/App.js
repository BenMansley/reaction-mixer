import React, {useState, useRef, useEffect} from 'react';
import {Stage, Layer} from 'react-konva';
import parts from './parts';
import TabbedContent from './TabbedContent';
import CanvasImage from './CanvasImage';
import './App.scss';
import Preview from './Preview';
import SelectPreset from './SelectPreset';

const App = () => {

  const [state, setState] = useState({
    base: 'normal',
    eyes: 'haha',
    mouth: 'haha',
    showTear: false
  });

  const [dataURL, setDataURL] = useState('');
  const [downloadId, setDownloadId] = useState('');

  const stage = useRef();

  const setPart = (part, value) => {
    setState((prev) => ({...prev, [part]: value}));
  }

  useEffect(() => {
    setDataURL(stage.current.getStage().toDataURL());
    // Save the encoded state in case we have some kind of loading functionality later...
    setDownloadId(btoa(JSON.stringify(state)));
  }, [state])

  const {base, mouth, eyes, showTear} = state;

  const tabs = ['base', 'eyes', 'mouth'].map((part) => ({
    title: part,
    content: (
      <div className='select-btns'>
        {Object.keys(parts[part]).map((value) => (
          <button
            type='button'
            key={part + value}
            className={'select-btn' + (state[part] === value ? ' selected' : '')}
            onClick={() => setPart(part, value)}
          >
            <Preview part={part} value={value} base={base}/>
            <span>{value}</span>
          </button>
        ))}
      </div>
    )
  }));

  tabs.push({
    title: 'tear',
    content: (
      <div className='select-btns'>
        {[true, false].map((value) => (
          <button
            type='button'
            key={'tear' + value}
            className={'select-btn' + (state.showTear === value ? ' selected' : '')}
            onClick={() => setPart('showTear', value)}
          >
            <Preview part='tear' value={value} base={base}/>
            <span>{value ? 'Yes' : 'No'}</span>
          </button>
        ))}
      </div>
    )
  });

  const eyePos = ['angry', 'sad'].includes(mouth) ? 'low' : 'high';
  const tearPos = (eyePos === 'high' || ['haha', 'wow'].includes(eyes)) ? 'high' : 'low';
  const eyeImg = ['angry', 'sad'].includes(eyes) ? parts.eyes[eyes][eyePos] : parts.eyes[eyes];

  return (
    <div className='content'>
      <header>
        <h1>FB Reaction Mixer</h1>
        <p>Here you can make your own ridiculous reactions, based on the original 2D Facebook reactions.</p>
        <p>Use the controls below to get started, or pick a preset:&nbsp;
          <SelectPreset onSelectPreset={(preset) => setState(preset)}/></p>
      </header>
      <TabbedContent tabs={tabs}/>
      <a className='download' download={`reaction-${downloadId}`} href={dataURL}>Save as .PNG</a>
      <div className='reaction-wrapper'>
        <Stage width={100} height={100} ref={stage}>
          <Layer>
            <CanvasImage src={parts.base[base]}/>
            <CanvasImage src={eyeImg}/>
            <CanvasImage src={parts.mouth[mouth]}/>
            {showTear && <CanvasImage src={parts.tear[tearPos]}/>}
          </Layer>
        </Stage>
      </div>
      <p className='credits'>Created with <span role='img' aria-label='heart'>❤️</span> by Ben Kolya Mansley.&nbsp;
        <a href='https://github.com/BenMansley/reaction-mixer'>Source</a></p>
    </div>
  );
}

export default App;
