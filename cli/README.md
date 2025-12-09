# Shades UI CLI

Download beautiful UI components from Shades By Jay library directly into your project.

## Installation

```bash
npm install -g shades-ui
```

Or use with npx (no installation required):

```bash
npx shades-ui
```

## Usage

### List all components

```bash
shades-ui list
```

### List components by category

```bash
shades-ui list buttons
shades-ui list cards
shades-ui list loaders
```

### Search components

```bash
shades-ui search gradient
shades-ui search glass
```

### Add a component to your project

```bash
shades-ui add button-gradient-1
```

This creates:
- `./components/button-gradient-1/button-gradient-1.html`
- `./components/button-gradient-1/button-gradient-1.css`

### Options

```bash
# Specify output directory
shades-ui add button-gradient-1 --dir ./src/components

# Also create combined HTML file
shades-ui add button-gradient-1 --combined

# Also create React component
shades-ui add button-gradient-1 --react

# Combine options
shades-ui add button-gradient-1 -d ./src -c -r
```

### Interactive mode

```bash
shades-ui interactive
# or
shades-ui i
```

## Available Categories

- **buttons** - Various button styles and effects
- **cards** - Card components with different designs
- **loaders** - Loading spinners and animations
- **switches** - Toggle switches and checkboxes
- **inputs** - Form inputs with floating labels, search boxes
- **forms** - Complete form components
- **templates** - Full-page templates

## Examples

### Quick start with a button

```bash
npx shades-ui add button-gradient-1
```

Then in your HTML:

```html
<link rel="stylesheet" href="./components/button-gradient-1/button-gradient-1.css">

<button class="btn-gradient">Click Me</button>
```

### React project

```bash
npx shades-ui add card-glass-1 --react
```

Then in your React component:

```jsx
import GlassCard from './components/card-glass-1/CardGlass1';

function App() {
  return <GlassCard />;
}
```

## Contributing

Visit the [Shades By Jay GitHub repository](https://github.com/sithija-jayasinghe/Shades-by-Jay-UI-Library) to contribute new components.

## License

MIT
