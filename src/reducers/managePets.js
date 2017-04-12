export let state

export function managePets(state={pets: []}, action){
	switch(action.type) {
		case "ADD_PET":
			return {...state, pets: [...state.pets, action.pet]}
		case "REMOVE_PET":
			let newPetArray = state.pets.filter((obj) => obj.id !== action.id)
			return {...state, pets: newPetArray}
		default:
			return state
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	let petReturn = state.pets.reduce((acc, currElement) => {
		return acc + `<li>${currElement.name}</li>`
	}, '')
	document.getElementById('container').innerHTML = `<ul>${petReturn}</ul>`

}
