#!/usr/bin/env node

/**
 * Shades UI CLI
 * Download beautiful UI components directly into your project
 * 
 * Usage:
 *   npx shades-ui add <component-name>
 *   npx shades-ui list [category]
 *   npx shades-ui search <query>
 */

const { program } = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Configuration
const COMPONENTS_URL = 'https://raw.githubusercontent.com/sithija-jayasinghe/Shades-by-Jay-UI-Library/main/cli/components.json';
const VERSION = '1.0.0';

// Banner
function showBanner() {
    console.log(chalk.magenta(`
  ╔═══════════════════════════════════════════════════╗
  ║                                                   ║
  ║   ${chalk.bold.white('Shades By Jay UI')} - Component CLI            ║
  ║   ${chalk.gray('Beautiful UI components at your fingertips')}     ║
  ║                                                   ║
  ╚═══════════════════════════════════════════════════╝
`));
}

// Fetch components from remote
async function fetchComponents() {
    try {
        const response = await fetch(COMPONENTS_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch components');
        }
        return await response.json();
    } catch (error) {
        // Fallback to local components if available
        const localPath = path.join(__dirname, '..', 'components.json');
        if (fs.existsSync(localPath)) {
            return JSON.parse(fs.readFileSync(localPath, 'utf8'));
        }
        throw error;
    }
}

// List all components or by category
async function listComponents(category) {
    const spinner = ora('Fetching components...').start();
    
    try {
        const data = await fetchComponents();
        spinner.stop();
        
        let components = data.components;
        
        if (category) {
            components = components.filter(c => 
                c.category.toLowerCase() === category.toLowerCase()
            );
            console.log(chalk.cyan(`\n📦 Components in "${category}":\n`));
        } else {
            console.log(chalk.cyan('\n📦 All Available Components:\n'));
        }
        
        if (components.length === 0) {
            console.log(chalk.yellow('  No components found.'));
            return;
        }
        
        // Group by category
        const grouped = {};
        components.forEach(c => {
            if (!grouped[c.category]) {
                grouped[c.category] = [];
            }
            grouped[c.category].push(c);
        });
        
        Object.keys(grouped).sort().forEach(cat => {
            console.log(chalk.magenta.bold(`  ${cat.toUpperCase()}`));
            grouped[cat].forEach(c => {
                console.log(chalk.white(`    • ${chalk.green(c.id)} - ${c.name}`));
            });
            console.log('');
        });
        
        console.log(chalk.gray(`\nTotal: ${components.length} components`));
        console.log(chalk.gray(`Use: ${chalk.white('shades-ui add <component-id>')} to add a component\n`));
        
    } catch (error) {
        spinner.fail('Failed to fetch components');
        console.error(chalk.red(error.message));
    }
}

// Search components
async function searchComponents(query) {
    const spinner = ora('Searching...').start();
    
    try {
        const data = await fetchComponents();
        spinner.stop();
        
        const results = data.components.filter(c => 
            c.name.toLowerCase().includes(query.toLowerCase()) ||
            c.id.toLowerCase().includes(query.toLowerCase()) ||
            c.category.toLowerCase().includes(query.toLowerCase()) ||
            (c.tags && c.tags.some(t => t.toLowerCase().includes(query.toLowerCase())))
        );
        
        console.log(chalk.cyan(`\n🔍 Search results for "${query}":\n`));
        
        if (results.length === 0) {
            console.log(chalk.yellow('  No components found matching your query.'));
            return;
        }
        
        results.forEach(c => {
            console.log(chalk.white(`  ${chalk.green(c.id)} - ${c.name} ${chalk.gray(`[${c.category}]`)}`));
        });
        
        console.log(chalk.gray(`\nFound ${results.length} components`));
        
    } catch (error) {
        spinner.fail('Search failed');
        console.error(chalk.red(error.message));
    }
}

// Add component to project
async function addComponent(componentId, options) {
    const spinner = ora('Fetching component...').start();
    
    try {
        const data = await fetchComponents();
        const component = data.components.find(c => 
            c.id.toLowerCase() === componentId.toLowerCase()
        );
        
        if (!component) {
            spinner.fail(`Component "${componentId}" not found`);
            console.log(chalk.yellow('\nUse `shades-ui list` to see all available components'));
            return;
        }
        
        spinner.text = `Adding ${component.name}...`;
        
        // Determine output directory
        const outputDir = options.dir || './components';
        const componentDir = path.join(process.cwd(), outputDir, component.id);
        
        // Create directory
        if (!fs.existsSync(componentDir)) {
            fs.mkdirSync(componentDir, { recursive: true });
        }
        
        // Write HTML file
        const htmlPath = path.join(componentDir, `${component.id}.html`);
        fs.writeFileSync(htmlPath, component.html);
        
        // Write CSS file
        const cssPath = path.join(componentDir, `${component.id}.css`);
        fs.writeFileSync(cssPath, component.css);
        
        // Write combined file if requested
        if (options.combined) {
            const combinedPath = path.join(componentDir, `${component.id}-combined.html`);
            const combinedContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${component.name} - Shades By Jay</title>
    <style>
${component.css}
    </style>
</head>
<body>
${component.html}
</body>
</html>`;
            fs.writeFileSync(combinedPath, combinedContent);
        }
        
        // Write React component if requested
        if (options.react) {
            const reactPath = path.join(componentDir, `${toPascalCase(component.id)}.jsx`);
            const reactContent = generateReactComponent(component);
            fs.writeFileSync(reactPath, reactContent);
        }
        
        spinner.succeed(chalk.green(`Added ${component.name}!`));
        
        console.log(chalk.cyan('\n📁 Files created:'));
        console.log(chalk.white(`   ${htmlPath}`));
        console.log(chalk.white(`   ${cssPath}`));
        if (options.combined) {
            console.log(chalk.white(`   ${path.join(componentDir, `${component.id}-combined.html`)}`));
        }
        if (options.react) {
            console.log(chalk.white(`   ${path.join(componentDir, `${toPascalCase(component.id)}.jsx`)}`));
        }
        
        console.log(chalk.gray('\n💡 Usage:'));
        console.log(chalk.gray(`   1. Include the CSS in your project`));
        console.log(chalk.gray(`   2. Copy the HTML where you want the component\n`));
        
    } catch (error) {
        spinner.fail('Failed to add component');
        console.error(chalk.red(error.message));
    }
}

// Interactive mode
async function interactiveMode() {
    showBanner();
    
    const spinner = ora('Loading components...').start();
    
    try {
        const data = await fetchComponents();
        spinner.stop();
        
        const categories = [...new Set(data.components.map(c => c.category))];
        
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'category',
                message: 'Select a category:',
                choices: ['All', ...categories]
            }
        ]);
        
        let components = data.components;
        if (answers.category !== 'All') {
            components = components.filter(c => c.category === answers.category);
        }
        
        const componentChoices = components.map(c => ({
            name: `${c.name} (${c.id})`,
            value: c.id
        }));
        
        const componentAnswer = await inquirer.prompt([
            {
                type: 'list',
                name: 'component',
                message: 'Select a component:',
                choices: componentChoices,
                pageSize: 15
            }
        ]);
        
        const formatAnswer = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'formats',
                message: 'Select output formats:',
                choices: [
                    { name: 'HTML + CSS (separate files)', value: 'separate', checked: true },
                    { name: 'Combined HTML file', value: 'combined' },
                    { name: 'React Component', value: 'react' }
                ]
            }
        ]);
        
        await addComponent(componentAnswer.component, {
            combined: formatAnswer.formats.includes('combined'),
            react: formatAnswer.formats.includes('react')
        });
        
    } catch (error) {
        spinner.fail('Interactive mode failed');
        console.error(chalk.red(error.message));
    }
}

// Helper: Convert to PascalCase
function toPascalCase(str) {
    return str.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join('');
}

// Helper: Generate React component
function generateReactComponent(component) {
    const componentName = toPascalCase(component.id);
    
    return `import React from 'react';
import './${component.id}.css';

/**
 * ${component.name}
 * From Shades By Jay UI Library
 * https://sithija-jayasinghe.github.io/Shades-by-Jay-UI-Library/
 */
const ${componentName} = ({ className = '', ...props }) => {
    return (
        <div className={\`shades-${component.id} \${className}\`} {...props}>
            {/* Component HTML converted to JSX */}
            ${convertHtmlToJsx(component.html)}
        </div>
    );
};

export default ${componentName};
`;
}

// Helper: Basic HTML to JSX conversion
function convertHtmlToJsx(html) {
    return html
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<!--[\s\S]*?-->/g, '{/* $& */}')
        .replace(/(\w+)="(\w+)"/g, '$1="$2"');
}

// CLI Program
program
    .name('shades-ui')
    .description('Download beautiful UI components from Shades By Jay library')
    .version(VERSION);

program
    .command('list [category]')
    .description('List all available components')
    .action(listComponents);

program
    .command('search <query>')
    .description('Search for components')
    .action(searchComponents);

program
    .command('add <component-id>')
    .description('Add a component to your project')
    .option('-d, --dir <directory>', 'Output directory', './components')
    .option('-c, --combined', 'Also create combined HTML file')
    .option('-r, --react', 'Also create React component')
    .action(addComponent);

program
    .command('interactive')
    .alias('i')
    .description('Interactive component picker')
    .action(interactiveMode);

// Default action
program.action(() => {
    showBanner();
    program.help();
});

program.parse(process.argv);

// Show help if no args
if (process.argv.length === 2) {
    showBanner();
    program.help();
}
