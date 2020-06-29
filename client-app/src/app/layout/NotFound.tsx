import React from 'react';
import { Segment, Icon, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Segment>
      <Header icon>
        <Icon name="search" />
        Opps - we cannot found the page
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/activities" primary>
          return to activities page
        </Button>
      </Segment.Inline>
    </Segment>
  );
};

export default NotFound;
