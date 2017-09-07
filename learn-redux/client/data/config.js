import Raven from 'raven-js';

const sentry_key = '9642545a289e46e1ac3a7724eeea321b';
const sentry_app = '214227';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
