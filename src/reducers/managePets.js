export let state;

export const managePets = (state = {
  pets: [],
}, action) => {
  switch(action.type) {
    case "ADD_PET":
      return {
        ...state,
        pets: [
          ...state.pets,
          action.pet
        ]
      };
    case "REMOVE_PET":
      const petIndex = state.pets.findIndex(pet => pet.id === action.id);
      return {
        ...state,
        pets: [
          ...state.pets.slice(0, petIndex),
          ...state.pets.slice(petIndex + 1)
        ]
      };
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let petsOnPage = state.pets.map((pet) => {
    return `<ul><li>${pet.name}</li></ul>`
  })
  container.innerHTML = petsOnPage
}
