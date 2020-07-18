import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import ActivitiesList from './ActivitiesList';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { RootStoreContext } from '../../../app/stores/rootStore';

const ActivitiesDashboard: React.FC = ({}) => {

  const rootStore = useContext(RootStoreContext);
  const {loadActivities, loadingInitial} = rootStore.activityStore;

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);


  if (loadingInitial) {
    return <LoadingComponent content="Laoding Content..." />;
  }
  
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
