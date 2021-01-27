import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import config from 'scuffd-site/config/environment';

export default class FileTree extends Component {
  @service('store') store;

  @tracked open = false;
  @tracked subtreeData;

  @action async toggleOpen() {
    if (this.subtreeData || this.open) {
      this.open = !this.open;
      return;
    }

    this.subtreeData = await this.store.queryRecord('github-tree', {
      repo: config.repo,
      sha: this.args.sha,
    });
    this.open = true;
  }
}
