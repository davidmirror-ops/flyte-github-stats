const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Flyte Stats",
    source: "https://github.com/davidmirror-ops/flyte-github-stats",
    repoNameWithOwner: "flyteorg/flyte",
  },
  plugins: [
    {
      resolve: `gatsby-theme-github-stats`,
      options: {
        dataPath: path.join(__dirname, `src`, `data`),
      },
    },
  ],
}
