export let state;


export function managePets(state={ pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      let newPets = [...state.pets, action.pet]
      return {pets: newPets}
    case 'REMOVE_PET':
      let filtered = state.pets.filter((pet) => {
        return pet.id != action.id
      })
      return {pets: filtered}
    default:
      return state
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render() {
  let petNames = state.pets.map((p) => {
        return '<li>' + p.name + '</li>'
      })

    document.getElementById('container').innerHTML = '<ul>' + petNames + '</ul>'


}
