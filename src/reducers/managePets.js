export let state;

export function managePets(state={pets: []}, action) {
  switch (action.type) {
    case "REMOVE_PET":
      return { pets: state.pets.filter((p) => p.id !== action.id) }
    case "ADD_PET":
      return { pets: state.pets.concat(action.pet) }
    default:
      return state
  }
}

export function dispatch(action) {
  state = managePets(state, action)
  render()
}

export function render() {
  let htmlPetNames = state.pets.reduce((acc, p) => {
    return `<li>${p.name}</li>`
  }, '')
  document.getElementById('container').innerHTML = `<ul>${htmlPetNames}</ul>`
}

// dispatch({type: '@@INIT'})
