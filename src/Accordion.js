import React from 'react';

const Accordion = ({ questions }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderQuestion = questions.map((item, index) => {
    const active = index === activeIndex ? '' : 'show';
    
    return (
      <article key={item.id} className='question'>
        <div
          className={`title `}
          onClick={() => onTitleClick(index)}
        >
          <h3>{item.title}</h3>
        </div>
        <div className={`content ${active} `}>
          <p>{item.info}</p>
        </div>
      </article>
    );
  });

  return <article>{renderQuestion}</article>;
};

export default Accordion;
