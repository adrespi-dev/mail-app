const mockAuth = {
  isAuthenticated: false,
  authenticate(cb: () => void) {
    mockAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: () => void) {
    mockAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default mockAuth;
