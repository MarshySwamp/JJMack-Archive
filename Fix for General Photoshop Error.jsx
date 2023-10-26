// Note: If you receive the following error in later versions of Photoshop when running the "BatchUpdateSmartObject.jsx" script:

// Error: General Photoshop error occurred. This functionality may not be available in this version of Photoshop. - <no additional information available>: on line 578

// Then change line 327 from:

var templateName =  decodeURI(templateFile).replace(/\.[^\.]+$/, '');	// strip the extension off

// To:

var templateName = templateFile.replace(/^.+\//, '').replace(/\.[^\.]+$/, '');	// remove the path and strip the extension off
