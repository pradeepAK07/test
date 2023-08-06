for (var i = 0; i < 3; i++) {
  function abc(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  abc(i);
}
