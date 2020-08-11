import { Grid, Header, Image } from 'semantic-ui-react';
import { Fragment, useState } from 'react';
import React from 'react';
import { observer } from 'mobx-react-lite';
import PhotoWidgetDropzone from './photoWidgetDropzone';

const PhotoUploadWidget = () => {
  const [files, setFiles] = useState<any[]>([]);
  return (
    <Fragment>
      <Grid>
        <Grid.Row />
        <Grid.Column widht={4}>
          <Header color="teal" sub content="Step 1 - Add Photo" />
          <PhotoWidgetDropzone setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column widht={4}>
          <Header color="teal" sub content="Step 2 - Resize Photo" />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column widht={4}>
          <Header color="teal" sub content="Step 3 - Preview & upload" />
          {files.length > 0 && <Image src={files[0].preview} />}
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default observer(PhotoUploadWidget);
