# React Lite Scrollbar

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![npm version](https://img.shields.io/npm/v/react-lite-scrollbar.svg?style=flat)

A lightweight and customizable scroll progress bar for React.

## Installation

```bash
npm install react-lite-scrollbar
```

## Basic Usage

```jsx
import ScrollBar from 'react-lite-scrollbar';

export default function App() {
  return (
    <>
      <ScrollBar />
      {/* Your page content */}
      <div>
        <h1>Welcome</h1>
        ...
      </div>
    </>
  );
}
```

## Props

| Prop       | Type               | Default  | Description                                         |
| ---------- | ------------------ | -------- | --------------------------------------------------- |
| `height`   | `number \| string` | `4`      | Height of the progress bar in pixels                |
| `bgColor`  | `string`           | `"#000"` | Background color of the progress bar                |
| `duration` | `number \| string` | `0.1`    | Transition duration in seconds for smooth animation |

## Examples

### Custom Height

```jsx
<ScrollBar height={8} />
```

### Custom Color

```jsx
<ScrollBar bgColor='#ff6b62' />
```

### Custom Animation Duration

```jsx
<ScrollBar duration={0.3} />
```
