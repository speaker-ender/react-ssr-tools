const esbuild = require("esbuild");

const entryFile = "src/index.ts";
const sharedBuildProps = {
    bundle: true,
    entryPoints: [entryFile],
    logLevel: "info",
    minify: true,
    sourcemap: true,
};

// ESM
esbuild.build({
    ...sharedBuildProps,
    format: 'esm',
    outfile: './dist/index.esm.js',
    target: ['esnext'],
    loader: { ".ts": "ts", ".tsx": "tsx" }
}).then(() => console.log("⚡ ESM Done")).catch(() => process.exit(1));

// CJS
esbuild.build({
    ...sharedBuildProps,
    format: 'cjs',
    outfile: './dist/index.cjs.js',
    target: ['esnext'],
    loader: { ".ts": "ts", ".tsx": "tsx" },
}).then(() => console.log("⚡ CJS Done")).catch(() => process.exit(1));