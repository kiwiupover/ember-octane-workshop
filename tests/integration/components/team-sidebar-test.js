import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import StubbedAuthService from 'shlack/tests/test-helpers/auth-service';

module('Integration | Component | team-sidebar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', StubbedAuthService);
  });

  test('it renders', async function(assert) {
    StubbedAuthService.authenticatedUserId = 'LOL';
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.owner.lookup('service:auth').currentUserId = 'LOL';

    this.set('myTeam', {
      name: 'LinkedIn',
      channels: [
        {
          name: 'general',
          id: 'general'
        }
      ]
    });

    await render(hbs`<TeamSidebar @team={{this.myTeam}}/>`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*[\n]+\s*/g, '\n')
        .split('\n'),
      ['LinkedIn', 'Mike North (LOL)', 'Channels', '# general', 'Logout']
    );
  });
});