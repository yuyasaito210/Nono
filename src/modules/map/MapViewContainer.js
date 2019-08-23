import { compose, withState } from 'recompose';

import MapScreen from './MapView';

export default compose(withState(region, places))(
    MapScreen,
);
