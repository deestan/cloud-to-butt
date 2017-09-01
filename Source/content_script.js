walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (   (node.tagName && node.tagName.toLowerCase() == 'input')
		|| (node.tagName && node.tagName.toLowerCase() == 'textarea')
	    || Array(node.classList).indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\ban enhanced\b/g, "a disgusting");
	v = v.replace(/\bAn enhanced\b/g, "A disgusting");
	v = v.replace(/\benhanced\b/g, "disgusting");
	v = v.replace(/\bEnhanced\b/g, "Disgusting");
	v = v.replace(/\binteractive\b/g, "annoying");
	v = v.replace(/\bInteractive\b/g, "Annoying");
	v = v.replace(/\brich\b/g, "shitty");
	v = v.replace(/\bRich\b/g, "Shitty");
	v = v.replace(/\bsolution\b/g, "hack");
	v = v.replace(/\bSolution\b/g, "Hack");
	v = v.replace(/\ban experience\b/g, "a bullshit");
	v = v.replace(/\bAn experience\b/g, "A bullshit");
	v = v.replace(/\bexperience\b/g, "bullshit");
	v = v.replace(/\bExperience\b/g, "Bullshit");
	
	textNode.nodeValue = v;
}
