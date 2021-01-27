import BaseGitHubUserAdapter from 'ember-data-github/adapters/github-user';
import { inject as service } from '@ember/service';

export default class GitHubUserAdapter extends BaseGitHubUserAdapter {
  @service('session') session;

  get headers() {
    return {
      Authorization: `token ${this.session.clientKey}`,
    };
  }
}
