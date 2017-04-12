export let state;

export function managePets(state ={pets: []},action){
  switch (action.type) {

    case "ADD_PET":
    return { pets: [...state.pets,action.pet] }

    case "REMOVE_PET":

    return { pets:  state.pets.filter (
                     function(pets) {
                        return !(pets.id === action.id)  }
                      )
    }

    default:
      return state ;
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}
// export const render = () => {
//   let container = document.getElementById('container');
//   let petsList = state.pets.map((pet) => {
//     return `<li>${pet.name}</li>`;
//   }).join(' ');
//   container.innerHTML = `<ul>${petsList}</ul>`;
// }
export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
      return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}


// dispatch({type: '@@INIT'})
