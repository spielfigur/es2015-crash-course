import buble from 'rollup-plugin-buble';

export default {
    input: 'src/main.js',
    plugins: [ buble() ],
    output: {
        file: 'out/bundle.js',
        format: 'cjs'
    }
}