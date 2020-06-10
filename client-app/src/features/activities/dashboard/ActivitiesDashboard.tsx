import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivitiesList from './ActivitiesList';

interface IProps {
  activities: IActivity[];
}

const ActivitiesDashboard: React.FC<IProps> = ({ activities }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        {/* <List>
                    {activities.map(activity => (
                        <List.Item key={activity.id}>{activity.title}</List.Item>
                    ))}
                </List> */}
        <ActivitiesList activities={activities} />
      </Grid.Column>
    </Grid>
  );
};

export default ActivitiesDashboard;
