import React from 'react';
import './Skills.css';
import skills from './data';

const Skills = () => {
  const skillButtons = skills.map((everySkill) => (
    everySkill.level === 'advanced' ? (
      <button className='skill' key={everySkill.skill} style={{ backgroundColor: everySkill.color }}> {everySkill.skill} </button>
    ) : null
  ));

  return (
    <div>
      {skillButtons}
    </div>
  );
}

export default Skills;
