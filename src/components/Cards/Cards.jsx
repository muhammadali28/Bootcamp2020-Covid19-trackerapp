import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards=({ data: {confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed){
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">Number of active cases of Covid19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">{recovered.value}</Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">Number of recoveries from Covid19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">{deaths.value}</Typography>
            <Typography color="textSecondary">{lastUpdate}</Typography>
            <Typography variant="body2">Number of deats from Covid19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );

}

export default Cards;