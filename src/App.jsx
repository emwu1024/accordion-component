import React from 'react';
import Accordion from './Accordion';
import { accordionContent } from './utils/content';

const App = () => {
  return (
    <div>
      <h1>Everything Everywhere</h1>
      <h1>All At Once Info</h1>
      {/* Container for the accordion component, accordion content is passed into component as title and content props */}
      <div className="accordion">
        {accordionContent.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;

