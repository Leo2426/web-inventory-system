export const signInGuard = () => {
  if (localStorage.getItem('authenticated') === 'true' ) {
    return true;
  } else {
    location.href = '/sign-in';
    return false;
  }
}
