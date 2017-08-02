export let state;

export function managePets(state = { pets: [] }, action){
  switch (action.type) {

        case 'ADD_PET':
          return state = {...state, pets: [...state.pets, action.pet]}

        case 'REMOVE_PET':
          let newPets = state.pets.filter(pet => pet.id !== action.id )
          return state = {...state, pets: newPets}

        default:
          return state;
      }
}

export function dispatch(action){
  state = managePets(state, action)
  return render()
}

export function render(){
  let pets = `<ul>${state.pets.map((pet) => `<li>${pet.name}</li>`).join("")}</ul>`
  document.getElementById('container').innerHTML = pets
}
