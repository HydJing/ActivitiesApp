import React from 'react';
import { Tab, Grid} from 'semantic-ui-react';
import ProfileHeader from './ProfileHeader';
import ProfilePhotos from './ProfilePhotos';

const panes = [
    {menuItem: 'About', render: () => <Tab.Pane>About Content</Tab.Pane>},
    {menuItem: 'Photos', render: () => <ProfilePhotos />},
    {menuItem: 'Activities', render: () => <Tab.Pane>Activities Content</Tab.Pane>},
    {menuItem: 'Follower', render: () => <Tab.Pane>Follower Content</Tab.Pane>},
    {menuItem: 'Following', render: () => <Tab.Pane>Following Content</Tab.Pane>},
]

const ProfileContent = () => {
    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
            activeIndex={1}
        />
    )
}

export default ProfileContent
