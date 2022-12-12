const {
  author,
  dependencies,
  repository,
  version,
} = require("../package.json");

module.exports = {
  name: {
    "": "telegraph 图片浏览",
    cn: "telegraph 图片浏览",
  },
  namespace: "",
  version: version,
  author: author,
  source: repository.url,
  // 'license': 'MIT',
  match: ["https://telegra.ph/*"],
  require: [
    `https://cdn.jsdelivr.net/npm/jquery@${dependencies.jquery}/dist/jquery.min.js`,
    `https://cdn.jsdelivr.net/npm/viewerjs@${dependencies.viewerjs}/dist/viewer.min.js`,
  ],
  grant: ["none"],
  connect: ["httpbin.org"],
  "run-at": "document-end",
};
