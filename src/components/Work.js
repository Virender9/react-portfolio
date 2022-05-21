import React from 'react';
import "./styles/WorkCard.css";
import Workcard from './WorkCard';
import WorkCardData from './WorkCardData';

const Work = () => {
    return (
        <div className='work_container'>
            <h1 className='project_heading'>Projects</h1>
            <div className='project_container'>
                {WorkCardData.map((val, ind) => {
                    return (
                        <Workcard key={ind} imgsrc={val.imgsrc}
                            title={val.title} text={val.text} view={val.view} source={val.source} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;