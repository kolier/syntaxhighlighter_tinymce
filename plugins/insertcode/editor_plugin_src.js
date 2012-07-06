(function() {
	tinymce.create('tinymce.plugins.InsertCode', {

		init : function(ed, url) {
			ed.addCommand('mceInsertCode', function() {
				ed.windowManager.open({
					file : url + '/dialog.htm',
					width : 480,
					height : 320,
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			// Register example button
			ed.addButton('insertcode', {
			  title: 'Insert Code',
				cmd : 'mceInsertCode',
				image : url + '/img/code.png'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
			    cm.setActive('insertcode', n.nodeName == 'PRE');
			});
		},

		createControl : function(n, cm) {
			return null;
		},

		getInfo : function() {
			return {
				longname : 'Insert Code for SyntaxHighlighter',
				author : 'Kolier Li',
				authorurl : 'http://kolier.li',
				infourl: '',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('insertcode', tinymce.plugins.InsertCode);
})();