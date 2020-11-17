window.addEventListener('load', function() {
	target_security();
});


/**
 * Target Security
 * Adds the correct target method to a link
 */
function target_security(){

	var aTags = document.getElementsByTagName('a');
	
	if (aTags){
		let aTagsMap = Array.prototype.slice.call(aTags);

		aTagsMap.map(function(item){
			if (item.target === '_blank'){
				item.setAttribute('rel','noreferrer noopener');
				item.setAttribute('aria-label', 'This is an external link (opens in a new tab)');
			}
		})
	}
}




