import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import ActivitiesList from './ActivitiesList';

import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';

const ActivitiesDashboard: React.FC = ({}) => {
  const activityStore = useContext(ActivityStore);

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivitiesList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivitiesDashboard);
