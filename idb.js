window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

if (!window.indexedDB) {
  alert("there is no indexedDB");
  console.error("something went wrong, there is no window.indexedDB");
}

// weekCount, date, didWorkout, workoutMemo, foodMemo

let request = window.indexedDB.open("WorkoutDatabase", 1);
let db;
let tx; // transaction
let store;
let index;

// when opening a new database or when upgrading with new version
request.onupgradeneeded = function (e) {
  let db = request.result;
  // let store = db.createObjectStore("WorkoutStore", { keyPath: "qID" });
  store = db.createObjectStore("WorkoutStore", { autoIncrement: true });
  let index = store.createIndex("weekCount", "weekCount", {
    unique: false,
  });
};

request.onerror = function (e) {
  console.error("There was an error", e.target.erroCode);
};

request.onsuccess = function (e) {
  db = request.result; // db is already global;
  tx = db.transaction(["WorkoutStore"], "readwrite");
  store = tx.objectStore("WorkoutStore");
  index = store.index("weekCount");

  db.onerror = function (e) {
    console.error("Error", e.target.erroCode);
  };

  // for (let i = 0; i < 7; i++) {
  //   store.put({
  //     weekCount: 1,
  //     monDate: i + 1,
  //     didWorkout: false,
  //     workoutMemo: "",
  //     foodMemo: "",
  //   });
  // }

  // for (let i = 0; i < 7; i++) {
  //   store.put({
  //     weekCount: 2,
  //     monDate: i + 1,
  //     didWorkout: false,
  //     workoutMemo: "",
  //     foodMemo: "",
  //   });
  // }

  // for (let j = 1; j < 10; j++) {
  //   for (let i = 0; i < 7; i++) {
  //     store.put({
  //       weekCount: j,
  //       monDate: i + 1,
  //       didWorkout: false,
  //       workoutMemo: "",
  //       foodMemo: "",
  //     });
  //   }
  // }

  // let q1 = store.get(1);
  // let qs = index.get(1);

  // indexeddb is asynchronous
  // q1.onsuccess = function () {
  //   console.log(q1.result);
  // };

  // qs.onsuccess = function () {
  //   console.log(q1.result);
  // };

  tx.oncomplete = function () {
    db.close();
  };
};
