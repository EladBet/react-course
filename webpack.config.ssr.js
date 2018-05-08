const webpack = require('webpack');
const path = require('path');

module.exports = function (env) {
    const ENV = env.NODE_ENV || 'development';
    const removeEmpty = (arr) => arr.filter(Boolean);

    const configFor = (element) => ({
        context: path.resolve(__dirname, 'src'),
        entry: './index-ssr.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: '[name].ssr.bundle.js',
            libraryTarget: 'commonjs2'
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [path.resolve(__dirname, 'src')],
                    use: 'babel-loader'
                },
                {
                    test: /\.(scss|css|svg)$/,
                    use: 'ignore-loader'
                },
            ]
        },
        plugins: removeEmpty([
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': `'${ENV}'`
            })
        ]),

        stats: { colors: true },

        target: 'node',
    });

    const config = configFor();

    return config;
};
