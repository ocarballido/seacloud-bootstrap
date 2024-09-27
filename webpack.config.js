import Dotenv from "dotenv-webpack"
import path from "path"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"

const htmlPluginConfigs = [
  {
    template: path.resolve(process.cwd(), "index.html"), // Path to your main HTML template
    filename: "index.html", // Output filename (e.g., "public/index.html")
    chunks: ["main"], // Specify which chunks to include (main is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "special-offers.html"), // Path to another HTML template
    filename: "special-offers.html", // Output filename (e.g., "public/about.html")
    chunks: ["special-offers"], // Specify which chunks to include (about is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "about.html"), // Path to another HTML template
    filename: "about.html", // Output filename (e.g., "public/about.html")
    chunks: ["about"], // Specify which chunks to include (about is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "luxury-all-inclusive.html"), // Path to another HTML template
    filename: "luxury-all-inclusive.html", // Output filename (e.g., "public/luxury-all-inclusive.html")
    chunks: ["luxury-all-inclusive"], // Specify which chunks to include (luxury-all-inclusive is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "luxury-five-stars.html"), // Path to another HTML template
    filename: "luxury-five-stars.html", // Output filename (e.g., "public/luxury-five-stars.html")
    chunks: ["luxury-five-stars"], // Specify which chunks to include (luxury-five-stars is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "luxury-lifestyle.html"), // Path to another HTML template
    filename: "luxury-lifestyle.html", // Output filename (e.g., "public/luxury-lifestyle.html")
    chunks: ["luxury-lifestyle"], // Specify which chunks to include (luxury-lifestyle is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "luxury-sailing-sustainability.html"), // Path to another HTML template
    filename: "luxury-sailing-sustainability.html", // Output filename (e.g., "public/luxury-sailing-sustainability.html")
    chunks: ["luxury-sailing-sustainability"], // Specify which chunks to include (luxury-sailing-sustainability is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "luxury-celebrate.html"), // Path to another HTML template
    filename: "luxury-celebrate.html", // Output filename (e.g., "public/luxury-celebrate.html")
    chunks: ["luxury-celebrate"], // Specify which chunks to include (luxury-celebrate is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "yachts-sea-cloud.html"), // Path to another HTML template
    filename: "yachts-sea-cloud.html", // Output filename (e.g., "public/yachts-sea-cloud.html")
    chunks: ["yachts-sea-cloud"], // Specify which chunks to include (yachts-sea-cloud is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "terms-and-conditions.html"), // Path to another HTML template
    filename: "terms-and-conditions.html", // Output filename (e.g., "public/terms-and-conditions.html")
    chunks: ["terms-and-conditions"], // Specify which chunks to include (terms-and-conditions is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "refund-instructions.html"), // Path to another HTML template
    filename: "refund-instructions.html", // Output filename (e.g., "public/refund-instructions.html")
    chunks: ["refund-instructions"], // Specify which chunks to include (refund-instructions is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "eu-regulation.html"), // Path to another HTML template
    filename: "eu-regulation.html", // Output filename (e.g., "public/eu-regulation.html")
    chunks: ["eu-regulation"], // Specify which chunks to include (eu-regulation is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "disclaimer-or-liability.html"), // Path to another HTML template
    filename: "disclaimer-or-liability.html", // Output filename (e.g., "public/disclaimer-or-liability.html")
    chunks: ["disclaimer-or-liability"], // Specify which chunks to include (disclaimer-or-liability is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "legal-details.html"), // Path to another HTML template
    filename: "legal-details.html", // Output filename (e.g., "public/legal-details.html")
    chunks: ["legal-details"], // Specify which chunks to include (legal-details is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "privacy-information.html"), // Path to another HTML template
    filename: "privacy-information.html", // Output filename (e.g., "public/privacy-information.html")
    chunks: ["privacy-information"], // Specify which chunks to include (privacy-information is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "faq.html"), // Path to another HTML template
    filename: "faq.html", // Output filename (e.g., "public/faq.html")
    chunks: ["faq"], // Specify which chunks to include (faq is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "destinations-world-map.html"), // Path to another HTML template
    filename: "destinations-world-map.html", // Output filename (e.g., "public/destinations-world-map.html")
    chunks: ["destinations-world-map"], // Specify which chunks to include (destinations-world-map is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "destinations-caribbean.html"), // Path to another HTML template
    filename: "destinations-caribbean.html", // Output filename (e.g., "public/destinations-caribbean.html")
    chunks: ["destinations-caribbean"], // Specify which chunks to include (destinations-caribbean is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "destinations-atlantic-crossing.html"), // Path to another HTML template
    filename: "destinations-atlantic-crossing.html", // Output filename (e.g., "public/destinations-atlantic-crossing.html")
    chunks: ["destinations-atlantic-crossing"], // Specify which chunks to include (destinations-atlantic-crossing is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "destinations-mediterranean.html"), // Path to another HTML template
    filename: "destinations-mediterranean.html", // Output filename (e.g., "public/destinations-mediterranean.html")
    chunks: ["destinations-mediterranean"], // Specify which chunks to include (destinations-mediterranean is defined in your entry points)
  },
  {
    template: path.resolve(process.cwd(), "discover-more-digital-brochure.html"), // Path to another HTML template
    filename: "discover-more-digital-brochure.html", // Output filename (e.g., "public/discover-more-digital-brochure.html")
    chunks: ["discover-more-digital-brochure"], // Specify which chunks to include (discover-more-digital-brochure is defined in your entry points)
  },
  // Add more objects for additional HTML files as needed
];
const htmlPlugins = htmlPluginConfigs.map((config) => new HtmlWebpackPlugin(config));

export default {
  // Define the entry points of our application (can be multiple for different sections of a website)
  entry: {
    main: "./src/js/main.js",
    "special-offers": "./src/js/special-offers.js",
    about: "./src/js/about.js",
    "luxury-all-inclusive": "./src/js/luxury-all-inclusive.js",
    "luxury-five-stars": "./src/js/luxury-five-stars.js",
    "luxury-lifestyle": "./src/js/luxury-lifestyle.js",
    "luxury-sailing-sustainability": "./src/js/luxury-sailing-sustainability.js",
    "luxury-celebrate": "./src/js/luxury-celebrate.js",
    "yachts-sea-cloud": "./src/js/yachts-sea-cloud.js",
    "terms-and-conditions": "./src/js/terms-and-conditions.js",
    "refund-instructions": "./src/js/refund-instructions.js",
    "eu-regulation": "./src/js/eu-regulation.js",
    "disclaimer-or-liability": "./src/js/disclaimer-or-liability.js",
    "legal-details": "./src/js/legal-details.js",
    "privacy-information": "./src/js/privacy-information.js",
    "faq": "./src/js/faq.js",
    "destinations-world-map": "./src/js/destinations-world-map.js",
    "destinations-caribbean": "./src/js/destinations-caribbean.js",
    "destinations-atlantic-crossing": "./src/js/destinations-atlantic-crossing.js",
    "destinations-mediterranean": "./src/js/destinations-mediterranean.js",
    "discover-more-digital-brochure": "./src/js/discover-more-digital-brochure.js",
  },

  // Define the destination directory and filenames of compiled resources
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "./public"),
  },

  // Define development options
  devtool: "source-map",

  // Define loaders
  module: {
    rules: [
      // Use babel for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              }
            }
          },
          "sass-loader"
        ],
      },
      // File loader for images
      {
        test: /\.(jpg|jpeg|png|git|svg)$/i,
        type: "asset/resource",
      }
    ],
  },

  // Define used plugins
  plugins: [
    // Load .env file for environment variables in JS
    new Dotenv({
      path: "./.env"
    }),

    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),

    // Copy images to the public folder
    new CopyPlugin({
      patterns: [
        {
          from: "src/images",
          to: "images",
        }
      ]
    }),

    // Inject styles and scripts into the HTML
    // new HtmlWebpackPlugin({
    //   template: path.resolve(process.cwd(), "index.html"),
    // }),
    ...htmlPlugins
  ],

  // Configure the "webpack-dev-server" plugin
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), "public")
    },
    watchFiles: [
      path.resolve(process.cwd(), "index.html"),
      path.resolve(process.cwd(), "special-offers.html"),
      path.resolve(process.cwd(), "about.html"),
      path.resolve(process.cwd(), "luxury-all-inclusive.html"),
      path.resolve(process.cwd(), "luxury-five-stars.html"),
      path.resolve(process.cwd(), "luxury-lifestyle.html"),
      path.resolve(process.cwd(), "luxury-sailing-sustainability.html"),
      path.resolve(process.cwd(), "luxury-celebrate.html"),
      path.resolve(process.cwd(), "yachts-sea-cloud.html"),
      path.resolve(process.cwd(), "terms-and-conditions.html"),
      path.resolve(process.cwd(), "refund-instructions.html"),
      path.resolve(process.cwd(), "eu-regulation.html"),
      path.resolve(process.cwd(), "disclaimer-or-liability.html"),
      path.resolve(process.cwd(), "legal-details.html"),
      path.resolve(process.cwd(), "privacy-information.html"),
      path.resolve(process.cwd(), "faq.html"),
      path.resolve(process.cwd(), "destinations-world-map.html"),
      path.resolve(process.cwd(), "destinations-caribbean.html"),
      path.resolve(process.cwd(), "destinations-atlantic-crossing.html"),
      path.resolve(process.cwd(), "destinations-mediterranean.html"),
      path.resolve(process.cwd(), "discover-more-digital-brochure.html"),
    ],
    compress: true,
    port: process.env.PORT || 9090,
    hot: true,
  },

  // Performance configuration
  performance: {
    hints: false
  }
};
