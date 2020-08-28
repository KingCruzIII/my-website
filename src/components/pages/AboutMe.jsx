import React from "react";
import Terminal from "components/common/Terminal";
import { Paper, Grid, Typography } from "@material-ui/core";
import Icon from "components/common/Icon";

const AboutMe = props => {
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
        <Grid xs={4} item>
          <Icon icon="circle" />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AboutMe;
