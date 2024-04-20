import { Component, h } from '@stencil/core';

@Component({
  tag: 'paragraph-ui',
  styleUrl: 'paragraph-ui.css',
  shadow: true,
})
export class ParagraphUi {

  render() {
    return (
      <p>Hola soy un parrafo</p>
    );
  }
}
