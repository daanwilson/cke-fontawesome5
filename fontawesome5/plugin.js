CKEDITOR.plugins.add('fontawesome5',{
icons:'fontawesome5',
init:function(editor){
editor.addCommand('fontawesome5', new CKEDITOR.dialogCommand('ckeditorFaDialog',{allowedContent:'span(!fa-*)'}));
editor.ui.addButton('fontawesome5',{label:'Font Awesome 5 Pro icons',command:'fontawesome5',toolbar:'insert',icon:this.path + 'icons/fontawesome5.png'});
CKEDITOR.dialog.add('ckeditorFaDialog', this.path + 'dialogs/fontawesome5.js');
CKEDITOR.document.appendStyleSheet(this.path + 'css/fontawesome5.css');

	if(editor.config.fontawesomePath){
		CKEDITOR.document.appendStyleSheet(editor.config.fontawesomePath);
		editor.addContentsCss(editor.config.fontawesomePath);
		
		/****
		/* code for generating icons available in font awesome version.
		/* copy paste the json in de dialogs/fontawesome5.js 
		*/
		
		/*
		json = editor.config.fontawesomePath.match(/.*\//)+'/metadata/icons.json';
			$.getJSON(json, function(json) {
				var icons  = {};
				for (var key in json){
					//console.log(key);
					var icon = json[key];
					icons[key] = {'label':icon['label'],'search':icon['search'].terms,'styles':icon['styles']};
				}
				let dataStr = JSON.stringify(icons).replace("'","\'");
												   
				let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
				let exportFileDefaultName = 'data.json';

				let linkElement = document.createElement('a');
				linkElement.setAttribute('href', dataUri);
				linkElement.setAttribute('download', exportFileDefaultName);
				linkElement.click();
			});
			
			*/
			

	}
}
});