"use strict";
exports.__esModule = true;
var BaseRoute = (function () {
    function BaseRoute() {
        this.title = 'BaseRoute';
        this.scripts = [];
    }
    BaseRoute.prototype.addScript = function (src) {
        this.scripts.push(src);
        return this;
    };
    BaseRoute.prototype.render = function (req, res, view, options) {
        res.locals.BASE_URL = '/';
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=index.js.map