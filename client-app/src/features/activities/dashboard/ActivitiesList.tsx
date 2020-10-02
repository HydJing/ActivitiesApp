import React, { useContext, Fragment } from 'react';
import { Item, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivitiesListItem from './ActivitiesListItem';
import { RootStoreContext } from '../../../app/stores/rootStore';
import { format } from 'date-fns';

const ActivitiesList: React.FC = ({}) => {
  const rootStore = useContext(RootStoreContext);
  const { activitiesByDate } = rootStore.activityStore;

  return (
    <Fragment>
      {activitiesByDate.map(([group, activities]) => (
        <Fragment key={group}>
          <Label size="large" color="blue">
            {format(new Date(group), 'eeee do MMMM')}
          </Label>
            <Item.Group divided>
              {activities.map((activity) => (
                <ActivitiesListItem key={activity.id} activity={activity} />
              ))}
            </Item.Group>
        </Fragment>
      ))}
    </Fragment>
  );
};
export default observer(ActivitiesList);
