import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntry)
}

//  Una f* no puede ser asíncrona: redux-saga doesn't support async generators
function* addEntry({ payload }) {
  yield call(addEntries, payload);
  yield call(addEntryDetails, payload);
  yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload });
}

async function addEntries({ id, description }) {
  await axios.post('http://localhost:3001/entries', {
    id,
    description,
  });
}

async function addEntryDetails({ id, isExpense, value }) {
  await axios.post('http://localhost:3001/values', {
    id,
    isExpense,
    value,
  });
}