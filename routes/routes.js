/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/23/13
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */

var index = require('./index');
var user = require('./user');
var blog = require('./blog');
module.exports = function (app) {
    app.get('/', index.index);
    app.get('/list', user.list);
    app.get('/blog',blog.list);
};