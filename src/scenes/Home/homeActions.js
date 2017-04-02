export const HOME_SCENE_MODAL_OPEN = 'HOME_SCENE_MODAL_OPEN';
export const HOME_SCENE_MODAL_CLOSE = 'HOME_SCENE_MODAL_CLOSE';

export const openHomeModal = () => ({
  type: HOME_SCENE_MODAL_OPEN,
});

export const closeHomeModal = () => ({
  type: HOME_SCENE_MODAL_CLOSE,
});