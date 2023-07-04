export const startSession = (userName: string, userEmail: string) => {
  localStorage.setItem('userName', userName);
  localStorage.setItem('userEmail', userEmail);
};

export const getSession = () => {
  return {
    userName: localStorage.getItem('userName'),
    userEmail: localStorage.getItem('userEmail'),
  };
};

export const endSession = () => {
  localStorage.removeItem('userName');
  localStorage.removeItem('userEmail');
};
