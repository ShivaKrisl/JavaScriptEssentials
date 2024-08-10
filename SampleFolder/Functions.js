function calculateArea() {
  let length = parseFloat(document.getElementById("length").value);
  let breadth = parseFloat(document.getElementById("breadth").value);

  var area = length * breadth;
  document.getElementById(
    "result"
  ).innerHTML = `The area of the rectangle is: ${area}`;
}
