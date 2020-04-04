export const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPassword = password => {
  if (!password) {
    return false;
  }

  return password.length >= 6;
};

export const isValidPasswordConf = (password, passwordConf) => {
  if (!password || !passwordConf) {
    return false;
  }

  return isValidPassword(passwordConf) && passwordConf === password;
};
