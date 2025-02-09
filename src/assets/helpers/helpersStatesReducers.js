export const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@gmail.com'},
    {id: 1, name: 'Alice', email: 'Alice@gmail.com'},
    {id: 2, name: 'Bob', email: 'Bob@gmail.com'},
];

export const initialState = {
    selectedId: 0,
    messages: {
        0: 'Hola, Taylor',
        1: 'Hola, Alice',
        2: 'Hola, Bob',
    }
};


export const messengerReducer = (state, action) => {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.id
            }
        }

        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message
                }
            }
        }

        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: ''
                }
            }
        }
    
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
}


export let nextId = 3;
export const initialTasks = [
  {id: 0, text: 'Visitar el Museo Kafka', done: true, edit: false},
  {id: 1, text: 'Ver espectáculo de títeres', done: false, edit: false},
  {id: 2, text: 'Foto del muro de Lennon', done: false, edit: false},
];


export const messengerReducerTasks = (stateTask, action) => {
switch (action.type) {
    case 'add_task': {
        if( action.text !== '' ) {
            return [
                ...stateTask,
                {
                    id: nextId++,
                    text: action.text,
                    done: false,
                    edit: false
                }
            ]
        } else {
            return [
                ...stateTask
            ]
        }
    }

    case 'delete_task': {
        return stateTask.filter((task) => task.id !== action.id)
    }

    case 'edit_task': {
        return stateTask.map((task) => {
            if( task.id === action.task.id ) {
                return {
                    ...task,
                    edit: !action.edit
                }
            } else {
                return task
            }
        })
    }

    case 'edit_text_task': {
        return stateTask.map((task) => {
            if( task.id === action.edit ) {
                return {
                    ...task,
                    text: action.text
                }
            } else {
                return task
            }
        })
    }

    case 'edit_done': {
        return stateTask.map((task) => {
            if( task.id === action.task.id ) {
                return {
                    ...task,
                    done: !action.done,
                }
            } else {
                return task
            }
        })
    }

    default:
        break;
}
}