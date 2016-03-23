function loadDB(USFID)
{
  // Display a loading icon in our display element
  $('#feed').html('<span><img src="img/usflogotrans.png" /></span>');

  $.ajax({
    type:'GET',
    url:"http://api.flickr.com/services/feeds/photos_public.gne",
    data:"id="+flickrid+"&lang=en-us&format=json&jsoncallback=?",
    success:function(feed) {
      // Create an empty array to store images
      var thumbs = [];

      // Loop through the items
      for(var i=0, l=feed.items.length; i < l && i < 16; ++i) 
      {
        // Manipulate the image to get thumb and medium sizes
        var img = feed.items[i].media.m.replace(
          /^(.*?)_m\.jpg$/, 
          '<a href="$1.jpg"><img src="$1_s.jpg" alt="" /></a>'
        );

        // Add the new element to the array
        thumbs.push(img);
      }

      // Display the thumbnails on the page
      $('#feed').html(thumbs.join(''));

      // A function to add a lightbox effect
      addLB();
    },
    dataType:'jsonp'
  });
}
