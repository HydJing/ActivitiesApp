import React, { Fragment } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Calendar } from 'react-widgets';

const ActivityFilters = () => (
  <Fragment>
    <Menu vertical size={'large'} style={{ width: '100%', margtinTop: 50 }}>
      <Header icon={'filter'} attached color={'teal'} content={'Filters'} />
      <Menu.Item color={'blue'} name={'all'} content={'All Activities'} />
      <Menu.Item color={'blue'} name={'username'} content={'iam going'} />
      <Menu.Item color={'blue'} name={'host'} content={'im hosting'} />
      <Header
        icon={'calendar'}
        attached
        color={'teal'}
        content={'select date'}
      />
      <Calendar />
    </Menu>
  </Fragment>
);

export default ActivityFilters;
