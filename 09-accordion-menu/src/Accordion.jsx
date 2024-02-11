import { useState } from 'react';
import AccordionItem from './AccordionItem';
import faqs from './data';
const Accordion = () => {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  return (
    <div className='accordion'>
      {faqs.map((e, i) => (
        <AccordionItem
          onOpen={setCurrentlyOpen}
          currentlyOpen={currentlyOpen}
          key={e.title}
          text={e.text}
          title={e.title}
          num={i}
        />
      ))}
    </div>
  );
};

export default Accordion;
