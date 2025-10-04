---
slug: resql-launch
title: ReSQL Launch
authors: [chris]
tags: [resql, json, database, launch, product]
---

# ReSQL Launches: Transform JSON into Relational Schemas

**November 1st, 2025** - I am excited to announce the launch of **ReSQL**, the powerful new tool that automatically converts JSON data into clean, normalized relational database schemas.

<!-- truncate -->

## What is ReSQL?

ReSQL is a web application that intelligently analyzes your JSON data and generates relational database schemas with proper foreign key relationships. Whether you're working with API responses, configuration files, or complex nested data structures, ReSQL makes it easy to understand and work with your data in a structured format.

## Key Features

- **🧠 Intelligent Schema Inference**: Automatically analyzes JSON structure and creates normalized relational tables
- **🔗 Smart Foreign Key Detection**: Deterministically identifies and creates foreign key relationships
- **🗄️ Multiple SQL Dialects**: Support for ANSI, PostgreSQL, BigQuery, Redshift, MySQL, SQL Server, Oracle, and Snowflake
- **🆔 Flexible ID Generation**: Choose between consecutive integer IDs or UUIDs for primary keys
- **📊 Data Export**: Export normalized data as CSV files or SQL INSERT statements
- **⚡ Performance Optimized**: Web Worker-based processing for large datasets
- **🔒 Privacy First**: All data processing happens locally on your machine

## Why I Built ReSQL

Working with JSON data in relational databases can be challenging. Developers often struggle with:

- Understanding the structure of complex nested JSON
- Manually creating database schemas
- Identifying relationships between data entities
- Converting JSON to normalized relational format

ReSQL solves these problems by automatically analyzing your JSON and generating clean, normalized database schemas with proper relationships.

## Getting Started

ReSQL is available as both a web application and desktop application:

- **Web Application**: Visit [resql.gilbert.cloud](https://resql.gilbert.cloud) to start using ReSQL immediately in your browser
- **Desktop Application**: [Download for offline use](https://software.gilbert.cloud/resql), better performance with large files, and native file system integration

## Privacy and Security

All data processing happens locally on your machine. Your JSON data *never leaves your device*, ensuring complete privacy and security for sensitive information. This makes ReSQL perfect for working with confidential data.

In the future we may offer additional data processing options, but at the moment all data processing either occurs in your browser, or in the locally installed application (powered by Electron).

## What's Next?

I'm already working on exciting new features:

- Enhanced schema evolution tools
- Python script generation
- Automated processing pipeline

Some of these will likely be paid features, but a free version will continue to remain available for the forseeable future!

## Try ReSQL Today

Ready to transform your JSON data into relational schemas? [Get started with ReSQL](/docs/resql/introduction) and see how easy it is to work with structured data.

---

*ReSQL is developed by Gilbert Software - modern software solutions to the data-driven world.*
