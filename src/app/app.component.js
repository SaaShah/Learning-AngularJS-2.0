/**
 * Created by mrx on 2/12/16.
 */

(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'my-app',
            template: '<h1>My First Angular 2 App</h1>'
        })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));

(function(app) {
    app.AppComponent2 =
        ng.core.Component({
            selector: 'my-app-2',
            template: '<h1>My Second Angular 2 App</h1>'
        })
            .Class({
                constructor: function() {
                    console.log('constructor() @ my-app-2');
                }
            });
})(window.app || (window.app = {}));