import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(prams) {

    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=' +prams.chamber+ '&subcommittee=false&apikey=' +key+ '&per_page=50&page=1';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
