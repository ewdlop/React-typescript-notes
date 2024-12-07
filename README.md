[![CodeQL](https://github.com/ewdlop/React-typescript-notes/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/ewdlop/React-typescript-notes/actions/workflows/github-code-scanning/codeql)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Union Type on Typescript for UI Component
(what if use just cmd data and backend just have UI....but then other things be such and such...)

Here's an extended version that includes Vue, Svelte, and additional UI frameworks for TypeScript union types.

Qucik motivational quote:(image the project you being working on needs to swap to other framework out of sudden)
"Ghost-Project" development(it is like  > O(n) scale works)(linear would be still a miracle wouldnt you think)
if it is o(1) that would be...but 一勞永逸 mentality though.. Nohmmm


### Step 1: Define Union Types for Component Props by Framework

Each framework has unique ways to handle components and props. We’ll create an interface for each framework's props and add them to a union type.

```typescript
// React Component Props
interface ReactComponentProps {
  type: 'react';
  component: React.ComponentType<any>;
  props: React.ComponentProps<any>;
}

// Preact Component Props
interface PreactComponentProps {
  type: 'preact';
  component: preact.ComponentType<any>;
  props: preact.JSX.IntrinsicElements;
}

// Angular Component Props
interface AngularComponentProps {
  type: 'angular';
  component: any;
  props: { [key: string]: any };
}

// Vue Component Props
interface VueComponentProps {
  type: 'vue';
  component: any; // Vue uses `defineComponent` and `createApp`
  props: Record<string, any>;
}

// Svelte Component Props
interface SvelteComponentProps {
  type: 'svelte';
  component: any; // Svelte components are functions/classes
  props: Record<string, any>;
}

// SolidJS Component Props
interface SolidComponentProps {
  type: 'solid';
  component: any; // Solid uses JSX
  props: Record<string, any>;
}

// Union of All Component Props
type ComponentProps =
  | ReactComponentProps
  | PreactComponentProps
  | AngularComponentProps
  | VueComponentProps
  | SvelteComponentProps
  | SolidComponentProps;
```

### Step 2: Create a Render Function to Handle Each Framework

Next, set up a `renderComponent` function to handle each framework. Since React and SolidJS directly use JSX, they’re straightforward. Other frameworks may require more setup.

```typescript
function renderComponent(props: ComponentProps) {
  switch (props.type) {
    case 'react':
      return <props.component {...props.props} />;
    case 'preact':
      return preact.h(props.component, props.props);
    case 'angular':
      return renderAngularComponent(props.component, props.props);
    case 'vue':
      return renderVueComponent(props.component, props.props);
    case 'svelte':
      return renderSvelteComponent(props.component, props.props);
    case 'solid':
      return <props.component {...props.props} />;
    default:
      throw new Error('Unsupported framework');
  }
}
```

### Step 3: Define Helper Functions for Non-React Frameworks

For frameworks that don’t use JSX (like Angular, Vue, and Svelte), helper functions can help handle rendering components.

```typescript
function renderAngularComponent(component: any, props: { [key: string]: any }) {
  // Angular component rendering logic here
  // Typically involves using Angular modules and services to mount the component
}

function renderVueComponent(component: any, props: { [key: string]: any }) {
  const app = Vue.createApp(component, props);
  return app.mount(document.createElement('div')); // Mount to a new div element
}

function renderSvelteComponent(component: any, props: { [key: string]: any }) {
  const target = document.createElement('div');
  new component({ target, props });
  return target;
}
```

### Step 4: Define Union for Event Handling by Framework

Each framework has different types of events, so here’s how you can handle them in a union type:

```typescript
type ComponentEvents =
  | { type: 'react'; event: React.SyntheticEvent }
  | { type: 'preact'; event: preact.JSX.TargetedEvent }
  | { type: 'angular'; event: Event }
  | { type: 'vue'; event: Event }
  | { type: 'svelte'; event: Event }
  | { type: 'solid'; event: Event };

function handleEvent(event: ComponentEvents) {
  switch (event.type) {
    case 'react':
      console.log('Handling React event:', event.event);
      break;
    case 'preact':
      console.log('Handling Preact event:', event.event);
      break;
    case 'angular':
      console.log('Handling Angular event:', event.event);
      break;
    case 'vue':
      console.log('Handling Vue event:', event.event);
      break;
    case 'svelte':
      console.log('Handling Svelte event:', event.event);
      break;
    case 'solid':
      console.log('Handling Solid event:', event.event);
      break;
  }
}
```

### Example Usage

With these union types and helper functions, you can easily render components and handle events for different frameworks.

```typescript
const vueComponent: VueComponentProps = {
  type: 'vue',
  component: MyVueComponent,
  props: { title: 'Vue Component' },
};

const svelteComponent: SvelteComponentProps = {
  type: 'svelte',
  component: MySvelteComponent,
  props: { title: 'Svelte Component' },
};

// Render components dynamically
renderComponent(vueComponent);
renderComponent(svelteComponent);
```

### Benefits of This Approach

1. **Type Safety**: TypeScript enforces correct types based on the framework, reducing runtime errors.
2. **Cross-Framework Compatibility**: With union types, components and events from multiple frameworks can coexist in a single codebase.
3. **Scalability**: New frameworks can be added easily by extending union types.
4. **Flexibility**: Developers can render different framework components and handle events with minimal effort.

This approach offers a versatile and type-safe way to manage multiple UI frameworks in TypeScript, facilitating cross-framework compatibility without sacrificing type safety.

###

在JavaScript中，模块化是组织代码的关键。主要有两种模块系统：CommonJS和ES模块（ESM）。此外，文件扩展名`.js`和`.mjs`在Node.js中也有特定含义。

**CommonJS与ES模块：**

- **CommonJS：**
  - **导入：** 使用`require()`函数。
    ```javascript
    const moduleA = require('./moduleA');
    ```
  - **导出：** 使用`module.exports`或`exports`对象。
    ```javascript
    module.exports = function() { /* ... */ };
    ```
  - **特性：** 同步加载，主要用于Node.js环境。 :contentReference[oaicite:5]{index=5}

- **ES模块（ESM）：**
  - **导入：** 使用`import`语句。
    ```javascript
    import moduleA from './moduleA';
    ```
  - **导出：** 使用`export`语句。
    ```javascript
    export function myFunction() { /* ... */ }
    ```
  - **特性：** 静态结构，支持异步加载，适用于浏览器和Node.js环境。 :contentReference[oaicite:6]{index=6}

**`.js`与`.mjs`文件扩展名：**

- **`.js`：**
  - **默认行为：** 在Node.js中，`.js`文件默认被视为CommonJS模块。
  - **配置：** 如果在`package.json`中设置`"type": "module"`，则`.js`文件将被视为ES模块。 :contentReference[oaicite:7]{index=7}

- **`.mjs`：**
  - **用途：** 明确指定文件为ES模块，无需在`package.json`中设置`"type"`字段。
  - **优势：** 在混合使用CommonJS和ES模块的项目中，使用`.mjs`可以清晰地区分模块类型。 :contentReference[oaicite:8]{index=8}

**选择建议：**

- **新项目：** 建议使用ES模块，因其是现代JavaScript的标准，具有更好的静态分析和优化能力。
- **现有项目：** 如果项目主要使用CommonJS，且需要与大量现有模块兼容，继续使用CommonJS可能更为实际。
- **混合使用：** 在需要同时使用两种模块系统时，使用`.mjs`扩展名可以帮助区分ES模块，避免混淆。 :contentReference[oaicite:9]{index=9}

理解这些模块系统和文件扩展名的差异，有助于在项目中做出明智的选择，确保代码的可维护性和兼容性。

*时间点：2024年11月12日，星期二，15:02:33（美国东部时间）*


以下是几个参考资料，您可以查看相关内容：

1. **CommonJS与ES模块的区别**：[CommonJS vs ES Modules - The Shift from Require to Import](https://nikolasbarwicki.com/articles/commonjs-vs-es-modules-the-shift-from-require-to-import/)
   
2. **JavaScript文件扩展名`.js`与`.mjs`的用法**：[Node.js 官方文档 - ECMAScript Modules](https://nodejs.org/dist/latest-v16.x/docs/api/esm.html)

3. **Node.js中模块化处理**：[Modules: CommonJS modules - Node.js v16.13.0 Documentation](https://nodejs.org/api/modules.html#modules_commonjs_modules)

*时间点：2024年11月12日，星期二，15:04:33（美国东部时间）*

