var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
	thumbnailData: [{
		title: 'Show Courses',
		number: 12,
		description: 'React is fantastic new library for making fast dynamic pages. React is fantastic new library for making fast dynamic pages.',
		header: 'Learn React',
		imageUrl: 'http://red-badger.com/blog/wp-content/uploads/2015/04/react-logo-1000-transparent.png'
	},
	{
		title: 'Show Courses',
		number: 25,
		description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
		header: 'Learn Gulp',
		imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
	}]
};

var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.container'));
