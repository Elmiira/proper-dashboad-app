/**
 * Asynchronously loads the component for Login
 */

import React from 'react';

import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator/index';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator show />,
});
