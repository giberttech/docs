# Advanced Features

ReSQL offers powerful advanced features for handling complex JSON structures and optimizing your database schemas.

## Complex JSON Handling

### Nested Object Flattening

ReSQL automatically flattens nested objects into separate tables with foreign key relationships.

**Example Input:**
```json
{
  "company": {
    "name": "Acme Corp",
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "employees": [
      {
        "name": "John Doe",
        "department": {
          "name": "Engineering",
          "manager": "Jane Smith"
        }
      }
    ]
  }
}
```

**Generated Schema:**
- `company` table: `id`, `name`
- `address` table: `id`, `street`, `city`, `country`, `company_id` (FK)
- `employees` table: `id`, `name`, `company_id` (FK)
- `department` table: `id`, `name`, `manager`, `employees_id` (FK)

### Array Processing

Arrays are automatically converted to separate tables with foreign key relationships to the parent table.

**Example Input:**
```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "hobbies": ["reading", "swimming", "coding"],
      "skills": [
        {"name": "JavaScript", "level": "expert"},
        {"name": "Python", "level": "intermediate"}
      ]
    }
  ]
}
```

**Generated Schema:**
- `users` table: `id`, `name`
- `hobbies` table: `id`, `value`, `users_id` (FK)
- `skills` table: `id`, `name`, `level`, `users_id` (FK)

### Complex Types Option

When "Allow complex types" is enabled, ReSQL preserves objects and arrays as JSON strings instead of flattening them.

**Benefits:**
- Preserves original JSON structure
- Faster processing for large datasets
- Useful for configuration data
- Maintains data integrity

**Use Cases:**
- Configuration files
- API responses with complex nested data
- Data that doesn't need relational queries
- Prototyping and development

## SQL Dialect Optimization

### Dialect-Specific Features

Each SQL dialect is optimized for its specific database system:

#### PostgreSQL
- Uses `JSONB` for complex types
- `TEXT` for strings
- `TIMESTAMP` for dates
- `NUMERIC` for numbers

#### MySQL
- Uses `JSON` for complex types
- `TEXT` for strings
- `DATETIME` for dates
- `DECIMAL(10,2)` for numbers

#### SQL Server
- Uses `NVARCHAR(MAX)` for strings
- `DATETIME2` for dates
- `DECIMAL(10,2)` for numbers
- `BIT` for booleans

#### BigQuery
- Uses `JSON` for complex types
- `STRING` for strings
- `DATETIME` for dates
- `NUMERIC` for numbers

#### Redshift
- Uses `SUPER` for complex types
- `VARCHAR(65535)` for strings
- `TIMESTAMP` for dates
- `NUMERIC` for numbers

### Data Type Mapping

ReSQL intelligently maps JSON data types to appropriate SQL types:

| JSON Type | ANSI SQL | PostgreSQL | MySQL | SQL Server | BigQuery | Redshift |
|-----------|----------|------------|-------|------------|----------|----------|
| string | VARCHAR(255) | TEXT | TEXT | NVARCHAR(MAX) | STRING | VARCHAR(65535) |
| number | DECIMAL(10,2) | NUMERIC | DECIMAL(10,2) | DECIMAL(10,2) | NUMERIC | NUMERIC |
| integer | BIGINT | BIGINT | BIGINT | BIGINT | INT64 | BIGINT |
| boolean | BOOLEAN | BOOLEAN | BOOLEAN | BIT | BOOL | BOOLEAN |
| date | DATE | TIMESTAMP | DATETIME | DATETIME2 | DATETIME | TIMESTAMP |
| array | VARCHAR(MAX) | JSONB | JSON | NVARCHAR(MAX) | JSON | SUPER |
| object | VARCHAR(MAX) | JSONB | JSON | NVARCHAR(MAX) | JSON | SUPER |

## ID Generation Strategies

### Consecutive Integer IDs (Default)

- **Format**: 0, 1, 2, 3, ...
- **Benefits**: Simple, efficient, human-readable
- **Use Cases**: Development, testing, small datasets
- **Storage**: 4-8 bytes per ID

### UUID Generation

- **Format**: `550e8400-e29b-41d4-a716-446655440000`
- **Benefits**: Globally unique, distributed systems friendly
- **Use Cases**: Production systems, microservices, data integration
- **Storage**: 16 bytes per ID

### Choosing the Right Strategy

**Use Consecutive Integers when:**
- Building simple applications
- Working with small datasets
- Need human-readable IDs
- Performance is critical

**Use UUIDs when:**
- Building distributed systems
- Need globally unique identifiers
- Integrating multiple data sources
- Security is important

## Performance Optimization

### Large Dataset Handling

ReSQL is optimized for handling large JSON files:

#### Sampling Strategy
- Automatically samples large datasets for schema analysis
- Configurable sample size (default: 1000 records)
- Full data processing after schema generation

#### Memory Management
- Web Worker processing for large files
- Streaming data processing
- Garbage collection optimization
- Progress monitoring and cancellation

#### Performance Tips
1. **Use the desktop application** for files >50MB
2. **Enable progress monitoring** for long operations
3. **Use sampling** for initial schema analysis
4. **Close other applications** when processing large files

### Processing Optimization

#### Chunk Size Configuration
- Default chunk size: 1000 records
- Adjustable based on available memory
- Larger chunks = faster processing, more memory usage
- Smaller chunks = slower processing, less memory usage

#### Yield Frequency
- Default yield every 5 operations
- Allows UI updates during processing
- Prevents browser freezing
- Configurable for different performance needs

## Schema Customization

### Table Renaming

ReSQL allows you to customize table names:

1. **Click the edit icon** next to any table name
2. **Enter a new name** following SQL naming conventions
3. **Press Enter** to save
4. **Foreign key references** are automatically updated

**Naming Conventions:**
- Use lowercase letters
- Use underscores for word separation
- Avoid reserved SQL keywords
- Keep names descriptive but concise

### Column Customization

While ReSQL automatically generates column names, you can understand the naming patterns:

#### Automatic Naming Rules
- **Root fields**: Keep original names
- **Nested objects**: Use parent name + field name
- **Arrays**: Use singular form of array name
- **Foreign keys**: Use referenced table name + "_id"

#### Examples
```json
{
  "user": {
    "name": "John",
    "profile": {
      "bio": "Developer"
    },
    "posts": ["Post 1", "Post 2"]
  }
}
```

**Generated Columns:**
- `user.name` → `name`
- `user.profile.bio` → `profile_bio`
- `user.posts` → `posts` table with `value` column
- Foreign key: `user_id` in `posts` table

## Export Options

### SQL Export Formats

#### Schema Only
- CREATE TABLE statements
- Foreign key constraints
- Indexes and constraints
- No data insertion

#### Schema + Data
- CREATE TABLE statements
- INSERT statements for all data
- Foreign key constraints
- Complete database setup

#### Data Only
- INSERT statements only
- Assumes tables already exist
- Useful for data migration
- Preserves referential integrity

### CSV Export Options

#### Individual Tables
- Export each table separately
- Preserve data types
- Include headers
- UTF-8 encoding

#### Individual Table Export
- Export each table separately as CSV
- Consistent naming convention
- Include headers and data types
- Ready for import into any database

### Python Export (Optional)

When enabled, ReSQL can generate Python scripts for data processing:

```python
import json
import pandas as pd

# Load the generated schema
schema = {
    "users": ["id", "name", "email"],
    "posts": ["id", "title", "content", "users_id"]
}

# Process your data
def process_data(json_data):
    # Your custom processing logic
    pass
```

## Error Handling and Validation

### JSON Validation

ReSQL performs comprehensive JSON validation:

#### Syntax Validation
- Valid JSON syntax
- Proper bracket matching
- Correct string escaping
- Valid number formats

#### Structure Validation
- Consistent object structures
- Array element consistency
- Data type consistency
- Circular reference detection

### Error Recovery

#### Graceful Degradation
- Continue processing valid parts
- Report errors for invalid sections
- Provide detailed error messages
- Suggest fixes for common issues

#### Error Reporting
- Line and column information
- Specific error descriptions
- Suggested solutions
- Context information

## Workflow Integration

### Batch Processing

ReSQL supports processing multiple files and can be integrated into your existing workflows:

#### Multiple Files
- Process multiple JSON files sequentially
- Generate consolidated schemas
- Merge related data structures
- Handle file dependencies

#### Automated Workflows
- Scheduled processing
- File system monitoring
- Database deployment
- Integration with existing tools

## Best Practices

### JSON Structure Design

1. **Use consistent field names** across objects
2. **Include unique identifiers** when possible
3. **Avoid deeply nested structures** (more than 3-4 levels)
4. **Use arrays for related data** rather than separate objects
5. **Keep object structures consistent** within arrays

### Schema Optimization

1. **Choose appropriate data types** for your use case
2. **Use foreign keys** to maintain referential integrity
3. **Consider indexing** for frequently queried columns
4. **Plan for data growth** when designing schemas
5. **Test with sample data** before production use

### Performance Considerations

1. **Start with small samples** for testing
2. **Use the desktop application** for large files
3. **Monitor memory usage** during processing
4. **Use appropriate ID generation** strategy
5. **Consider data partitioning** for very large datasets

## Troubleshooting Advanced Issues

### Complex Structure Problems

#### Circular References
- **Problem**: JSON contains circular references
- **Solution**: Use "Allow complex types" option
- **Alternative**: Restructure JSON to avoid circles

#### Inconsistent Data Types
- **Problem**: Same field has different types across objects
- **Solution**: ReSQL handles this automatically
- **Result**: Uses most permissive type (usually VARCHAR)

#### Very Deep Nesting
- **Problem**: JSON has too many nesting levels
- **Solution**: Use "Allow complex types" for deep levels
- **Alternative**: Flatten structure before processing

### Performance Issues

#### Memory Exhaustion
- **Problem**: Out of memory errors
- **Solution**: Use desktop application
- **Alternative**: Process smaller chunks

#### Slow Processing
- **Problem**: Very slow schema generation
- **Solution**: Use sampling for large datasets
- **Alternative**: Optimize JSON structure

#### Browser Freezing
- **Problem**: Browser becomes unresponsive
- **Solution**: Use Web Workers (enabled by default)
- **Alternative**: Use desktop application

## Next Steps

Now that you understand the advanced features, explore [Examples](./examples.md) for real-world use cases, or learn about [Schema Evolution](./schema-evolution.md) for handling changing data structures.
