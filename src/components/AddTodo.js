import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        boxShadow: 'none',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 8,
    }
}));

const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        value: () => value,
        clear: () => setValue('')
    }
}

const AddTodo = ({ onCreate }) => {
    const classes = useStyles();
    const input = useInputValue('')

    const submitHandler = event => {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <Paper component="form" className={classes.root} onSubmit={submitHandler}>
            <TextField className={classes.input} id="standard-basic" label="Add Todo" {...input.bind} />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions" type='submit'>
                <AddIcon />
            </IconButton>
        </Paper>
    )
}

export default AddTodo