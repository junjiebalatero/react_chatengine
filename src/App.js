import React, { useState } from 'react';

const MultiCollapseExample = () => {
  const [collapsedStates, setCollapsedStates] = useState([true, true, true]);

  const toggleCollapse = (index) => {
    const newCollapsedStates = [...collapsedStates];
    newCollapsedStates[index] = !newCollapsedStates[index];
    setCollapsedStates(newCollapsedStates);
  };

  return (
    <div>
      {collapsedStates.map((isCollapsed, index) => (
        <div key={index}>
          <button onClick={() => toggleCollapse(index)}>
            {isCollapsed ? 'Expand' : 'Collapse'} Section {index + 1}
          </button>

          {isCollapsed ? null : (
            <div>
              {/* Content to be displayed when not collapsed */}
              <p>
                This content is visible when Section {index + 1} is not
                collapsed.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiCollapseExample;
