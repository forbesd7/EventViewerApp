import { database, provider, auth } from "./firebase";

const signIn = () => {
  auth.signInWithPopup(provider).then(result => {
    database
      .collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      });
    console.log(result.user);
  });
};

export { signIn };
