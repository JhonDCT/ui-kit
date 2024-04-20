import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    // {
    //   type: 'dist',
    //   esmLoaderPath: '../loader',
    // },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
   
  ],
  testing: {
    browserHeadless: "new",
  },
};
