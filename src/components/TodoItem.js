import React, { useContext } from 'react'
import Context from '../context'
import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import { HighlightOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    listItemIcon: {
        minWidth: 36
    }
}))

export const TodoItem = ({ todo, onChange }) => {
    const classes = useStyles()
    const { removeTodo } = useContext(Context)
    const labelId = `checkbox-list-label-${todo.id}`
    const lineThrough = []

    if (todo.completed) {
        lineThrough.push('done')
    }

    return (
        <ListItem role={undefined} dense button onClick={() => onChange(todo.id)} >
            <ListItemIcon className={classes.listItemIcon}>
                <Checkbox
                    color="primary"
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText className={lineThrough.join(' ')} id={labelId} primary={todo.title} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments" onClick={removeTodo.bind(null, todo.id)} >
                    <HighlightOff />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem >
    )
}
