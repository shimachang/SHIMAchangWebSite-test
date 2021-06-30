module.exports = api => {
  api.cache(true);

  return {
    "presets": [
      ["@babel/preset-env",{
        targets: [
          "last 1 version",
          "> 1%",
          "maintained node versions",
          "IE 11"
        ],
        useBuiltIns: "usage",
        corejs: 3
      }
    ]]
  };
};
