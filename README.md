This is a sample page to demo an [issue][issue] with the loadscript module in
[scoutfile][scoutfile]. `loadScript` has a default timeout of 1 second. All
browsers except in IE8 continue to load and execute the loaded JS after the
timeout.

1. `npm install`

2. Build webpack module `webpack main.js public/main_built.js`.

3. Start server `node app.js`.

4. Load http://localhost:3000/index.html.

[issue]: https://github.com/bazaarvoice/scoutfile/issues/8
[scoutfile]: https://github.com/bazaarvoice/scoutfile