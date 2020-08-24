import Route from '@ember/routing/route';

export default Route.extend({
  redirect(model, transition) {
    if(transition.targetName === 'docs') {
      this.transitionTo('docs.overview');
    }
  }
});
