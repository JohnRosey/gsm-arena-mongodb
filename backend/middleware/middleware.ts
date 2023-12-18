export const isAuthenticated = (req, res, next) => {
  console.log("Session User:", req.session?.user);
  if (req.session?.user) {
    return next()
  }
  return res.status(401).json({ message: 'Non autorisé non connectee' })
}
/** export const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    }
    alert( res.status(401).json({ message: 'Non autorisé' }));

    res.redirect('/login');
  }; */
