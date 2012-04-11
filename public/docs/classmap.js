YAHOO.env.classMap = {"storage.MongoStorage": "storages", "Storage": "lib", "engine.Haml": "engines", "Engine": "lib", "engine.Swig": "engines", "engine.HamlCoffee": "engines", "Driver": "lib", "engine.Liquor": "engines", "engine.Whiskers": "engines", "engine.Jazz": "engines", "engine.Jade": "engines", "Controller": "lib", "http.OutgoingMessage": "lib", "engine.JsHtml": "engines", "engine.Dot": "engines", "engine.CoffeeKup": "engines", "http.IncomingMessage": "lib", "driver.MySQL": "drivers", "engine.EJS": "engines", "storage.RedisStorage": "storages", "engine.Kernel": "engines", "engine.Handlebars": "engines", "Model": "lib", "Helper": "lib", "Application": "lib", "engine.Hogan": "engines", "engine.JqueryTemplate": "engines", "driver.MongoDB": "drivers", "Protos": "lib", "engine.Eco": "engines", "ModelObject": "lib", "Utility": "lib"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
