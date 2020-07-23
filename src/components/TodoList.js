import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { TodoItem } from './TodoItem'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 0,
        width: '100%',
        height: 390,
        maxWidth: 360,
        maxHeight: 390,
        overflow: 'scroll',
        backgroundColor: theme.palette.background.paper,
    },
}));

export const TodoList = ({ todos, onToggle, loading }) => {
    const classes = useStyles();
    return (
        <List className={`${classes.root} scroll`} >
            {
                todos.length
                    ? todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.id} onChange={onToggle} />
                    })
                    : loading ? null : <p>No Todos</p>
            }
        </List>
    );
}
