import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from '@material-ui/icons/Home';

const Navbar = () => {  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
 
 
  const classes = useStyles();
  return (
    <nav className="navbar">
      <h1>The Swap</h1>
      <div className="links">
        <Link color="inherit" to="/"  className={classes.link}>
          <HomeIcon className={classes.icon} /> Home</Link>
        <Link to="/create">
        <Fab size="small"  color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab> 
        </Link> 
      </div>
    </nav>
  );
}
 
export default Navbar;