/*
 * action types
 */

export const ADD_DEFECT = 'ADD_DEFECT';
export const START_EDIT_DEFECT = 'START_EDIT_DEFECT';
export const CANCEL_EDIT_DEFECT = 'CANCEL_EDIT_DEFECT';
export const DELETE_DEFECT = 'DELETE_DEFECT';
export const APPLY_FILTERS = 'APPLY_FILTERS';
export const RESET_FILTERS = 'RESET_FILTERS';

export function addDefect(defect) {
  return { type: ADD_DEFECT, defect };
}

export function editDefect(index) {
  return { type: START_EDIT_DEFECT, index };
}

export function cancelEditDefect() {
  return { type: CANCEL_EDIT_DEFECT };
}

export function deleteDefect(index) {
  return { type: DELETE_DEFECT, index };
}

export function applyFilters(index) {
  return { type: APPLY_FILTERS, index };
}

export function resetFilters(index) {
  return { type: RESET_FILTERS, index };
}