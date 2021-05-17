import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class LoginFormComponent extends Component {

  handleSignIn(userId) {
    console.log({userId});
  }

  /**
   * Handle the form submit event
   * @param {Event & { target: HTMLFormElement }} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();

    const { target } = evt;
    const selectElem = target.querySelector('select');
    this.handleSignIn(selectElem.value);
  }
}
