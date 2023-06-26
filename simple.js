var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
// Set some defaults
db.defaults({ posts: []}).write()

// add post
// ----------------------------
db.get('posts')
    .push({ id: 1, title: 'lowdb is awesome', published: true})
    .write()

db.get('posts')
    .push({ id: 2, title: 'The Count of Monte Cristo', published: true})
    .write()

db.get('posts')
    .push({ id: 3, title: 'The Lord of the Rings', published: true})
    .write()

db.get('posts')
    .push({ id: 4, title: 'The Alchemist', published: true})
    .write()

// read back posts
// ----------------------------
console.log(db.get('posts').value());


// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
