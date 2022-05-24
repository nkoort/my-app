import profileReducer, { addPostAtionCreator } from "./profile-reducer";




test('new post good!', () => {
  let action = addPostAtionCreator('my firsl test')
  let initialState = {
    posts: [
      {
        id: 1,
        post: "Hi, how are you?",
        likes: 28,
      },
      {
        id: 2,
        post: "It*s my first post",
        likes: 82,
      },
      {
        id: 3,
        post: "It*s my second post in map element",
        likes: 123,
      },
      {
        id: 4,
        post: "My first post on index.js, good work!!!",
        likes: 2323,
      },
      {
        id: 5,
        post: "My second post on index.js, good work!!!",
        likes: 1543,
      },
      {
        id: 6,
        post: "My first post in state.js!!!!!!!",
        likes: 92,
      },
    ],
    profile: null,
    status: null,
  };
  let newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(7);
  expect(newState.posts[6].post).toBe('my firsl test');
});