import React, { useState } from 'react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'REACT', level: 85 },
        { name: 'VUE', level: 80 },
        { name: 'ANGULAR', level: 80 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'NODE.JS', level: 85 },
        { name: 'EXPRESS.JS', level: 83 },
        { name: 'NEXT.JS', level: 82 },
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'HTML', level: 98 },
        { name: 'CSS', level: 95 },
        { name: 'JAVASCRIPT', level: 90 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'MONGODB', level: 82 },
        { name: 'NoSQL', level: 90 },
      ]
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="text-center">
          <div className="container_title">
            <div className="Title">
              <h1 className="Title_h1">
                SKILLS
                <div className="Title__highlight"></div>
              </h1>
              <div className="Title__underline"></div>
              <div aria-hidden className="Title__filled">SKILLS</div>
            </div>
          </div>
          <div className="height_divider_1"></div>
        </div>

        <div className="container">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 style={{textAlign: 'center', marginTop: '30px', marginBottom: '20px'}}>
                {category.title}
              </h3>
              <div className="row skillsets">
                {category.skills.map((skill, i) => (
                  <div key={i} className="col-sm-4">
                    <div className="range" style={{'--p': skill.level}}>
                      <div className="range__label">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
