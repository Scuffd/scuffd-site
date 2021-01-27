import Controller from '@ember/controller';
import config from 'scuffd-site/config/environment';

export default class DashboardController extends Controller {
  get productionBranch() {
    return this.model.branches?.find((a) => a.name == config.productionBranch);
  }

  get draftBranches() {
    return this.model.branches?.filter(
      (a) => a.name != config.productionBranch
    );
  }
}
