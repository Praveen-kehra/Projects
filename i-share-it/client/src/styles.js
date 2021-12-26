import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    margin: '0px 0 30px 0',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    cursor: "pointer",
  },
  image: {
    margin: '4px 10px',
    backgroundColor: "gray",
    borderRadius: "10px",
    cursor: "pointer",
  },
}));