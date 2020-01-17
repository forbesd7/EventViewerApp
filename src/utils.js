import { database, provider, auth } from "./firebase";

const signIn = () => {
  auth
    .signInWithPopup(provider)
    .then(result => {
      database.collection("users").add({
        name: result.user.displayName,
        email: result.user.email
      });
      console.log("user added");
    })
    //TODO: put in an error page here
    .catch(err => {
      console.log(err);
    });
};

const signOut = () => {
  auth.signOut().then(result => {
    this.setState({
      user: null
    });
    console.log("signed out");
  });
};

export { signIn, signOut };
