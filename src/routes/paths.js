// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "app"),
  },
};


// "/app"

// PATH_DASHBOARD.general.app => (`${root}${sublink}`=> "/"+"app"=>"/app")

//Instaed of Hard coding we can write like this

//Use of this: if we change"/app" to some other route we didnt need to change everywhere in our project