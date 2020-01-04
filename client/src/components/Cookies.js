import * as Cookies from "js-cookie";

export const setSessionCookie = (session) => {
  Cookies.remove("session");
  Cookies.set("session", session, { expires: 14 });
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");
  console.log('I am cookie from cookies', sessionCookie)

  if (sessionCookie === undefined) {
    return {};
  } else {
    return JSON.parse(sessionCookie);
  }
};