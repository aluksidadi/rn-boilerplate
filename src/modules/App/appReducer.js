const initialState = {
  // scene: 'login',
  // drawerAction: '',
};

export default function app(state = initialState, action) {
  switch (action.type) {
    // case CHANGE_SCENE:
    //   const { scene } = action;
    //   return {
    //     ...state,
    //     scene,
    //   };
    // case DRAWER_CHANGE:
    //   const { drawerAction } = action;
    //   return {
    //     ...state,
    //     drawerAction,
    //   };
    default:
      // nothing to do
      return state;
  }
}
