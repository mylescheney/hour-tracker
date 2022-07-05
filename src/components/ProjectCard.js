import React from 'react';
import descriptions from '../resources/projectDescriptions';

// Images
import hourTrackerImg from '../images/hourTrackerImg.png';
import trainerPalImg from '../images/trainerPalImg.png';

const ProjectCard = ({ title, notFirst }) => {

    const classes = notFirst ? 'projectCard notFirst' : 'projectCard';
    const description = descriptions[title];
    let image;
    switch (title) {
        case 'Hour Tracker':
            image = hourTrackerImg;
            break;
        case 'Trainer Pal':
            image = trainerPalImg;
            break;
        default:
            break;
    }

    return (
        <div className={classes}>
            <div className='periImage'>
                <img src={image} alt='project image' className='cardImage' />
            </div>
            <p className='cardTitle'>{title}</p>
            <p className='cardDescription'>{description}</p>
        </div>
    )
}

export default ProjectCard;