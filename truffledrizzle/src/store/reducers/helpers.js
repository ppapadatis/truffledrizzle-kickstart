export const updateState = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});
