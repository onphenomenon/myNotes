angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Notes) {
  $scope.doUpdate = function() {
    $ionicDeploy.update().then(function(res) {
      console.log("Ionic Deploy: Update Success! ", res);
    }, function(err) {
      console.log('Ionic Deploy: Update error! ', err);
    }, function(prog) {
      console.log('Ionic Deploy: Progress ... ', prog);
    });
  };

  //Check Ionic Deploy for new code
  $scope.checkForUpdates = function() {
    console.log('Ionic Deploy: Checking for updates ');
    $ionicDeploy.check().then(function(hasUpdate) {
      console.log('Ionic Deploy: Update available: '+ hasUpdate);
      $scope.hasUpdate = hasUpdate;
    }, function(err) {
      console.error('Ionic Deploy: Unable to check for updates ', err);
    });
  };

  $scope.save = function(){
    console.log("entering save function ", this.text)
    if(this.title.length > 0 && this.text.length > 0){
      console.log("Note object before: ", this.text);
      Notes.save(this.title, this.text);
      this.text = '';
      this.title = '';
    }

  }

  $scope.title = ''
  $scope.text = '';
  $scope.number = function() {
    return Notes.length();
  }
})
.controller('NotesCtrl', function($scope, Notes) {

  $scope.notes = Notes.all();
  $scope.remove = function(note) {
    Notes.remove(note);
  };


})

.controller('NoteDetailCtrl', function($scope, $stateParams, Notes, $location) {
  $scope.note = Notes.get($stateParams.noteId);



  $scope.remove = function() {
    console.log("deleting ", this.note);
    Notes.remove(this.note);
    $location.path('/tab/notes');

  };

  $scope.save = function(){
    console.log("entering save function ", this.note.lastNote)
    if(this.note.lastNote.length > 0){
      console.log("Note object before: ", this.note.lastNote);
      Notes.save(this.note.name, this.note.lastNote);
    }

  }



})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
