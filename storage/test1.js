$.ajax(
    type:'GET',
    url:"http://insightdb.dev.usfca.edu/",
    data:"format=json&id=1",
    success:function(feed) {
        document.write(feed);
    },
    dataType:'jsonp'
);

