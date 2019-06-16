import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TabbedContent = ({tabs}) => {

  const [activeTab, setActiveTab] = useState(0);

  const titles = [];
  const tabContents = [];

  tabs.forEach(({title, content}) => {
    titles.push(title);
    tabContents.push(content);
  });

  return (
    <div>
      <nav className='tabTitles'>
        {titles.map((t, i) => (
          <div key={i} className={activeTab === i ? 'active' : ''}>
            <button type='button' onClick={() => setActiveTab(i)}>
              <span>{t}</span>
            </button>
            <span>{t}</span>
          </div>
        ))}
      </nav>
      <div className='tabs'>
        {tabContents.map((t, i) => <div key={i} className={'tab' + (activeTab === i ? ' active' : '')}>{t}</div>)}
      </div>
    </div>
  )
}

TabbedContent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    })
  ).isRequired
}

export default TabbedContent;