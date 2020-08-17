import User1 from '../assets/img/users/User1.png';
import User from '../Common/models/User';

export const signInAsync = async () => {
  return new Promise<User>((resolve) => {
    const cb = () => {
      const user = {
        userId: 1,
        name: 'Antonela Reyna',
        avatarUrl: User1,
      };
      localStorage.setItem('currentUser', JSON.stringify(user));
      resolve(user);
    };

    setTimeout(cb, 1500);
  });
};
