 # ReSQL: JSON to Relational Mapper

ReSQL is a powerful web application that automatically converts JSON data into normalized relational database schemas. Whether you're working with API responses, configuration files, or complex nested data structures, ReSQL intelligently analyzes your JSON and generates clean, normalized database schemas with proper foreign key relationships.

**Privacy First**: All data processing happens locally on your machine. Your JSON data never leaves your device, ensuring complete privacy and security for sensitive information.

## What is ReSQL?

ReSQL transforms deeply nested JSON data into clean relational database formats with an intuitive graphical interface. It's designed for developers, data analysts, and anyone who needs to convert JSON data into structured database schemas.

## Key Features

### 🧠 Intelligent Schema Inference
- **Automatic Analysis**: Analyzes JSON structure to understand nested objects and arrays
- **Data Type Detection**: Automatically determines appropriate data types (VARCHAR, INTEGER, etc.)
- **Relationship Detection**: Identifies potential relationships between entities

### 🔗 Smart Foreign Key Detection
- **Deterministic Approach**: Creates foreign keys based on structural parent-child relationships
- **No Heuristics**: Avoids guesswork by using explicit relationship metadata
- **Referential Integrity**: Ensures data consistency across related tables

### 🗄️ Multiple SQL Dialects
- **ANSI SQL** (default)
- **PostgreSQL**
- **BigQuery**
- **Redshift**
- **MySQL**
- **SQL Server**
- **Oracle**
- **Snowflake**

### 🆔 Flexible ID Generation
- **Consecutive Integers**: Default option (0, 1, 2, ...) per table
- **UUIDs**: Generate universally unique identifiers for all primary keys

### 📊 Data Export Options
- **CSV Files**: Export normalized data as CSV files
- **SQL INSERT Statements**: Generate SQL scripts for data insertion
- **Python Scripts**: Generate Python code for data processing (coming soon)

### ⚡ Performance Optimized
- **Web Worker Processing**: Handles large datasets without blocking the UI
- **Real-time Progress**: Shows processing progress for large files

### 🎨 Interactive Visualization
- **Schema Visualization**: Visual representation of generated schema with table relationships
- **Data Preview**: Preview normalized data before export
- **Table Management**: Rename tables and customize schema structure

## How It Works

### 1. JSON Analysis
The application analyzes your JSON data structure to understand:
- Nested objects and arrays
- Data types and patterns
- Potential relationships between entities

### 2. Schema Normalization
- **Flattening**: Converts nested JSON into flat relational tables
- **Table Creation**: Generates tables for each distinct entity type
- **Column Inference**: Automatically determines appropriate data types
- **ID Generation**: Creates primary keys (consecutive integers or UUIDs) for tables without explicit IDs

### 3. Foreign Key Detection
- **Deterministic Approach**: Creates foreign keys based on structural parent-child relationships during flattening
- **No Heuristics**: Avoids guesswork by using explicit relationship metadata
- **Referential Integrity**: Ensures data consistency across related tables

### 4. SQL Generation
- **Dialect-Specific**: Generates SQL optimized for your chosen database system
- **Dependency Ordering**: Creates tables in the correct order to satisfy foreign key constraints
- **Data Type Mapping**: Maps inferred types to appropriate SQL data types for each dialect

## Use Cases

### API Data Migration
Convert API responses into database schemas for data warehousing or analytics.

### Configuration Management
Transform complex configuration files into structured database tables.

### Data Analysis
Prepare JSON data for analysis in relational database systems.

### Legacy System Integration
Convert JSON-based systems to relational database formats.

### Prototyping
Quickly generate database schemas from sample JSON data for application development.

## Getting Started

Ready to transform your JSON data? Let's get started with [Installation and Setup](./installation.md).
