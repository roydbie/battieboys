export const createExercise = (exercise) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('exercises').add({
            ...exercise, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_EXERCISE', exercise});
        }).catch((err) => {
            dispatch({type: 'CREATE_EXERCISE_ERROR', err})
        })
        
    }
}