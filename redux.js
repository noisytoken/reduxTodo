class CreateStore {
  constructor(reducer) {
    this.reducer = reducer;
    this.state = undefined;
    this.listeners = [];
  }

  getState() {
    return this.listeners;
  }

  subscribe(cb) {
    this.listeners.push(cb);

    return () => {
      listeners.filter((l) => l !== cb);
    };
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((cb) => {
      cb();
    });
  }
}

// const s = new CreateStore(app);
// console.log(s.getState());
// const unsubs = s.subscribe(() => {
//   console.log("New State");
//   console.log(s.state);
// });

// s.dispatch({
//   type: "ADD_TODO",
//   todo: {
//     id: 1,
//     title: "todo 1",
//     complete: false,
//   },
// });

// s.dispatch({
//   type: "ADD_TODO",
//   todo: {
//     id: 2,
//     title: "todo 2",
//     complete: true,
//   },
// });

// s.dispatch({
//   type: "ADD_TODO",
//   todo: {
//     id: 3,
//     title: "todo 3",
//     complete: true,
//   },
// });

// // s.dispatch({
// //   type: "REMOVE_TODO",
// //   id: 1,
// // });

// s.dispatch({
//   type: "TOGGLE_TODO",
//   id: 2,
// });

// s.dispatch({
//   type: "TOGGLE_TODO",
//   id: 2,
// });

// s.dispatch({
//   type: "ADD_GOAL",
//   goal: {
//     id: 1,
//     title: "cj",
//     deadline: "101023",
//   },
// });

// s.dispatch({
//   type: "ADD_GOAL",
//   goal: {
//     id: 2,
//     title: "ba",
//     deadline: "101024",
//   },
// });

// s.dispatch({
//   type: "REMOVE_GOAL",
//   id: 2,
// });

// s.dispatch();
