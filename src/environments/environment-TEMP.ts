// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


// Read more about setting the Firebase environment here:
//  https://medium.com/codingthesmartway-com-blog/building-an-angular-5-project-with-bootstrap-4-and-firebase-4504ff7717c1#f721

export const environment = {
    production: false,
    firebase: {
      apiKey: "[...]",
      authDomain: "[...]",
      databaseURL: "[...]",
      projectId: "[...]",
      storageBucket: "[...]",
      messagingSenderId: "[...]"
    }
  };