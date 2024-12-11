# Remove Announcement Chrome Extension

## Overview
The **Remove Announcement** Chrome extension allows users to hide or show a specific announcement on Xendit pages. This extension provides a toggle button to control the visibility of the announcement.

## Features
- Automatically hides the announcement on Xendit pages based on user preference.
- Provides a popup button to toggle the visibility of the announcement.

## Installation
1. Clone the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on the "Load unpacked" button and select the directory where you cloned the repository.

## Usage
1. Navigate to a Xendit page.
2. Click on the extension icon in the Chrome toolbar.
3. Use the "Show/Hide" button in the popup to toggle the visibility of the announcement.

## Files
- `manifest.json`: Defines the extension's permissions, background script, and popup.
- `background.js`: Contains the logic to hide/show the announcement based on the user's preference.
- `popup.html`: The HTML for the popup interface.
- `popup.js`: The JavaScript for the popup interface to handle the toggle button.

## Permissions
- `scripting`: Allows the extension to inject scripts into the page.
- `activeTab`: Grants access to the currently active tab.
- `storage`: Enables the extension to store user preferences.
- `host_permissions`: Specifies the URLs the extension can interact with.

## License
This project is licensed under the MIT License.