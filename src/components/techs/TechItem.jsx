import React from 'react';

const TechItem = ({ tech }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstname} {tech.lastname}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
