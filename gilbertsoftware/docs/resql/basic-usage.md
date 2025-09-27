# Basic Usage

This guide will walk you through using ReSQL to transform your first JSON file into a relational database schema.

## Getting Started

### 1. Launch ReSQL

- **Web Application**: Visit the ReSQL website
- **Desktop Application**: Launch from your applications folder

### 2. Understanding the Interface

The ReSQL interface is divided into two main panels:

- **Left Panel**: JSON Input area
- **Right Panel**: Schema Visualization and Results

## Input Methods

ReSQL supports multiple ways to input your JSON data:

### Method 1: Paste JSON
1. Copy your JSON data to the clipboard
2. Click the **"Paste"** button in the JSON Input panel
3. The JSON will be automatically loaded and validated

### Method 2: Upload File
1. Click the **"Upload"** button
2. Select a `.json` file from your computer
3. The file will be loaded and processed automatically

### Method 3: Drag and Drop
1. Drag a JSON file from your file explorer
2. Drop it onto the JSON Input area
3. The file will be automatically loaded

### Method 4: URL Input
1. Click the **"URL"** tab in the input area
2. Enter a URL that returns JSON data
3. Click **"Fetch"** to load the data

## Basic Workflow

### Step 1: Input Your JSON Data

Let's start with a simple example. Paste this JSON into the input area:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "posts": [
        {
          "title": "Hello World",
          "content": "This is my first post",
          "tags": ["tech", "programming"]
        }
      ]
    }
  ]
}
```

### Step 2: Configure Options (Optional)

Click the **"Options"** button to configure how your JSON is processed:

- **Allow complex types**: Keep objects/arrays as JSON strings
- **Add foreign keys**: Include foreign key constraints
- **Use UUIDs for IDs**: Generate UUIDs instead of integers
- **SQL dialect**: Choose your target database

For this example, we'll use the default settings.

### Step 3: Generate Schema

Click the **"Analyze"** button to process your JSON data. ReSQL will:

1. Analyze the JSON structure
2. Create normalized tables
3. Generate foreign key relationships
4. Display the results

### Step 4: Review Results

After processing, you'll see:

- **Schema Visualization**: Tables and their relationships
- **Table Details**: Columns, data types, and constraints
- **Record Counts**: Number of records in each table

## Understanding the Results

### Generated Tables

For our example JSON, ReSQL creates three tables:

1. **`users`** - Main user information
2. **`posts`** - User posts with foreign key to users
3. **`tags`** - Post tags with foreign key to posts

### Table Structure

Each table shows:
- **Columns**: Field names and data types
- **Primary Keys**: Automatically generated ID columns
- **Foreign Keys**: Relationships to other tables
- **Constraints**: NOT NULL, data types, etc.

### Visual Relationships

The schema visualization shows:
- **Table boxes** with column information
- **Connection lines** indicating foreign key relationships
- **Color coding** for different data types

## Exporting Results

### Export SQL Schema

1. Click the **"Export SQL"** button
2. Download the generated SQL file (uses the SQL dialect set in Options)

### Export Data as CSV

1. Click the **"Export CSV"** button next to any table
2. Download the CSV file with normalized data

## Advanced Features

### Table Renaming

- Click the **edit icon** next to any table name
- Enter a new name
- Press Enter to save

### Data Preview

- Click the **"Preview"** button next to any table
- View the first 100 rows of normalized data
- Close the preview when done

### Schema Options

Access advanced options by clicking **"Options"**:

#### Allow Complex Types
- **Disabled** (default): Flattens nested objects into separate tables
- **Enabled**: Keeps complex structures as JSON strings

#### Add Foreign Keys
- **Enabled** (default): Creates foreign key constraints
- **Disabled**: Creates ID columns without constraints

#### Use UUIDs for IDs
- **Disabled** (default): Generates consecutive integer IDs
- **Enabled**: Generates UUIDs for all primary keys

#### SQL Dialect
Choose from:
- ANSI SQL (default)
- PostgreSQL
- BigQuery
- Redshift
- MySQL
- SQL Server
- Oracle
- Snowflake

## Tips for Success

### JSON Structure Best Practices

1. **Use consistent field names** across objects
2. **Include unique identifiers** when possible
3. **Avoid deeply nested structures** (more than 3-4 levels)
4. **Use arrays for related data** rather than separate objects

### Performance Optimization

1. **Start with small samples** for testing
2. **Use the desktop application** for large files (>50MB)
3. **Enable progress monitoring** for long operations
4. **Cancel operations** if they take too long

### Common Patterns

#### E-commerce Data
```json
{
  "orders": [
    {
      "id": 1,
      "customer": { "name": "John", "email": "john@example.com" },
      "items": [
        { "product": "Widget", "quantity": 2, "price": 10.99 }
      ]
    }
  ]
}
```

#### Social Media Data
```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "posts": [
        {
          "content": "Hello world!",
          "likes": ["user2", "user3"],
          "comments": [
            { "user": "user2", "text": "Great post!" }
          ]
        }
      ]
    }
  ]
}
```

## Troubleshooting

### Common Issues

#### "Invalid JSON" Error
- Check for syntax errors (missing commas, brackets)
- Validate your JSON using an online validator
- Ensure proper escaping of special characters

#### "Schema generation failed"
- Try with a smaller sample of your data
- Check for circular references in your JSON
- Ensure your JSON has a consistent structure

#### "Export not working"
- Check browser download permissions
- Try using a different browser
- Ensure pop-up blockers are disabled

### Getting Help

If you encounter issues:
1. Check the error message for specific guidance
2. Try with a simpler JSON structure
3. Use the desktop application for better error handling
4. Contact support with your specific use case

## Next Steps

Now that you understand the basics, explore [Advanced Features](./advanced-features.md) to learn about more powerful capabilities, or check out [Examples](./examples.md) for real-world use cases.
