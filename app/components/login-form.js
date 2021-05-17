import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {

  @tracked userId = null;

  get isDisabled() {
    return !this.userId;
  }

  handleSignIn(userId) {
    console.log({userId});
  }

  /**
   * Handle change events on the <select>
   * @param {Event & { target: HTMLSelectElement }} evt
   */
  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }

  /**
   * Handle the form submit event
   * @param {Event & { target: HTMLFormElement }} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();

    this.handleSignIn(this.userId);
  }
}
