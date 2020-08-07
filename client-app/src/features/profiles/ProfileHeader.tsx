import React from 'react';
import { Segment, Grid, Item, Header, Statistic, Divider, Reveal, Button } from 'semantic-ui-react';

const ProfileHeader = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image avatar size="small" src={'/asset/user.png'} />
            </Item>
            <Item.Content>
                <Header as='h1'>DIsplayName</Header>
            </Item.Content>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4}>
          <Statistic.Group widths={2}>
            <Statistic label='Followers' value='5' />
            <Statistic label='Following' value='42' />
          </Statistic.Group>
          <Divider />
          <Reveal animate='move'>
            <Reveal.Content visible style={{ width: '100%' }}>
                <Button fluid color='teal' content='Following' />
            </Reveal.Content>
            <Reveal.Content hidden>
                <Button fluid basic color={true ? 'red' : 'green'} content={true ? 'Unfollow' : 'Follow'} />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default ProfileHeader;
