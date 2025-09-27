# Examples and Use Cases

This section provides real-world examples of how to use ReSQL for common data transformation scenarios.

## E-commerce Data

### Online Store Product Catalog

**Input JSON:**
```json
{
  "products": [
    {
      "id": "prod_001",
      "name": "Wireless Headphones",
      "price": 99.99,
      "category": {
        "name": "Electronics",
        "parent": "Technology"
      },
      "reviews": [
        {
          "user": "customer_123",
          "rating": 5,
          "comment": "Great sound quality!"
        }
      ],
      "inventory": {
        "warehouse": "NYC",
        "quantity": 150,
        "last_updated": "2024-01-15"
      }
    }
  ]
}
```

**Generated Schema:**
- `products` table: `id`, `name`, `price`
- `category` table: `id`, `name`, `parent`, `products_id` (FK)
- `reviews` table: `id`, `user`, `rating`, `comment`, `products_id` (FK)
- `inventory` table: `id`, `warehouse`, `quantity`, `last_updated`, `products_id` (FK)

**Generated SQL (PostgreSQL):**
```sql
CREATE TABLE products (
  id VARCHAR(255) PRIMARY KEY,
  name TEXT,
  price NUMERIC(10,2)
);

CREATE TABLE category (
  id INTEGER PRIMARY KEY,
  name TEXT,
  parent TEXT,
  products_id VARCHAR(255),
  FOREIGN KEY (products_id) REFERENCES products(id)
);

CREATE TABLE reviews (
  id INTEGER PRIMARY KEY,
  user TEXT,
  rating INTEGER,
  comment TEXT,
  products_id VARCHAR(255),
  FOREIGN KEY (products_id) REFERENCES products(id)
);

CREATE TABLE inventory (
  id INTEGER PRIMARY KEY,
  warehouse TEXT,
  quantity INTEGER,
  last_updated DATE,
  products_id VARCHAR(255),
  FOREIGN KEY (products_id) REFERENCES products(id)
);
```

## Social Media Data

### User Posts and Interactions

**Input JSON:**
```json
{
  "users": [
    {
      "id": 1,
      "username": "alice_dev",
      "profile": {
        "display_name": "Alice Developer",
        "bio": "Full-stack developer",
        "location": "San Francisco"
      },
      "posts": [
        {
          "id": "post_001",
          "content": "Just shipped a new feature!",
          "created_at": "2024-01-15T10:30:00Z",
          "likes": ["user_2", "user_3"],
          "comments": [
            {
              "user": "user_2",
              "text": "Congratulations!",
              "created_at": "2024-01-15T11:00:00Z"
            }
          ]
        }
      ]
    }
  ]
}
```

**Generated Schema:**
- `users` table: `id`, `username`
- `profile` table: `id`, `display_name`, `bio`, `location`, `users_id` (FK)
- `posts` table: `id`, `content`, `created_at`, `users_id` (FK)
- `likes` table: `id`, `value`, `posts_id` (FK)
- `comments` table: `id`, `user`, `text`, `created_at`, `posts_id` (FK)

## Configuration Management

### Application Configuration

**Input JSON:**
```json
{
  "app_config": {
    "name": "MyApp",
    "version": "1.2.3",
    "database": {
      "host": "localhost",
      "port": 5432,
      "name": "myapp_db",
      "credentials": {
        "username": "admin",
        "password": "secret"
      }
    },
    "features": {
      "authentication": true,
      "logging": {
        "level": "info",
        "file": "/var/log/app.log"
      }
    },
    "environments": [
      {
        "name": "development",
        "database": {
          "host": "dev-db.example.com"
        }
      },
      {
        "name": "production",
        "database": {
          "host": "prod-db.example.com"
        }
      }
    ]
  }
}
```

**Generated Schema (with "Allow complex types" enabled):**
- `app_config` table: `id`, `name`, `version`
- `database` table: `id`, `host`, `port`, `name`, `credentials` (JSON), `app_config_id` (FK)
- `features` table: `id`, `authentication`, `logging` (JSON), `app_config_id` (FK)
- `environments` table: `id`, `name`, `database` (JSON), `app_config_id` (FK)

## Log Analysis

### Application Logs

**Input JSON:**
```json
{
  "logs": [
    {
      "timestamp": "2024-01-15T10:30:00Z",
      "level": "ERROR",
      "message": "Database connection failed",
      "context": {
        "user_id": 123,
        "request_id": "req_456",
        "service": "auth-service"
      },
      "stack_trace": [
        "Error: Connection timeout",
        "  at Database.connect (db.js:25:10)",
        "  at AuthService.authenticate (auth.js:15:5)"
      ]
    }
  ]
}
```

**Generated Schema:**
- `logs` table: `id`, `timestamp`, `level`, `message`
- `context` table: `id`, `user_id`, `request_id`, `service`, `logs_id` (FK)
- `stack_trace` table: `id`, `value`, `logs_id` (FK)

## Financial Data

### Transaction Records

**Input JSON:**
```json
{
  "transactions": [
    {
      "id": "txn_001",
      "amount": 150.00,
      "currency": "USD",
      "type": "purchase",
      "merchant": {
        "name": "Coffee Shop",
        "category": "Food & Beverage",
        "location": {
          "city": "San Francisco",
          "state": "CA"
        }
      },
      "card": {
        "last_four": "1234",
        "type": "credit"
      },
      "timestamp": "2024-01-15T14:30:00Z"
    }
  ]
}
```

**Generated Schema:**
- `transactions` table: `id`, `amount`, `currency`, `type`, `timestamp`
- `merchant` table: `id`, `name`, `category`, `transactions_id` (FK)
- `location` table: `id`, `city`, `state`, `merchant_id` (FK)
- `card` table: `id`, `last_four`, `type`, `transactions_id` (FK)

## Content Management

### Blog Posts and Comments

**Input JSON:**
```json
{
  "posts": [
    {
      "id": "post_001",
      "title": "Getting Started with ReSQL",
      "content": "ReSQL is a powerful tool for...",
      "author": {
        "name": "Jane Smith",
        "email": "jane@example.com"
      },
      "tags": ["tutorial", "database", "json"],
      "comments": [
        {
          "id": "comment_001",
          "author": "John Doe",
          "content": "Great tutorial!",
          "created_at": "2024-01-15T16:00:00Z",
          "replies": [
            {
              "author": "Jane Smith",
              "content": "Thank you!",
              "created_at": "2024-01-15T16:30:00Z"
            }
          ]
        }
      ],
      "published_at": "2024-01-15T09:00:00Z"
    }
  ]
}
```

**Generated Schema:**
- `posts` table: `id`, `title`, `content`, `published_at`, `tags` (JSON array)
- `author` table: `id`, `name`, `email`, `posts_id` (FK)
- `comments` table: `id`, `author`, `content`, `created_at`, `posts_id` (FK)
- `replies` table: `id`, `author`, `content`, `created_at`, `comments_id` (FK)

## Tips for Working with JSON Data

### Combining Multiple JSON Objects

When working with multiple JSON files or objects, you'll need to combine them to create a comprehensive schema. ReSQL only processes the fields that are present in your input data, so combining different objects ensures all fields are available in the final schema.

#### Using jq to Merge JSON Objects

Here are some useful jq commands for combining JSON data:

**Merge two JSON objects:**
```bash
# Combine two JSON files
jq -s '.[0] * .[1]' file1.json file2.json > combined.json
```

**Merge arrays of objects:**
```bash
# Combine arrays from different files
jq -s '.[0] + .[1]' users.json posts.json > combined.json
```

**Merge nested objects:**
```bash
# Deep merge objects (recursive)
jq -s 'reduce .[] as $item ({}; . * $item)' file1.json file2.json > combined.json
```

**Add fields to existing objects:**
```bash
# Add new fields to each object in an array
jq '.[] | . + {"new_field": "value"}' data.json > enhanced.json
```

**Combine objects with different structures:**
```bash
# Merge objects, keeping all fields from both
jq -s '.[0] as $a | .[1] as $b | $a + $b | .users = ($a.users // []) + ($b.users // [])' file1.json file2.json
```

### Understanding Array Processing

ReSQL handles different types of arrays differently:

#### Simple Arrays (Kept as Arrays)
Simple arrays of primitive values (strings, numbers, booleans) are preserved as arrays in the database:

**Input:**
```json
{
  "user": {
    "name": "John",
    "hobbies": ["reading", "swimming", "coding"],
    "scores": [85, 92, 78]
  }
}
```

**Generated Schema:**
- `user` table: `id`, `name`, `hobbies` (JSON array), `scores` (JSON array)

#### Arrays of Objects (Converted to Tables)
Arrays containing objects are automatically converted into separate tables with foreign key relationships:

**Input:**
```json
{
  "user": {
    "name": "John",
    "posts": [
      {"title": "Post 1", "content": "Content 1"},
      {"title": "Post 2", "content": "Content 2"}
    ]
  }
}
```

**Generated Schema:**
- `user` table: `id`, `name`
- `posts` table: `id`, `title`, `content`, `user_id` (FK)

#### Mixed Arrays
Arrays containing both primitives and objects are converted to tables:

**Input:**
```json
{
  "user": {
    "name": "John",
    "mixed_data": [
      "simple string",
      {"object": "value"},
      42
    ]
  }
}
```

**Generated Schema:**
- `user` table: `id`, `name`
- `mixed_data` table: `id`, `value` (VARCHAR), `user_id` (FK)

### Best Practices for Data Preparation

1. **Combine related data** before processing to ensure comprehensive schemas
2. **Use consistent field names** across different JSON objects
3. **Include unique identifiers** when possible for better relationships
4. **Consider array types** - simple arrays vs. arrays of objects
5. **Test with sample data** before processing large datasets

## Common Patterns

### 1. Master-Detail Relationships
```json
{
  "orders": [
    {
      "id": 1,
      "customer": "John Doe",
      "items": [
        {"product": "Widget", "quantity": 2},
        {"product": "Gadget", "quantity": 1}
      ]
    }
  ]
}
```

### 2. Hierarchical Data
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Electronics",
      "children": [
        {"id": 2, "name": "Computers"},
        {"id": 3, "name": "Phones"}
      ]
    }
  ]
}
```

### 3. Tagging Systems
```json
{
  "articles": [
    {
      "id": 1,
      "title": "Article Title",
      "tags": ["tech", "programming", "web"]
    }
  ]
}
```

### 4. Configuration Data
```json
{
  "settings": {
    "app": {
      "name": "MyApp",
      "version": "1.0.0"
    },
    "database": {
      "host": "localhost",
      "port": 5432
    }
  }
}
```

## Troubleshooting Examples

### Common Issues and Solutions

#### 1. Inconsistent Data Types
**Problem**: Same field has different types across objects
```json
{
  "users": [
    {"id": 1, "age": 25},
    {"id": 2, "age": "unknown"}
  ]
}
```
**Solution**: ReSQL handles this automatically by using the most permissive type

#### 2. Missing Identifiers
**Problem**: Objects don't have unique identifiers
```json
{
  "products": [
    {"name": "Widget", "price": 10.99},
    {"name": "Gadget", "price": 15.99}
  ]
}
```
**Solution**: ReSQL automatically generates ID columns

#### 3. Circular References
**Problem**: JSON contains circular references
```json
{
  "users": [
    {
      "id": 1,
      "name": "John",
      "friends": [
        {"id": 2, "name": "Jane", "friends": [{"id": 1}]}
      ]
    }
  ]
}
```
**Solution**: Use "Allow complex types" option or restructure the JSON

## Next Steps

Now that you've seen real-world examples, learn about [Schema Evolution](./schema-evolution.md) for handling changing data structures, or check out [Troubleshooting](./troubleshooting.md) for common issues and solutions.
