window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

if (!window.indexedDB) {
  alert("there is no indexedDB");
  console.error("something went wrong, there is no window.indexedDB");
}

// qID, questionText, correctAnswer, studentAnswer, result
let request = window.indexedDB.open("QuizQuestDatabase", 1);
let db;
let tx; // transaction
let store;
let index;

// when opening a new database or when upgrading with new version
request.onupgradeneeded = function (e) {
  let db = request.result;
  let store = db.createObjectStore("QuestionsStore", { keyPath: "qID" });
  // store = db.createObjectStore("QuestionsStore", {autoIncrement: true});
  let index = store.createIndex("questionText", "questionText", {
    unique: false,
  });
};

request.onerror = function (e) {
  console.error("There was an error", e.target.erroCode);
};

request.onsuccess = function (e) {
  db = request.result; // db is already global;
  tx = db.transaction(["QuestionsStore"], "readwrite");
  store = tx.objectStore("QuestionsStore");
  index = store.index("questionText");

  db.onerror = function (e) {
    console.error("Error", e.target.erroCode);
  };

  //   store.put({
  //     qID: 1,
  //     questionText: "The sky is blue",
  //     correctAnswer: true,
  //     studentAnswer: true,
  //     result: true,
  //   });

  //   store.put({
  //     qID: 2,
  //     questionText: "The sky is blue",
  //     correctAnswer: true,
  //     studentAnswer: true,
  //     result: true,
  //   });

  let q1 = store.get(1);
  let qs = index.get("The sky is blue");

  // indexeddb is asynchronous
  q1.onsuccess = function () {
    console.log(q1.result);
    console.log(q1.result.questionText);
  };

  qs.onsuccess = function () {
    console.log(qs.result);
  };

  tx.oncomplete = function () {
    db.close();
  };
};
