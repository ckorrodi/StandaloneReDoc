$.getJSON('https://www90.e-goi.com/api/swagger.json', function(data) {
  //Remove from paths
  $.each( data.paths, function( pathKey, value ){
      if(pathKey.startsWith('/internal')){
        delete data.paths[pathKey];
      }
  });
  //Remove from tags 
  $.each( data.tags, function( tagKey, value ){
      if(value.name.startsWith('internal')){
        delete data.tags[tagKey];
      }
  });
  if(window.location.href.endsWith('?json'))
  {
    window.location.href='?data='+JSON.stringify(data);
  }
});