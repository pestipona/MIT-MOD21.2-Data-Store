# 21.2.5. Data Store:

In the **previous lesson**, you **created a server**. In this video, you'll learn **how to create** a **database** using the **package** from the **npm registry** called `LowDB`.

![Data_Store_01.jpg](Screen_Shots%2FData_Store_01.jpg)

In our **previous lesson**, we **created** a `littleserver`. In this case, we're going to create a `little database`. Just as before, we're **going to use** a **package** from the **npm registry**. The **package** that we're going to use is called [LowDB](https://www.npmjs.com/package/lowdb). Now, this is a **very minimal database**. However, it **illustrates the importance** of being able to **persist information**, and with the goal of our lesson of **not being overwhelmed**, we're going to bring in the **small package** that **simply creates** a **JSON file** that we can use to **persist our data**.

![Data_Store_02.jpg](Screen_Shots%2FData_Store_02.jpg)

So, let's go ahead and **navigate** to the **npm registry**. And as you can see here, we **get some information** about this package called `LowDB`. You can see there the **weekly downloads**. You can see how we can do a `post` that is **right to this file** that we're **going to be using**.

![Data_Store_03.jpg](Screen_Shots%2FData_Store_03.jpg)

You can see further down here **how do we get started**. We **require the package**. We require the `FileSync`. We **give a name** to **the file** that's going to be **persisted** into our **file system**, that is going to **hold the JSON data** that we're **going to be writing**. And you can see there **how we use this file**, and how we can **write to the file**. And later on in the documentation, you can see **how to lead**, **how to filter**, and some of the **other features** that you will **want to do** when you're **working with data**. Ultimately, the `crud`, as it's often called, the `create`, `read`, `update`, and `delete` that **all data** applications** tend to have.

![Data_Store_04.jpg](Screen_Shots%2FData_Store_04.jpg)

```shell
cd "D:\My Documents\MIT Full Stack Development\Module 21 - Introduction to Tiered Applications\Module 21.0 - Introduction to Tiered Applications\Self-Study_Activities\21.2.5. Data Store"

git clone https://github.com/kogsio/littletiers.git
```

As you can see here, I've opened a terminal window on my desktop, and I'm going to go ahead and 'clone' a repository. Go ahead and 'clear' the screen, and I'm going to go ahead and move into the 'littletiers' folder. And as you can see there we have some starter code.

![Data_Store_05.png](Screen_Shots%2FData_Store_05.png)

Now, let's go ahead and move to the editor. And I'm going to go ahead and drag and drop that folder. And as you can see there, we get the same listing of files. Now, this is going to be the repository that we're going to be working throughout the rest of the lessons in this module. And I'm going to start off here simply with the little db part, the small database. And as you can see there, I've already entered some of the boilerplate to use this package `'('lowdb');'`. And I have a **number of other tasks**. They are listed. Now, I'm going to go ahead and **do a couple** of the **initial ones**, and then **I will leave the rest up to you**.

* Now, to get started, let's go ahead and take a look at the documentation. And as you can see there, we have comments here for initializing the `data store`, adding a `post`, and the other ones, I will leave for you.

```js
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
// YOUR CODE

// add post
// ----------------------------
// YOUR CODE

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
```

So, let's go ahead and **move to npm** and **take a look** at **how do we get started** and **how do we add a post**. And as you can see, there are the first steps. So, I'm going to go ahead and copy this, paste it into my editor. And I only need, well, actually I'm just going to remove this one here. And this is going to be my `defaults`, so in it, I'm not going to use `user:`. So, I will remove that, and I will put the rest all in one line.

* So, as you can see, **the first one** sets an **array of post**.
* And then on **the second one**, I'm going to go ahead and `.push` into `'('posts')'`, the following entry. An `id:` of `1,`, a `title:` of `'lowdb is awesome'`. And I'm going to go ahead and **add one more property**, I will **add the property** of `published:`. This can be `true` or `false`. So, I'm going to go ahead and say `true` for this one.

And that's all **I'm going to enter**, to **get started**.

```js
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
```

So, let's go ahead and **save this**. Let's **move back** to the **console**. Now, I'm going to go ahead and run just `node simple.js`, as you can see there. And when I run it, you can see there that it says `MODULE_NOT_FOUND`, and that is because I have **not installed** yet, [lowdb](https://www.npmjs.com/package/lowdb).

```shell
npm install lowdb
npm install
```

And I can do it two ways. The very first way is I can just do `npm install lowdb`. That's the name. Or I can trust the person that wrote the repository, which is, in this case, it's me, and do npm install. And the reason that would work is because if we take a look at `package.json`, you'll see there that I have `"lowdb"` as a **dependency**. Now, in this case, I'm simply going to go ahead and enter 'lowdb'. And you can see there that it was installed. Now, if I were to do `npm install`, it would do the same thing, but add express as well. So, I'm simply going to do it twice, so you can see there that both ways can be used.

```json
{
  "name": "littletiers",
  "version": "1.0.0",
  "description": "little tiers",
  "main": "http_server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/kogsio/littletiers.git"
  },
  "author": "abel@mit.edu",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/kogsio/littletiers/issues"
  },
  "homepage": "https://github.com/kogsio/littletiers#readme",
  "dependencies": {
    "express": "^4.17.1",
    "lowdb": "^1.0.0"
  }
}
```

![Data_Store_06.png](Screen_Shots%2FData_Store_06.png)

So, now that **we've added both packages**, let's go ahead and **run our code** once again. And this will be `simple.js`, and as you can see there **that it ran**.

```shell
node simple.js
```

And if we **take a look** at the **file system**, you'll see there now that there is a **new file** called `db.json`.

![Data_Store_07.png](Screen_Shots%2FData_Store_07.png)

And if we go here to our **file system**, we can see that **that file is here**, `db.json`. And you can see there that that **data was persisted**. What that means is that if I were to **run something else**, I could **read that information directly** from **the file system** because **it has been persisted** into a **permanent storage**, a **permanent data store**.

```json
{
  "posts": [
    {
      "id": 1,
      "title": "lowdb is awesome",
      "published": true
    }
  ]
}
```

Now, let's go ahead and make some more entries here. And now, I will be careful here because I don't want to repeat my ids. And it will simply make three more entries. There are ways to avoid doing this by hand, but we're simply doing a very simple example. So, I will do it by hand, and I will enter here titles, And it doesn't matter what I write. So, I will say ' 'random' ' here. This makes some of these 'false' just to get some variability here. And let's not forget to remove the first one since that one was one we already wrote. And nothing will happen by the way, if you enter it is just you will get two entries with id. And it's sort of defeats the purpose of having an id if you are repeating it.

```js
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
    .push({ id: 2, title: 'The Count of Monte Cristo', published: true})
    .write()

db.get('posts')
    .push({ id: 3, title: 'The Lord of the Rings', published: true})
    .write()

db.get('posts')
    .push({ id: 4, title: 'The Alchemist', published: true})
    .write()
```

So, let's go ahead and **run our code** one more time.

```shell
node simple.js
```

Now if we **take a look** at `db.json`, you can see there that we now have **three more entries**, the **ones** that we **specified**.

```json
{
  "posts": [
    {
      "id": 1,
      "title": "lowdb is awesome",
      "published": true
    },
    {
      "id": 1,
      "title": "lowdb is awesome",
      "published": true
    },
    {
      "id": 2,
      "title": "The Count of Monte Cristo",
      "published": true
    },
    {
      "id": 3,
      "title": "The Lord of the Rings",
      "published": true
    },
    {
      "id": 4,
      "title": "The Alchemist",
      "published": true
    }
  ]
}
```

Now if we wanted to **read that back**, I'm going to go ahead and remove everything that I entered here. And I'm going to go ahead and enter `'db.get('posts').value();'`. And I got that from **reading the documentation**. And I'm going to go ahead and **save it**. Oh, and I forgot to **write to the console**. So, **let's wrap this** in a `console.log`.

```js
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
// Set some defaults
db.defaults({ posts: []}).write()

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
```

Let's go ahead, and **run it**. And as you can see there, **as expected**, we can **read our data back**. So, this is **simply emphasizing** the fact that the **data is being persisted across sessions**.

![Data_Store_08.png](Screen_Shots%2FData_Store_08.png)

And **I will leave** the **rest of the tasks** on the file **for you to do**. So, **count your post**, **find post ids**, and you can see there some of the** additional tasks**. You might want to be able to **delete one**, say given a **certain id**, you can play there a little bit with the **functionality**, and **get comfortable** with **this package** *as we will use it in* **following exercises** or in **following lessons**.