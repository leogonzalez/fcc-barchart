import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  Meteor.methods({
    "gdpData"(url){
      return HTTP.get(url);
    }
  });

});
