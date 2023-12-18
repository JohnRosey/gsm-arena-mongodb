"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.user) {
        return next();
    }
    return res.status(401).json({ message: 'Non autorisé' });
};
exports.isAuthenticated = isAuthenticated;
/** export const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    }
    alert( res.status(401).json({ message: 'Non autorisé' }));

    res.redirect('/login');
  }; */
//# sourceMappingURL=middleware.js.map