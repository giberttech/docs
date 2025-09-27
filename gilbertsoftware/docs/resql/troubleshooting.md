# Troubleshooting

This guide helps you resolve common issues when using ReSQL.

## Common Issues

### JSON Input Problems

#### "Invalid JSON" Error

**Symptoms:**
- Red error message in the input area
- "Invalid JSON" status indicator
- Schema generation fails

**Common Causes:**
- Missing commas between objects
- Unmatched brackets or braces
- Incorrect string escaping
- Trailing commas

**Solutions:**
1. **Check syntax carefully:**
   ```json
   // ❌ Wrong - missing comma
   {
     "name": "John"
     "age": 30
   }
   
   // ✅ Correct
   {
     "name": "John",
     "age": 30
   }
   ```

2. **Validate your JSON:**
   - Use an online JSON validator
   - Check for proper bracket matching
   - Ensure all strings are properly quoted

3. **Check for trailing commas:**
   ```json
   // ❌ Wrong - trailing comma
   {
     "name": "John",
     "age": 30,
   }
   
   // ✅ Correct
   {
     "name": "John",
     "age": 30
   }
   ```

#### "File upload failed" Error

**Symptoms:**
- File upload button doesn't work
- Error message when selecting files
- File appears to upload but nothing happens

**Solutions:**
1. **Check file format:**
   - Ensure file has `.json` extension
   - Verify file contains valid JSON
   - Check file size (web app has limits)

2. **Browser compatibility:**
   - Use a modern browser (Chrome, Firefox, Safari, Edge)
   - Enable JavaScript
   - Check browser console for errors

3. **File size limits:**
   - Web app: ~100MB maximum
   - Desktop app: Limited by system RAM
   - Try smaller files first

#### "URL fetch failed" Error

**Symptoms:**
- URL input doesn't load data
- Network error messages
- CORS errors in browser console

**Solutions:**
1. **Check URL accessibility:**
   - Ensure URL returns valid JSON
   - Verify URL is publicly accessible
   - Test URL in browser directly

2. **CORS issues:**
   - Some servers block cross-origin requests
   - Use desktop application for local files
   - Contact server administrator

3. **Network problems:**
   - Check internet connection
   - Try different URLs
   - Use file upload instead

### Schema Generation Issues

#### "Schema generation failed" Error

**Symptoms:**
- Progress bar stops
- Error message appears
- No schema is generated

**Common Causes:**
- Circular references in JSON
- Inconsistent data structures
- Memory limitations
- Processing timeout

**Solutions:**
1. **Check for circular references:**
   ```json
   // ❌ Problematic - circular reference
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
   
   **Solution:** Use "Allow complex types" option or restructure JSON

2. **Simplify complex structures:**
   - Break down very nested objects
   - Use consistent field names
   - Avoid deeply nested arrays

3. **Use desktop application:**
   - Better memory management
   - More detailed error messages
   - Can handle larger files

#### "Processing timeout" Error

**Symptoms:**
- Progress bar stops moving
- "Timeout" error message
- Application becomes unresponsive

**Solutions:**
1. **Reduce file size:**
   - Use smaller sample data
   - Split large files into chunks
   - Remove unnecessary data

2. **Optimize JSON structure:**
   - Simplify nested objects
   - Use consistent data types
   - Remove redundant information

3. **Use appropriate settings:**
   - Enable "Allow complex types" for complex data
   - Use sampling for large datasets
   - Set appropriate SQL dialect in Options

#### "Out of memory" Error

**Symptoms:**
- Browser becomes slow or crashes
- "Out of memory" error message
- Application stops responding

**Solutions:**
1. **Use desktop application:**
   - Better memory management
   - Can handle larger files
   - More stable processing

2. **Reduce data size:**
   - Use smaller sample data
   - Remove unnecessary fields
   - Split large files

3. **Optimize browser:**
   - Close other tabs
   - Restart browser
   - Clear browser cache

### Export Issues

#### "Export failed" Error

**Symptoms:**
- Export buttons don't work
- No download starts
- Error message appears

**Solutions:**
1. **Check browser permissions:**
   - Allow pop-ups for the site
   - Check download permissions
   - Try different browser

2. **Verify data exists:**
   - Ensure schema is generated
   - Check that tables have data
   - Try exporting individual tables

3. **Browser compatibility:**
   - Use modern browser
   - Enable JavaScript
   - Check browser console

#### "Download not starting" Issue

**Symptoms:**
- Click export but nothing happens
- No download dialog appears
- File doesn't appear in downloads

**Solutions:**
1. **Check pop-up blockers:**
   - Disable pop-up blockers
   - Allow pop-ups for the site
   - Try different browser

2. **Check download folder:**
   - Verify download location
   - Check file permissions
   - Look for partially downloaded files

3. **Try different export format:**
   - Export as CSV instead of SQL
   - Try individual table exports
   - Use desktop application

### Performance Issues

#### "Application is slow" Problem

**Symptoms:**
- UI becomes unresponsive
- Slow response to clicks
- Progress bars move slowly

**Solutions:**
1. **Use desktop application:**
   - Better performance
   - More efficient processing
   - Can handle larger files

2. **Optimize data:**
   - Use smaller sample data
   - Simplify JSON structure
   - Remove unnecessary fields

3. **System optimization:**
   - Close other applications
   - Restart browser/application
   - Check available memory

#### "Large file processing" Issues

**Symptoms:**
- Very slow processing
- Browser becomes unresponsive
- Processing fails on large files

**Solutions:**
1. **Use sampling:**
   - Process smaller samples first
   - Use desktop application for full processing
   - Break large files into chunks

2. **Optimize settings:**
   - Enable "Allow complex types"
   - Use appropriate SQL dialect
   - Consider UUIDs for better performance

3. **System requirements:**
   - Ensure sufficient RAM
   - Use SSD storage
   - Close other applications

## Getting Help

### Before Contacting Support

1. **Check this documentation**
2. **Try the desktop application**
3. **Test with simpler data**
4. **Check browser console** for errors

### When Contacting Support

**Include the following information:**
- Operating system and version
- Browser version (for web app)
- ReSQL version
- Sample JSON data (remove sensitive information)
- Error messages or screenshots
- Steps to reproduce the issue

## Next Steps

If you've resolved your issue, continue with [Examples](./examples.md) for more use cases.
