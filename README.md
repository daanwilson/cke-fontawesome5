# fontawesome5
Font Awesome 5 Pro Icons plugin for CKeditor 4.
Includes all the icons of Font-awesome-pro 5.13.0

Installation:
- Add the fontawesome5 directory in the plugins folder of CKeditor 4.
- Add 'fontawesome5' item to your toolbar
- Add 'fontawesome5' item to your extra plugins
- Point 'config.fontawesomePath' to your all.css file of font-awesome pro 5 dir.
- config.allowedContent = true;
- $removeEmpty['span'] = false;
Thats it.

Example:

config.toolbar = [['Source', '-', 'NewPage', '-', 'Templates','fontawesome5']];
config.extraPlugins = 'fontawesome5';
config.fontawesomePath = '/path/to/your/font-awesome-5/all.css'
CKEDITOR.replace(editorname, config);
CKEDITOR.dtd.$removeEmpty['span'] = false;

Please let me know when something is not working.
If you like the plugin, please by me a beer ;)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UB5R3E9XWVWDQ)


