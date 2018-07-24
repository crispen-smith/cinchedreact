import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the corsetEditor state domain
 */

const selectCorsetEditorDomain = state =>
  state.get('corsetEditor', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CorsetEditor
 */

const makeSelectCorsetEditor = () =>
  createSelector(selectCorsetEditorDomain, substate => substate.toJS());

export default makeSelectCorsetEditor;
export { selectCorsetEditorDomain };
