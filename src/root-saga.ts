import { sampleWatcher } from './containers/Users/saga';

export default function* rootSaga() {
  yield [
    sampleWatcher()
  ];
}
