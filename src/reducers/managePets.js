export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      let addedPet = {pets: [...state.pets, action.pet]}
      return addedPet
    case "REMOVE_PET":
      let removedPet = {pets: state.pets.filter(pet => pet.id !== action.id)}
      return removedPet
    default:
      return state
  }
  if(action.type === "ADD_PET"){

  }else if(action.ty)
  return state
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petsLi = []
  state.pets.map((pet) => {
    petsLi.push(`<ul><li>${pet.name}</li></ul>`)
  })
  document.getElementById('container').innerHTML = petsLi
}
