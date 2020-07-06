import * as types from './types';

export function setForm(formData){
    return { type: types.setForm, payload: formData };
}

export function toggleOptions(){
    return { type: types.toggleOptions };
}