const elBox = document.querySelector('#box');

/*
// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  switch (
    state
    // Add your state/event transitions here
    // to determine and return the next state
  ) {
    case 'inactive':
      switch (event) {
        case 'CLICK':
          return 'active';
          default: state;
      }
    case 'active':
      switch (event) {
        case 'CLICK':
          return 'inactive';
        default: state;
      }
    default:
      return state;
  }
}
*/

const machine = {
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        'CLICK': 'active'
      }
    },
    active: {
      on: {
        'CLICK': 'inactive'
      }
    }
  }
};

function transition(state, event) {
  return machine.states[state]?.on[event] || state;
};

// Keep track of your current state
let currentState = machine.initial;

function send(event) {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event);
  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  send('CLICK');
});

send('LOAD');