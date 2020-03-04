import { IconTypes, IconBackgroundTypes } from '../../utils/constants';

export const SkillsListDefaultProps: object = {
    skillsList: [
        {
            title: 'HTML5',
            iconDetails: {
                name: 'html5',
                type: IconTypes.FONT_AWESOME,
                size: 24,
                backgroundSize: 40,
                color: '#fff',
                backgroundColor: '#f50',
                materialDesign: true,
                backgroundType: IconBackgroundTypes.BOX,
            },
            value: 90,
        },
        {
            title: 'CSS3',
            iconDetails: {
                name: 'css3',
                type: IconTypes.FONT_AWESOME,
                size: 24,
                backgroundSize: 40,
                color: '#fff',
                backgroundColor: '#48a9c5',
                materialDesign: true,
                backgroundType: IconBackgroundTypes.BOX,
            },
            value: 88,
        },
        {
            title: 'GIT',
            iconDetails: {
                name: 'git',
                type: IconTypes.FONT_AWESOME,
                size: 24,
                backgroundSize: 40,
                color: '#fff',
                backgroundColor: '#efdf00',
                materialDesign: true,
                backgroundType: IconBackgroundTypes.BOX,
            },
            value: 80,
        },
    ],
};
