import React from 'react';
import { GridList, GridListTile, GridListTileBar, makeStyles, IconButton, ListSubheader, Grid, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import image from '../../assets/jay_and_silent_bob_reboot_canadian_movie_poster.jpg';

const useStyles = makeStyles(theme => ({
    grid: {
        backgroundColor: theme.palette.secondary.main
    },
    box: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        margin: '0 !important',
        width: '100%',
        height: 'auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const tileData = [
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
{
    img: image,
    title: 'Jay and Silet Bob',
    author: 'Kevin Smith',
},
];

const ItemsList = () => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <GridList cellHeight={180} className={classes.gridList} cols={4} spacing={10} >
                {tileData.map(tile => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                        </IconButton>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
        </Box>
    )
}

export default ItemsList;