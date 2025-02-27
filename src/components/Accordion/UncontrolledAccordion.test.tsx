import {reducer, StateType, TOGGLE_COLLAPSED} from "./UncontrolledAccordion";

test('reducer should change value to opposite',()=>{
    //data
    const state:StateType={
        collapsed: false,
    }

    //action
   const newState= reducer(state, {type: TOGGLE_COLLAPSED})

    //expictation
    expect(newState.collapsed).toBe(true);
})

test('reducer should throw error',()=>{
    //data
    const state:StateType={
        collapsed: true,
    }

    //action

    //expictation
    expect(()=>{
        reducer(state, {type: 'FAKE'})
    }).toThrowError()
})
