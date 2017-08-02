export let state;


export function managePets(state={pets:[]},action){
  switch(action.type){
    case "ADD_PET":
      return {pets:[...state.pets, action.pet]}
    case "REMOVE_PET":
      return {pets: state.pets.filter((l) => l.id !== action.id)}
    default:
    return state

  }

}

export function dispatch(action){
  state  = managePets(state, action)
  render()
}
//mine
// export function render(){
//   if(state.pets[0]){
//     document.getElementById("container").innerHTML=(`<ul><li>${state.pets[0].name}</li></ul>`)
//   }

//not mine
export function render(){
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  })
  document.getElementById("container").innerHTML = `<ul>${petsList}</ul>`;
}
