import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

export default function QuestionCard({ question, date, answerProgress}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>

      {answerProgress ? <LinearProgress variant="determinate" value={answerProgress} /> : <div />}
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body1" component="body1">
          {question}
        </Typography>
      </CardContent>
    </Card>
  );
}
