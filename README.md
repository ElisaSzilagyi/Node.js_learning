# Node.js_learning
Node.js is a runtime environment for executing JavaScript code. It is used for building highly-scalable, data-intenstive, real-time applications and for building asynchronious applications.

Node.js is NOT a programming language.

# Check for current Node.js version from your computer:
Open command prompt and type:
```
node --version
```

# Check and install the latest version:
Go to [Node.js official site](www.nodejs.org) and install the latest stable version. Click on download button.

# Run scripts
Go to command prompt and acces the folder that your project is placed in. Use the command:
```
node app.js _(or the file name)_
```

Every Node.js project has a main file, called "the main module". In this case, we have _app.js_ file. 

For avoiding the overwriting possibilities in Node.js, we will use MODULES. Every file will represent its own module. In this way, in order to use information for a certain file, you will need to export it and make it public (in terms of OOP concept).