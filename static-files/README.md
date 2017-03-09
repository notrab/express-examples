# Static files

Express isn't aware of files but with the `express.static()` middleware it does.

```javascript
app.use(express.static(path.join(__dirname, 'public')))
```

If you wanted to serve files from several directories, you can use express.static() multiple times.

Below we're passing the additional parameter `/css` that will allow `GET /application.css` instead of `GET /css/application.css`.

```javascript
app.use(express.static(path.join(__dirname, 'public', 'css')))
```

Adding a prefix like `GET /assets` is also possible.

```javascript
app.use('/assets', express.static(path.join(__dirname, 'public', 'css')))
```

## Running the example

```bash
npm install
node static-files
```
