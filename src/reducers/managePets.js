import  jsdom from 'jsdom';

export let state;


export function managePets(state={pets: []}, action){

	switch (action.type) {
 
      case 'ADD_PET':
        return { pets: [...state.pets, action.pet] }
 	  case 'REMOVE_PET':
 	  	return { pets: state.pets.filter( p => p.id != action.id )}
      default:
        return state;
    }
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	global.document = jsdom.jsdom('<html><body><div id="container"></div></body></html>');
	let thing1 = document.getElementById('container');
	thing1.innerHTML = '<ul><li>' + state.pets.map( thing => thing.name) + '</li></ul>'
}

// dispatch({type: "@@INIT"})