import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectCell from './projectCell'
import ProjectsData from './projectsData'
import SectionTitle from '../sectionTitle'
import StackGrid from 'react-stack-grid'
import BrowserBar from './browserBar'

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  min-height: 600px;
  @media (max-width: 768px) {
    width: 400px;
  }
`;

class Projects extends Component {
  renderProjectCells = () => {
    const projectNames = ['lift', 'describe', 'givingtree']
    var projectArray = []
    for(var i = 0; i < projectNames.length; i++) {
      const project = ProjectsData[projectNames[i]]
      projectArray.push(
        <>
          <BrowserBar/>
          <ProjectCell
            project={project}
          />
        </>

      )
    }
    return projectArray
  }
  render () {
    return (
      <SectionWrapper id='projects'>
        <SectionTitle title='Projects'/>
          <StackGrid columnWidth={380} gutterHeight={30}>
            {this.renderProjectCells()}
          </StackGrid>
      </SectionWrapper>
    )
  }
}

export default Projects