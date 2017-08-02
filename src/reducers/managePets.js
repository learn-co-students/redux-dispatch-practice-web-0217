export let state;


export function managePets(state = {pets: []}, {type, pet, id}){
  switch(type){

      case "ADD_PET":
      let addPet = {pets: [...state.pets, pet]}
      return addPet

      case "REMOVE_PET":
      let removePet = {pets: state.pets.filter((pet) => id !== pet.id)}
      return removePet

      default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render ()
}

export function render(){
  let container = document.getElementById('container')
  state.pets.map((pet)=>{
    container.innerHTML = `<ul><li>${pet.name}</li></ul>`
  })
}
