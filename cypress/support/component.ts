import { mount } from "@cypress/react18";

// Augment the Cypress namespace to include type definitions for
// your custom command file, command.js
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
