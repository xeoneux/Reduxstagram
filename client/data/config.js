import Raven from 'raven-js';

const sentryKey = process.env.SENTRY_KEY;
const sentryApp = process.env.SENTRY_APP;
export const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
