# fontawesome5
Font Awesome 5 Pro Icons plugin for CKeditor 4.
Includes all the icons of Font-awesome-pro 5.13.0

Installation:
- Add the fontawesome5 directory in the plugins folder of CKeditor 4.
- Add 'fontawesome5' item to your toolbar
- Add 'fontawesome5' item to your extra plugins
- Configure the fontawesome settings in: config.fontawesome : {}
- config.allowedContent = true;
- $removeEmpty['span'] = false;
Thats it.

## Options:
- 'path':'path-to-you-all.css-file', 
- 'version': '', (default: 5.13.0) 
- 'edition': 'free|pro' (default: pro) 
- 'element': '', (default span) 
 
Example:

- config.toolbar = [['Source', '-', 'NewPage', '-', 'Templates','fontawesome5']]; 
- config.extraPlugins = 'fontawesome5'; 
- config.fontawesome = {'path':'/path/to/your/font-awesome-5/all.css':'version':'5.13.0','edition':'pro','element':'i'};
- CKEDITOR.replace(editorname, config); 
- CKEDITOR.dtd.$removeEmpty['span'] = false;
- CKEDITOR.dtd.$removeEmpty['i'] = false;

Please let me know when something is not working.
If you like the plugin, please by me a beer ;)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UB5R3E9XWVWDQ)

![Preview](https://ckeditor.com/cke4/sites/default/files/styles/screenshot/public/fontawesome5/Screenshot_1_0.png)


