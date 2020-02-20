/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Layout';

export default defineMessages({
  Tenant: {
    id: `${scope}.tenant`,
    defaultMessage: 'Tenant',
  },
  Logout: {
    id: `${scope}.logout`,
    defaultMessage: 'log out',
  },
});
