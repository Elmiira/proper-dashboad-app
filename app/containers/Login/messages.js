/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Login';

export default defineMessages({
  WelcomeMessage: {
    id: `${scope}.welcome.message`,
    defaultMessage: 'Hi!',
  },
  Send: {
    id: `${scope}.send`,
    defaultMessage: 'send',
  },
  Username: {
    id: `${scope}.username`,
    defaultMessage: 'username!',
  },
  Password: {
    id: `${scope}.password`,
    defaultMessage: 'password!',
  },
});
