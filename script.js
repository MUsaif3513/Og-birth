
function generateCertificate() {
  document.getElementById("name").innerText = document.getElementById("inputName").value;
  document.getElementById("dob").innerText = document.getElementById("inputDOB").value;
  document.getElementById("mother").innerText = document.getElementById("inputMother").value;
  document.getElementById("father").innerText = document.getElementById("inputFather").value;
  document.getElementById("place").innerText = document.getElementById("inputPlace").value;

  const element = document.getElementById("certificate");
  html2pdf().from(element).save("Birth_Certificate.pdf");
}
