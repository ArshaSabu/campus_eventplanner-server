// index.js
// 1️⃣ Import json-server
const jsonServer = require("json-server");

// 2️⃣ Create server
const server = jsonServer.create();

// 3️⃣ Create middleware (to handle CORS, static, etc.)
const middleware = jsonServer.defaults();

// 4️⃣ Import router (connect db.json)
const router = jsonServer.router("db.json");

// 5️⃣ Define port (Render uses process.env.PORT automatically)
const PORT = 5000 || process.env.PORT;

// 6️⃣ Use middleware
server.use(middleware);

// 7️⃣ Allow parsing of JSON request bodies
server.use(jsonServer.bodyParser);

// 8️⃣ Use router (all /events, /users, etc. endpoints come from db.json)
server.use(router);

// 9️⃣ Start server
server.listen(PORT, () => {
  console.log(`Campus Event Planner JSON Server is running on port ${PORT}`);
});
