import { createReducer } from 'utils';
import jobs from 'mocks/jobs.yaml';
import Immutable from 'immutable';

const initialState = Immutable.fromJS(jobs);

export default createReducer(initialState, {
});
