import React from 'react';
import './styles.scss';

const ClassBasedCondition = ({condition, otherClass}) => {
  return (
    <div className={`${condition ? 'class-true' : 'class-false'} ${otherClass || ''}`}>
        <p>Hola dentro del div</p>
    </div>
  )
}

export default ClassBasedCondition;