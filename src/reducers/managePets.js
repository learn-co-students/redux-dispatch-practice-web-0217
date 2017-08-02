export let state;


export function managePets(state = {pets: []}, {type, id, pet}){
  switch (type) {
      case "ADD_PET":
        return {pets: [...state.pets, pet]}
      case "REMOVE_PET":
        return {pets: state.pets.filter((l) => l.id !== id)}
      default:
        return state
    }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
