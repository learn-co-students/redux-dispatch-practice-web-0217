export let state;

export function managePets(state={pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      let newPets = [...state.pets, action.pet]
      return {pets: newPets}
    case 'REMOVE_PET':
      let petId = action.id
      let filteredPetList = state.pets.filter((pet) => {
        return pet.id !== petId
      })
      return {pets: filteredPetList}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render() {
  let petNames = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`
  })
  document.getElementById("container").innerHTML = "<ul>" + petNames + "</ul>"
}
