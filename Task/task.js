function TaskSaver() {
    let task = document.getElementById('myInput').value;
    let words = localStorage.getItem("dawit");
      localStorage.setItem("dawit", words + "\n" + task);
    
      tasklist.innerHTML = localStorage.dawit;
      document.getElementById('myInput').value = null;
    }
    function TaskClear() {
      document.getElementById('myInput').value = null;
      window.localStorage.clear();
      location.reload();
    }