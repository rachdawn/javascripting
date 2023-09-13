for (let input = 100; input <= 200; input++) {
  if (input % 3 === 0 && input % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (input % 4 === 0) {
    console.log("Lighthouse");
  } else if (input % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(input);
  }
}
