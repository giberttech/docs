# Installation and Setup

ReSQL is available as both a web application and a desktop application. Choose the option that best fits your workflow.

## Web Application

The easiest way to use ReSQL is through the web application. Simply visit the [ReSQL website](https://resql.gilbert.cloud) and start using it immediately in your browser.

### System Requirements

- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **JavaScript Enabled**: Required for the application to function
- **Internet Connection**: For initial loading (offline use available after first load)

### Browser Compatibility

ReSQL uses modern web technologies and requires:
- **Web Workers**: For background processing of large datasets
- **File API**: For file upload functionality
- **Clipboard API**: For paste functionality (optional)

## Desktop Application

For offline use, better performance with large files, and native file system integration, download the desktop application.

### System Requirements

#### macOS
- **macOS 10.15** (Catalina) or later
- **Apple Silicon** (M1/M2) or **Intel** processor
- **4GB RAM** minimum
- **500MB** free disk space

#### Windows (coming soon)
- **Windows 10** or later
- **x64** processor
- **4GB RAM** minimum
- **500MB** free disk space

#### Linux (coming soon)
- **Ubuntu 18.04** or later (or equivalent)
- **x64** processor
- **4GB RAM** minimum
- **500MB** free disk space

### Download and Install

1. **Visit the [ReSQL website](https://software.gilbert.cloud/resql)**
2. **Download** the appropriate version for your operating system through the app store or download link.
3. **Install** following your system's standard installation process


## Configuration

### Application Settings

ReSQL can be configured through the Options menu in the application interface.

### File Size Limits

- **Web Application**: Limited by browser memory (typically 100MB-1GB depending on browser)
- **Desktop Application**: Limited by system RAM (can handle larger files)

### Performance Tips

1. **Use the desktop application** for files larger than 50MB
2. **Close other applications** when processing very large datasets
3. **Enable Web Workers** (default) for better performance in the browser
4. **Use sampling** for initial schema analysis on very large datasets

## Troubleshooting

### Common Issues

#### "Application won't start"
- Ensure you have a modern web browser
- Check that JavaScript is enabled
- Try clearing browser cache and cookies

#### "File upload fails"
- Check file size limits
- Ensure the file is valid JSON
- Try using the desktop application for large files

#### "Schema generation is slow"
- Large files may take time to process
- Use the progress indicator to monitor status
- Consider using the desktop application for better performance

#### "Export functionality not working"
- Check browser permissions for file downloads
- Ensure pop-up blockers are disabled
- Try using a different browser

### Getting Help

If you encounter issues:

1. **Check the documentation** for common solutions
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information about your problem
4. **Include sample JSON data** for bug reports (remove sensitive information)

### System Information

When reporting issues, please include:
- Operating system and version
- Browser version (for web application)
- ReSQL version
- Sample JSON data (if applicable)
- Error messages or screenshots

## Next Steps

Now that you have ReSQL installed, let's learn how to use it effectively. Continue to [Basic Usage](./basic-usage.md) to get started with your first JSON transformation.
