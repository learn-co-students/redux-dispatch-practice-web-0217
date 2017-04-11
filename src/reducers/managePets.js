export let state;
import jsdom from 'jsdom'

export function managePets(state={pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      return {pets: state.pets.filter((o)=>{return o.id !== action.id})}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  global.document=jsdom.jsdom('<html><body><div id="container"></div></body></html>')
  let container=document.getElementById('container')
  if (state.pets[0]){
    container.innerHTML = `<ul><li>${state.pets[0].name}</li></ul>`
  }
}
