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
        {titles.map((title, i) => (
          <div key={i} className={activeTab === i ? 'active' : ''}>
            {/* This is a little hacky,
              * the idea is that we show a 'button' on mobile, and a span on desktop */}
            <button type='button' onClick={() => setActiveTab(i)}>
              <span>{title}</span>
            </button>
            <span>{title}</span>
          </div>
        ))}
      </nav>
      <div className='tabs'>
        {tabContents.map((tab, i) =>
          <div key={i} className={'tab' + (activeTab === i ? ' active' : '')}>{tab}</div>
        )}
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