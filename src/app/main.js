/**
 * Created by mrx on 2/12/16.
 */

(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent);
        ng.platform.browser.bootstrap(app.AppComponent2);
    });
})(window.app || (window.app = {}));