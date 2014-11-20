$(function() {

  var consumer_secret = 'kFCULt_EGevkVMkFYtjEZdqqflU'
    , token_secret = 'hEVEtM2PT3PWDRFbr9tggHOsImY'
    , resultsSource = $('#template-results').html()
    , results = Handlebars.compile(resultsSource)
    , corsUrl = 'http://cors.movableink.com/' 
    , yelpSearchApiUrl = "api.yelp.com/v2/search"
    , queryString = window.location.href.slice(window.location.href.indexOf('?') + 1)
    , oauth = OAuth({
        consumer: {
          public: 'EN9Q81kTEHTcndiB5QX2ig',
          secret: 'kFCULt_EGevkVMkFYtjEZdqqflU'
        },
        signature_method: 'HMAC-SHA1'
      })
    , request_data = {
        url: 'http://' + yelpSearchApiUrl + '?' + queryString,
        method: 'GET',
        data: {
          status: 'trying this'
        }
      }
    , token = {
      public: '_kD97YnU0-QiGDIi4xxpxkyRwPXgHhiL',
      secret: 'hEVEtM2PT3PWDRFbr9tggHOsImY'
    } 

  $.ajax({
    type: "GET",
    url: corsUrl + yelpSearchApiUrl + '?' + queryString,
    data: oauth.authorize(request_data, token),
  }).done(function(data) {
    $('#js-results').append(results(data))
  });

});
