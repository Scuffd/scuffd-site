import EmberRouter from '@ember/routing/router';
import config from 'scuffd-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('admin', function () {
    this.route('login');
    this.route('auth');
    this.route(
      'dashboard',
      {
        path: '/',
      },
      function () {
        this.route(
          'revision',
          {
            path: 'revisions/:branchId',
          },
          function () {}
        );
      }
    );
  });
});
