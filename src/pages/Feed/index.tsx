import { makeStyles } from '@material-ui/core/styles';
import SearchTicket from '../Ticket/SearchTicket';
import ResultTickets from '../Ticket/ResultTickets';

const useStyles = makeStyles({
  root: {
    width: '75%',
    marginLeft: 10,
    '@media(max-width: 700px)': {
      width: '100%',
      marginLeft: 0,
      marginBottom: 10
    }
  }
});

function Feed() {
  const classes = useStyles();

  const renderFeed = () => (
    <div className={classes.root}>
      <div>
        <SearchTicket />
        <ResultTickets />
      </div>
    </div>
  );

  return (
    <>
      {renderFeed()}
    </>
  );
}

export default Feed;