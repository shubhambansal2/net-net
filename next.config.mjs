import webpack from 'webpack';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
    webpack: (config) => {
        // Add the node protocol plugin

        // Provide fallbacks for Node.js core modules
        config.resolve.fallback = {
            ...config.resolve.fallback,
            buffer: require.resolve('buffer/'),
            process: require.resolve('process/browser'),
            tls: false,
            net: false,
            fs: false,
            path: require.resolve('path-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            stream: require.resolve('stream-browserify'),
            util: require.resolve('util/')
        };

        config.plugins.push(
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: 'process/browser'
            }),
            new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
                resource.request = resource.request.replace(/^node:/, "");
            }),
        );

        return config;
    }
};
