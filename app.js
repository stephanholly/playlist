$(document).ready(function() {
  $.ajax({
        url: "https://lit-fortress-6467.herokuapp.com/object", success: function(result){
          var arr = [];
          while(arr.length < 3){
              var randomnumber = Math.ceil(Math.random()*4);
              if(arr.indexOf(randomnumber) > -1) continue;
              arr[arr.length] = randomnumber;
          }
          var album = result.results[arr[0]].cover_art;
          $('.album1').css({'background': `url(images/${album}) no-repeat`, "background-size": "100%"});
          var album = result.results[arr[1]].cover_art;
            $('.album2').css({'background': `url(images/${album}) no-repeat`, "background-size": "100%"});
            var album = result.results[arr[2]].cover_art;
              $('.album3').css({'background': `url(images/${album}) no-repeat`, "background-size": "100%"});

              for (var i = 0; i < 5; i++) {
            $('.album-scroll').append('<div class="sample" id="'+ i +'" />')
              }

              for (var i = 0; i < 5; i++) {
                var pic = result.results[i].cover_art;
            $('#'+ i).css({'background': `url(images/${pic}) no-repeat`, "background-size": "100%"});
              }
        var artInfo;
        $(".sample").click(function() {
          newId = $(this).attr('id');
          artInfo = result.results[newId].artist + ": " + result.results[newId].title + ",<br>";
          $('.info').append(artInfo)
        })

        $("button[name='button2']").click(function() {
          $('.info').empty()
        })


        $("button[name='button3']").click(function() {
          var obj = {};
          var infoText =  $('.info').text()
          var arr1 = infoText.split(/[,:]+/)
          for (var i = 0; i < arr1.length-1; i+= 2) {
            obj[arr1[i]] = arr1[i+1].substring(1)
          }

          $.ajax({
              type: "POST",
              url: 'https://lit-fortress-6467.herokuapp.com/post',
              data: {"obj" : JSON.stringify(obj)},
              cache: false,
              success: function(result){
                  alert(result);
              }
          });
        })
}});

















});
