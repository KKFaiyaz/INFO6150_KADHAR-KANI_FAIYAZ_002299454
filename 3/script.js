//Title constructor function that creates a Title object
function Title(t1) { 
  this.mytitle = t1;
}

Title.prototype.getName = function () { 
  return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
var table = document.getElementById("myTable");

var edit = false;
var headersFlag = false;
var anyCheckboxChecked = false;
var openCheckBoxes = 0;

var updatePopup = document.getElementById('popup');

var copyRowInfo = []
copyRowInfo['tr_1_Info'] = table.lastElementChild.lastElementChild.previousElementSibling;

copyRowInfo['tr_2_Info'] = table.lastElementChild.lastElementChild;

copyRowInfo['student'] = copyRowInfo['tr_1_Info'].children[1].innerHTML;
copyRowInfo['advisor'] = copyRowInfo['tr_1_Info'].children[2].innerHTML;

function expandCollapseDropDown() {
  var dropDownButton = document.querySelectorAll('#myTable img');

  dropDownButton.forEach(function (image) {
    image.addEventListener("click", function() {
      var dropDownContent = this.parentElement.parentElement.nextElementSibling;
      dropDownContent.classList.toggle("dropDownTextArea");
    })
  });
}

function disableEnablesubmit(element) {
  var submit = document.getElementById("button");
  var checkboxes = element.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        anyCheckboxChecked = Array.from(checkboxes).some(function(checkbox) {
            return checkbox.checked;
        });

        if (checkbox.checked) {
          openCheckBoxes++;
        }
        else {
          openCheckBoxes--;
        }

        if (anyCheckboxChecked == true) {
          submit.disabled = false;
          createNewHeaders();

          if (checkbox.checked) {
            checkbox.parentElement.parentElement.style.backgroundColor = "yellow";
            newButtonHandler(checkbox);
          }
          else {
            checkbox.parentElement.parentElement.style.backgroundColor = "white";
            deleteNewButtonHandler(checkbox);
          }
        }
        else {
          submit.disabled = true;
          checkbox.parentElement.parentElement.style.backgroundColor = "white";
          deleteNewButtonHandler(checkbox);
          removeNewHeaders();
        }
    });
  });
}

function deleteButtonClicked(deleteButton) {
  var currentTRow = deleteButton.parentElement.parentElement;
  var Student = currentTRow.firstElementChild.nextElementSibling.innerHTML;
  var submit = document.getElementById("button");

  Student = Student.split(' ')[1];
  setTimeout(() => {
    alert('Student ' + Student + ' Record deleted successfully');
  }, 200);
  currentTRow.parentElement.removeChild(currentTRow.nextElementSibling);
  currentTRow.parentElement.removeChild(currentTRow);

  openCheckBoxes--;
  console.log(openCheckBoxes);

  if (openCheckBoxes < 1) {
    submit.disabled = true;
    removeNewHeaders();
  }

}

function editClicked(edit) {
  var currentTRow = edit.parentElement.parentElement;

  displayPopup();

  var student = currentTRow.querySelector('td:nth-child(2)').textContent;
  var popupHeading = "<h3>Edit details of " + student + "</h3>";

  var popupTextContent = document.getElementById('popupTextContent');

  updatePopup.firstElementChild.innerHTML = popupHeading;
  currentTRow.querySelectorAll('td').forEach((cell, cellIndex) => {
    if (cellIndex > 0) {
      popupTextContent.innerHTML += `<p>${cell.textContent}</p>`;
    }
  });
}


function displayPopup() {
  document.getElementById("popup").style.display = "block";
  var popupTextContent = document.getElementById('popupTextContent');
  popupTextContent.innerHTML = "";
}

function cancelPopup() {
  var popupTextContent = document.getElementById('popupTextContent');
  popupTextContent.innerHTML = "";
  document.getElementById("popup").style.display = "none";
}

function updatePopup() {
  var popupTextContent = document.getElementById('popupTextContent');
  alert(popupTextContent.firstElementChild.innerHTML + " data updated successfully");
  cancelPopup();
}

function newButtonHandler(checkbox) {
  var trData = checkbox.parentElement.parentElement;

  var deleteData = document.createElement("td");
  deleteData.innerHTML = "<button class='deleteButton' onclick='deleteButtonClicked(this)'>Delete</button>";

  var editData = document.createElement("td");
  editData.innerHTML = "<button class='edit' onclick='editClicked(this)'>Edit</button>";

  trData.appendChild(deleteData);
  trData.appendChild(editData);
}

function createNewHeaders() {
  if (headersFlag == false) {
    var deleteHeader = document.createElement('th');
    deleteHeader.innerHTML = "DELETE";
    table.firstElementChild.firstElementChild.appendChild(deleteHeader);
  
    var editHeader = document.createElement('th');
    editHeader.innerHTML = "EDIT";
    table.firstElementChild.firstElementChild.appendChild(editHeader);

    headersFlag = true;
  }
}


function deleteNewButtonHandler(checkbox) {
  var trData = checkbox.parentElement.parentElement;

  var editData = trData.lastElementChild;
  trData.removeChild(editData);

  var deleteData = trData.lastElementChild;
  trData.removeChild(deleteData);

}

function removeNewHeaders() {
  var editHeader = table.firstElementChild.firstElementChild.lastElementChild;
  if (editHeader.innerHTML == "EDIT") {
    table.firstElementChild.firstElementChild.removeChild(editHeader);
  }

  var deleteHeader = table.firstElementChild.firstElementChild.lastElementChild;
  if (deleteHeader.innerHTML == "DELETE") {
    table.firstElementChild.firstElementChild.removeChild(deleteHeader);
  }
  headersFlag = false;
}

function addNewStudent() {

  try {
    var student = copyRowInfo['student'];
    var advisor = copyRowInfo['advisor'];
    var tr_1_Info = copyRowInfo['tr_1_Info'];
    var tr_2_Info = copyRowInfo['tr_2_Info'];

    var rowNo = parseInt(student.split(' ')[1]);

    var newstudent = student.split(' ')[0] + ' ' + (rowNo + 1);
    var newadvisor = advisor.split(' ')[0] + ' ' + (rowNo + 1);

    var new_tr_1_Info = tr_1_Info.cloneNode(true);
    new_tr_1_Info.children[1].innerHTML = newstudent;

    var checkbox = new_tr_1_Info.firstElementChild.firstElementChild;

    if (checkbox.checked) {
      new_tr_1_Info.removeChild(new_tr_1_Info.lastElementChild);
      new_tr_1_Info.removeChild(new_tr_1_Info.lastElementChild);
      checkbox.checked = false;
      new_tr_1_Info.style.backgroundColor = "white";
    }
    
    var new_tr_2_Info = tr_2_Info.cloneNode(true);
    new_tr_2_Info.classList.add("dropDownTextArea");
    new_tr_1_Info.children[2].innerHTML = newadvisor;

    table.firstElementChild.appendChild(new_tr_1_Info);
    table.firstElementChild.appendChild(new_tr_2_Info);

    setTimeout(() => {
      alert("Student " + (rowNo + 1) +" Record added successfully");
    }, 200);

    copyRowInfo['tr_1_Info'] = new_tr_1_Info;
    copyRowInfo['tr_2_Info'] = new_tr_2_Info;
    
    copyRowInfo['student'] = copyRowInfo['tr_1_Info'].children[1].innerHTML;
    copyRowInfo['advisor'] = copyRowInfo['tr_1_Info'].children[2].innerHTML;

  } catch (error) {
    alert("Error :" + error);
  }
  toggleTextArea(new_tr_1_Info);
  disableEnablesubmit(new_tr_1_Info);
}

function toggleTextArea(table) {
  var dropDownButton = table.firstElementChild.querySelectorAll('img');

  dropDownButton.forEach(function (image) {
    image.addEventListener("click", function() {
      var dropDownContent = this.parentElement.parentElement.nextElementSibling;
      dropDownContent.classList.toggle("dropDownTextArea");
    });
  });
}

window.addEventListener("load", function () {

  expandCollapseDropDown();
  disableEnablesubmit(document);

});