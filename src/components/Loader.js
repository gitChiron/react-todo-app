import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 406,
    }
}));

const Loader = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Loader