import Route from '@ember/routing/route';
import config from 'scuffd-site/config/environment';

export default class AdminIndex extends Route {
  async model() {
    try {
      let branches = await this.store.query('github-branch', {
        repo: config.repo,
      });

      return { branches };
    } catch (e) {
      debugger;
      this.transitionTo('admin.login');
    }
  }
}
