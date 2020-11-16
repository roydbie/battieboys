export const createExercise = (exercise) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('exercises').add({
            ...exercise, 
            authorFirstName: 'Roy',
            authorLastName: 'de Bie',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_EXERCISE', exercise});
        }).catch((err) => {
            dispatch({type: 'CREATE_EXERCISE_ERROR', err})
        })
        
    }
}