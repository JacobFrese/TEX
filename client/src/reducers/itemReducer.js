import {v1 as uuid} from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'Wrench' }, 
        {id: uuid(), name: 'Hammer' }, 
        {id: uuid(), name: 'Level' }, 
        {id: uuid(), name: 'Socket' }
    ]
};

export default function(state = initialState, action){
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        default:
            return state;
    }
} 