Introduction to TypeScript
==========================

Support available [here](https://docs.google.com/presentation/d/1TFGp_eKQyYPtpO18ROCeszZi6z0CqqFPgvnxIY50InA/edit?usp=sharing)


Install globaly
---------------

```bash
npm install -g typescript
```

Compile file(s) to bin folder
-----------------------------

```bash
tsc ./src/<path_to_typescrit_file> --outDir ./bin
```

Use configuration file
----------------------

Create tsconfig.json file with command:

```bash
tsc --init
```

then edit generated file, uncomment line with `// "outDir": "./"` to `"outDir": "./bin"` in order to specify output folder for compiled files;
after the "compilerOptions" section, add
```json
"include": [
  "src/**/*.ts"
],
```
in order to specify source folder.

Now, you can compile project typing:

```bash
tsc
```
or

```bash
tsc --watch
```
to compile on the fly 
