import React from 'react';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';
import { withMoviesDbService } from '../hoc';
import { compose } from '../../utils';
import { bindActionCreators } from 'redux';
import { Toolbar, Typography, IconButton, AppBar, makeStyles, fade, InputBase, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'

import './header.scss';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.secondary.main
    },
    title: {
      flexGrow: 1,
    },
    titleLink: {
        color: theme.palette.common.white,
        textDecoration: 'none'
    },
    menuButton: {
        color: theme.palette.common.white,
    },
    header: {
        boxShadow: 'none'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 20,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
}));

const Header = (props) => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const inputChange = (e) => {
        let query = e.target.value;

        
        if (e.key === "Enter" && query.length >= 3) {
            props.fetchMovies(query);
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary" className={classes.header}>
                <Toolbar>
                    
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.titleLink}>
                            React Movies DB
                        </Link>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onKeyPress={inputChange}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    {auth && (
                        <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
};

const mapStateToProps = ({  moviesList: { movies = []  } }) => {
    return { movies }
};

const mapDispatchToProps = (dispatch, { moviesDbService }) => {
    return bindActionCreators({
        fetchMovies: fetchMovies(moviesDbService)
    }, dispatch)
};

export default compose(
    withMoviesDbService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
