var options = {
thumbnailData:[
    {
        title: 'See Tutorials',
        number: 32,
        header: 'Learn React',
        description: 'React is a fast dynamic library for making fast SPA,React is a fast dynamic library for making fast SPA,',
        imageUrl: 'http://formatjs.io/img/react.svg'   
    },
    {
        title: 'See Tutorials',
        number: 25,
        header: 'Learn Rredux',
        description: 'Redux is a framework for react which we need,Redux is a framework for react which we need,',
        imageUrl: 'https://docs.reduxframework.com/wp-content/uploads/sites/4/2014/03/logo.png'   
    }
    
    ]
};

// react please render this class
    var element = React.createElement(ThumbnailList, options);

//react after you render this class, please place it in my body tag
    React.render(element, document.querySelector('.container'));
var Badge = React.createClass({displayName: "Badge",
    
    render: function(){
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
                  this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
               )
    }
}); 
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function(){
        var list = this.props.thumbnailData.map(function(thumbailProps){
            return React.createElement(Thumbnail, React.__spread({},  thumbailProps))
        });
        
        return React.createElement("div", null, 
            list
        )
    }
}); 
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
        return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
    }
});