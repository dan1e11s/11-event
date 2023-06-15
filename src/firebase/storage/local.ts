export const startSession = (user: any, userName: string, id: string) => {
  localStorage.setItem('accessToken', user.accessToken);
  localStorage.setItem('userName', userName);
  localStorage.setItem('userId', id);
};

export const getSession = () => {
  return {
    accessToken: localStorage.getItem('accessToken'),
    userName: localStorage.getItem('userName'),
  };
};

export const endSession = () => {
  localStorage.clear();
};

export const isLoggedIn = () => {
  return getSession().userName;
};
