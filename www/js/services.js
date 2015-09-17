angular.module('starter.services', [])

.factory('Notes', function($localStorage) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var storage = $localStorage.$default({
    notes: [],
    id: 0
  })
  // var notes = $localStorage.$default([{
  //   id: 0,
  //   name: 'Ben Sparrow',
  //   lastText: 'You on your way?',
  //   face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  // }])
  // var chats = [{
  //   id: 0,
  //   name: 'Ben Sparrow',
  //   lastText: 'You on your way?',
  //   face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  // }, {
  //   id: 1,
  //   name: 'Max Lynx',
  //   lastText: 'Hey, it\'s me',
  //   face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  // }, {
  //   id: 2,
  //   name: 'Adam Bradleyson',
  //   lastText: 'I should buy a boat',
  //   face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  // }, {
  //   id: 3,
  //   name: 'Perry Governor',
  //   lastText: 'Look at my mukluks!',
  //   face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  // }, {
  //   id: 4,
  //   name: 'Mike Harrington',
  //   lastText: 'This is wicked good ice cream.',
  //   face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  // }];

  return {
    all: function() {
      console.log(storage.notes);
      return storage.notes;
    },
    length: function(){
      console.log(storage.notes.length)
      return storage.notes.length;
    },
    remove: function(note) {
      notes.splice(storage.notes.indexOf(note), 1);
    },
    get: function(noteId) {
      for (var i = 0; i < storage.notes.length; i++) {
        if (storage.notes[i].id === parseInt(noteId)) {
          return storage.notes[i];
        }
      }
      return null;
    },
    save: function(newTitle, newText){
      var note = {
        id: storage.id++,
        name: newTitle,
        lastNote: newText,
        face: 'http://loremflickr.com/320/240'
      }
      storage.notes.push(note);
      console.log("Notes array ", storage.notes);
    }
  };
});
