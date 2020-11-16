const initState = {
    exercises: [
        {id: '1', title: 'Incline dumbell press', content: '8x 22kg - 10x 26kg - 8x 30kg'},
        {id: '2', title: 'Central grip bench press', content: '8x 14kg - 8x 16kg - 8x 18kg'},
        {id: '3', title: 'Bench press', content: '8x 40kg - 8x 60kg - 8x 70kg'}
    ]
}

const exerciseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EXERCISE':
            console.log('created exercise', action.exercise);
            return state;
        case 'CREATE_EXERCISE_ERROR':
            console.log('create exercise error', action.err);
            return state;
        default:
            return state;
    }
}

export default exerciseReducer;