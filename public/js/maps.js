function initialize() {
                var myLatlng = new google.maps.LatLng(34.040045, -117.919571);
                var mapOptions = {
                  scaleControl: true,  
                  center: new google.maps.LatLng(34.040045, -117.919571),
                  zoom: 15
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Hello World!'
                });

            }
            google.maps.event.addDomListener(window, 'load', initialize);