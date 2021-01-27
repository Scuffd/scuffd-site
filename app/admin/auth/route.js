import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthRoute extends Route {
  @service('session') session;

  queryParams = {
    code: { refreshModel: true },
  };

  async model({ code }) {
    await this.session.store(code);

    this.transitionTo('admin');
  }
}
