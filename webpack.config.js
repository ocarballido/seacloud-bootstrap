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
