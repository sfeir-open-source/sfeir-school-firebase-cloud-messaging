import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md', '00-school/speaker-ggn.md'];
}

function introSlides() {
  return [
    'intro/00-TITLE.md',
    'intro/01-introduction.md',
    'intro/03-FCM-architecture.md',
  ];
}

function setup() {
  return [
    'setup/00-TITLE.md',
    'setup/01-create-firebase-project.md',
    'setup/02-initialisation-firebase.md',
    'setup/03-permission.md',
    'setup/04-registration-token.md',
    'setup/05-web-credentials.md',
    'setup/06-service-worker.md',
    'setup/07-permission-ux.md',
  ]
}

function receiveMessages() {
  return [
    'receive-messages/00-TITLE.md',
    'receive-messages/01-introduction.md',
    'receive-messages/02-exercice.md',
  ]
}

function sendMessages() {
  return [
    'send-messages/00-TITLE.md',
    'send-messages/01-introduction.md',
    'send-messages/02-firebase-console.md',
    'send-messages/03-server-options.md',
    'send-messages/04-setup-admin-sdk.md',
    'send-messages/05-exercice.md',
    'send-messages/06-targetting.md',
  ];
}

function conclusion() {
  return [
    'conclusion/00-TITLE.md',
  ]
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(), //
    ...setup(), //
    ...receiveMessages(), //
    ...sendMessages(), //
    ...conclusion(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
