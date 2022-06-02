import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'

export function* updateEntrySaga() {
  yield takeLatest(entriesTypes.UPDATE_ENTRY, updateEntry)
}

//  Una f* no puede ser asíncrona: redux-saga doesn't support async generators
function* updateEntry({ payload }) {
  yield call(updateEntries, payload);
  yield call(updateEntryDetails, payload);
  yield put({ type: entriesTypes.UPDATE_ENTRY_RESULT, payload });
}

async function updateEntries({ id, entryDetails }) {
  await axios.put(`http://localhost:3001/entries/${id}`, {
    description: entryDetails.description,
  });
}

async function updateEntryDetails({ id, entryDetails }) {
  await axios.put(`http://localhost:3001/values/${id}`, {
    isExpense: entryDetails.isExpense,
    value: entryDetails.value,
  });
}