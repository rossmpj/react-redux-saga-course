import * as entriesSaga from './entriesSaga';
import * as entriesSagaDeletion from './entrySagaDeletion';
import * as entriesSagaAdd from './entrySagaAdd';
// import * as testSaga from './testSaga';


export function initSagas(sagaMiddleware){
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaDeletion).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSagaAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    
}
