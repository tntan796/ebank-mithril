var m = require("mithril")
var Layout = require("../mithrils/layout");
var Index = require("../mithrils/index");
var Transfer = require("../mithrils/transfer");
var Bill = require("../mithrils/bill");

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Layout, m(Index))
        }
    },
    "/home": {
        render: function() {
            return m(Layout, m(Index))
        }
    },
    "/transfer": {
        render: function() {
            return m(Layout, m(Transfer))
        }
    },
    "/bill": {
        render: function() {
            return m(Layout, m(Bill))
        }
    }
})