# Schema Evolution

Schema evolution is the process of updating your database schema when your JSON data structure changes over time. While ReSQL doesn't currently support automatic schema evolution, you can achieve this using Large Language Models (LLMs) to generate the necessary SQL migration statements.

## Using LLMs for Schema Evolution

### Step 1: Generate Before and After Schemas

Use ReSQL to generate schemas for both your old and new JSON data structures:

1. **Generate the original schema:**
   - Load your original JSON data into ReSQL
   - Generate the schema and export the SQL
   - Save this as your "before" schema

2. **Generate the new schema:**
   - Load your updated JSON data into ReSQL
   - Generate the new schema and export the SQL
   - Save this as your "after" schema

### Step 2: Use LLM to Generate Migration

Create a prompt that includes both schemas and asks for migration statements:

```
I have a database schema that needs to be updated. Please analyze the differences between the old and new schemas and generate the necessary SQL ALTER TABLE statements to migrate from the old schema to the new schema.

OLD SCHEMA:
[Paste your original schema SQL here]

NEW SCHEMA:
[Paste your new schema SQL here]

Please provide:
1. ALTER TABLE statements to add new columns
2. CREATE TABLE statements for new tables
3. Foreign key constraint additions

Assume the database is [your database type: PostgreSQL/MySQL/SQL Server/etc.]
```

## Example Workflow

### Original JSON Data
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

### Updated JSON Data
```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1-555-0123",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
      }
    }
  ]
}
```

### Generated Schemas

**Original Schema (Before):**
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);
```

**New Schema (After):**
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE address (
  id INTEGER PRIMARY KEY,
  street VARCHAR(255),
  city VARCHAR(255),
  zip VARCHAR(255),
  users_id INTEGER,
  FOREIGN KEY (users_id) REFERENCES users(id)
);
```

### LLM-Generated Migration
```sql
-- Add new phone column to users table
ALTER TABLE users ADD COLUMN phone VARCHAR(255);

-- Create new address table
CREATE TABLE address (
  id INTEGER PRIMARY KEY,
  street VARCHAR(255),
  city VARCHAR(255),
  zip VARCHAR(255),
  users_id INTEGER,
  FOREIGN KEY (users_id) REFERENCES users(id)
);
```

## Best Practices

1. **Test on sample data** before applying to production
2. **Include database type** in your LLM prompt
3. **Request validation queries** to verify the migration
4. **Consider data migration** for existing records
5. **Plan for rollback** in case of issues

## Next Steps

- Practice with sample data to understand the workflow
- Develop templates for common schema evolution patterns
- Consider automating the LLM interaction for frequent schema changes
