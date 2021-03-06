module.exports = {
  siteMetadata: {
    title: "ICT Community Fridge Project",
    description:
      "The goal is to provide free food to every member of the Wichita community, period.",
    author: "@ictcommunityfridge",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "@assets": "./assets",
          "@atoms": "./components/atoms",
          "@molecules": "./components/molecules",
          "@utils": "./utils",
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ICT Community Fridge Project",
        short_name: "ICTCFP",
        start_url: "/",
        background_color: "#fa934d",
        theme_color: "#fa934d",
        display: "minimal-ui",
        icon: "src/assets/logo.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-B0858R2NJE",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ],
};
