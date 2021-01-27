import Route from '@ember/routing/route';
import config from 'scuffd-site/config/environment';

export default class RevisionRoute extends Route {
  async model({ branchId }) {
    try {
      let branch = await this.store.findRecord(
        'github-branch',
        `${config.repo}/branches/${branchId}`
      );

      let contentTree = await this.store.queryRecord('github-tree', {
        repo: config.repo,
        sha: branch.commit.sha,
      });

      return { branch, contentTree };
    } catch (e) {
      debugger;
      this.transitionTo('admin.login');
    }
  }
}
