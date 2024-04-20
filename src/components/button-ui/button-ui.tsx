import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-ui',
  styleUrl: 'button-ui.css',
  shadow: true,
})
export class ButtonUi {

  render() {
    return (
      <button>Hola</button>
    );
  }

}
