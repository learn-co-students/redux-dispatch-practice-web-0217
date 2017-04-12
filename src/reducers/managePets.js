export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      if (action.pet.name && action.pet.species && action.pet.id) {
        return {...state, pets: state.pets.concat(action.pet)}
      }
      break;
    case 'REMOVE_PET':
      if (action.id) {
        return {...state, pets: state.pets.filter( (obj) => {
          return obj.id !== action.id
        })}
      }
      break;
    default: return state

  }
}

export function dispatch(){
  state = managePets(state, action)
  render()
}

export function render(){

}
