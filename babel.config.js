/* eslint-disable */

module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
      [
      "transform-import-to-read-file-sync",
      {
        "test": "\\.txt$",
        "options": "utf8"
      }
    ]
  ]
}
