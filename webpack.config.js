import nodeExternals from 'webpack-node-externals';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

export default {
    // other webpack configuration options
    resolve: {
        fallback: {
            buffer: require.resolve('buffer/'),
        },
    },
    plugins: [
        new NodePolyfillPlugin(),
    ],
    externals: [nodeExternals()],
    rules: [
        // Other rules...
        {
            test: /\.js$/,
            use: [
                {
                    loader: 'next-swc-loader',
                    options: {
                        // Disable caching for this loader
                        cache: false,
                    },
                },
                {
                    loader: 'next-flight-loader',
                    options: {
                        // Disable caching for this loader
                        cache: false,
                    },
                },
            ],
        },
    ],
};
