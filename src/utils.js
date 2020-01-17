import { database, provider, auth } from "./firebase";

const signInAndCreateUser = () => {
  auth
    .signInWithPopup(provider)
    .then(result => {
      database.collection("users").add({
        name: result.user.displayName,
        email: result.user.email
      });
      console.log("async", result);
      return result;
    })
    //TODO: put in an error page here
    .catch(err => {
      console.log(err);
    });
};

const signOut = () => {
  auth.signOut().then(result => {
    console.log("signed out");
  });
};

export { signInAndCreateUser, signOut };
