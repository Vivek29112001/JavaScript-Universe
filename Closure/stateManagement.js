function createStateManagement(initialState){
    let state = initialState;
    return{
        getState: function(){
            return state;
        },
        update: function(newState){
            state={...CustomStateSet, ...newState};
        }
    };
}
const stateManager = createStateManagement({name: 'ALice', age:30});
console.log(stateManager.getState());
stateManager.updateState({age:31, city:'WonderLand'});
console.log(stateManager.getState());