export let state;
import jsdom from 'jsdom'
global.document = jsdom.jsdom('<html><body><div id="container"></div></body></html>');


export function managePets(state={pets: []}, action){
  let type = action.type
  switch(type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter(pet => pet.id !== action.id)}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  if (state.pets[0]) {
    container.innerHTML = `<ul><li>${state.pets[0].name}</li></ul>`
  }
}
