export let state;


export function managePets(state, action){
  switch (action.type) {
    case '@@INIT':

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
