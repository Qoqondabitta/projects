function reducer(students, action){
    switch(action.type){
        case "delete": return students.filter( (s) => s.id !== action.id);
        default: return;
    }
}

export default reducer