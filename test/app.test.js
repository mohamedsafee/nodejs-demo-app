
const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("../app");

test("Node.js demo app endpoints", async (t) => {
  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  t.after(() => new Promise((resolve, reject) => {
    server.close((err) => err ? reject(err) : resolve());
  }));

  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  await t.test("homepage returns app information", async () => {
    const response = await fetch(`${baseUrl}/`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.service, "nodejs-demo-app");
  });

  await t.test("health endpoint returns ok", async () => {
    const response = await fetch(`${baseUrl}/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.status, "ok");
  });

  await t.test("unknown route returns 404", async () => {
    const response = await fetch(`${baseUrl}/missing`);
    assert.equal(response.status, 404);
  });
});
