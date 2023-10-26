Archive of scripts from the late JJMack:

https://community.adobe.com/t5/photoshop-ecosystem-discussions/r-i-p-jjmack/m-p/12701028

https://web.archive.org/web/20220130105643/http://www.mouseprints.net/Photoshop.html

https://web.archive.org/web/20210419210422/http://www.mouseprints.net/old/dpr/PhotoCollageToolkit.html
__________

Note: BatchUpdateSmartObject.jsx

If you receive the following error in later versions of Photoshop:
Error: General Photoshop error occurred. This functionality may not be available in this version of Photoshop. - <no additional information available>: on line 578

Then change line 327 from:

var templateName =  decodeURI(templateFile).replace(/\.[^\.]+$/, '');	// strip the extension off

To:

var templateName = templateFile.replace(/^.+\//, '').replace(/\.[^\.]+$/, '');	// remove the path and strip the extension off
