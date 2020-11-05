import React from 'react';
import List from '@material-ui/core/List';
import ProjectSummary from './ProjectSummary.js'


const ProjectList = () => {

    return (
        <List className="list">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </List>
    )

}

export default ProjectList;