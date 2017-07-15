module.exports = ({ options }) => ({
  plugins: {
    [require.resolve('../postcss')]: options
  }
});
