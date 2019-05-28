﻿// Create a new 'render' controller method
exports.render = function (req, res) {
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('index', { title: 'Sample Test' });

};

// Create a new 'renderAdd' controller method
exports.renderAdd = function (req, res) {
    // Use the 'response' object to render the 'add_task' view with a 'title' property
    res.render('add_task', { title: 'Add New task' });
};
exports.getUpdatePage = function (req, res) {
    // Use the 'response' object to render the 'add_task' view with a 'title' property
    //location (ejs file name) & then data being sent (this is the responese object)
    res.render('updatePage', { title: 'Update Survey' });

};
