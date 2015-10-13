import { combineReducers } from 'redux';
import counter from './counter';
import jobs from './jobs';

export default combineReducers({
  counter,
  jobs
});
