/*
    crud application
*/
var name;
var id;
var location;
var gender;
var hobbies = [];
var data = [];
var flag = 0;

function saveData() {
    if (localStorage.length) { // improove the technique
        var allData = JSON.parse(localStorage.details);
        var arrayData = allData.data;
        for (let i = 0; i < arrayData.length; i++) {
            if (arrayData[i].id == document.getElementById('txt_id').value) {
                alert("Id already exist");
                // location.reload();  why  not this??
                clearAll();
                return;
            }
        }
    }
    flag = 1;
    var hobbies = [];
    var name = document.getElementById('txt_name').value;
    var id = document.getElementById('txt_id').value;
    var locations = document.getElementById("loc");
    var location = locations.options[locations.selectedIndex].value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var selectedHobbies = document.getElementsByName('hobby');
    for (var i = 0; selectedHobbies[i]; ++i) {
        if (selectedHobbies[i].checked) {
            hobbies.push(selectedHobbies[i].value);
        }
    }
    var detail = {
        "name": name,
        "id": id,
        "location": location,
        "gender": gender,
        "hobby": hobbies
    };
    data.push(detail);
    var details = {
        "data": data
    }
    var stringData = JSON.stringify(details);
    localStorage.details = stringData;
    clearAll()
    alert("Data Saved Successfully!")
}

function getData() {
    debugger;
    var id = document.querySelector('#id').value;
    if (localStorage.length) {
        dataOnLocalStorage = JSON.parse(localStorage.details);
        data = dataOnLocalStorage.data;
        for (i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                flag = 1;
            }
        }
        if (flag != 1) {
            flag = 0;
            alert("Id Doesn't Exist");
            location.reload();
            return;
        }
        document.getElementsByTagName('form').style.display = 'block';
        var len = data.length;
        for (var i = 0; i < len; i++) {
            if (data[i].id == id) {
                document.getElementById('txt_name').value = data[i].name;
                document.getElementById('txt_id').value = data[i].id;
                var loc = data[i].location;
                var location = document.getElementById('loc');
                for (var j = 0; j < location.length; j++) {
                    if (location[j].value == loc) {
                        console.log("loca,loc", location[j].value, "  ", loc);
                        location[j].selected = true;
                        break;
                    }
                }
                if (data[i].gender == "Male") {
                    document.querySelector('#male').checked = true;
                } else {
                    document.querySelector('#female').checked = true;
                }
                var hobnyLen = data[i].hobby.length;
                for (var j = 0; j < hobnyLen; j++) {
                    var hobbyData = data[i].hobby[j];
                    if (hobbyData == 'Music') {
                        document.getElementById('hobby1').checked = true;
                    }
                    if (hobbyData == 'Play') {
                        document.getElementById('hobby2').checked = true;
                    }
                }
                flag = 0;
                break;
            }
        }
    } else {
        alert("Data Doesn,t Exist");
        return;
    }
}

function update() {
    hobbies = [];
    var id = document.getElementById('txt_id').value;
    if (localStorage.length) {
        var dataOnLocalStorage = JSON.parse(localStorage.details);
        var dataOnLocalStorage = dataOnLocalStorage.data;
        for (i = 0; i < dataOnLocalStorage.length; i++) {
            if (dataOnLocalStorage[i].id == id) {
                flag = 1;
            }
        }
        if (flag != 1) {
            flag = 0;
            alert("Id Doesn't Exist");
            location.reload();
            return;
        }
        //        document.getElementById('readForm').style.display = "block";
        var name = document.getElementById('txt_name').value;
        id = document.getElementById('txt_id').value;
        var locations = document.getElementById('loc');
        var location = locations.options[locations.selectedIndex].value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var selectedhobby = document.getElementsByName('hobby');
        for (l = 0; l < selectedhobby.length; l++) {
            if (selectedhobby[l].checked) {
                hobbies.push(selectedhobby[l].value);
            }
        }
        for (var i = 0; i < dataOnLocalStorage.length; i++) {
            if (dataOnLocalStorage[i].id == id) {
                dataOnLocalStorage[i].name = name;
                dataOnLocalStorage[i].location = location;
                dataOnLocalStorage[i].gender = gender;
                var len2 = dataOnLocalStorage[i].hobby;
                for (k = 0; k < len2.length; k++) {
                    if (dataOnLocalStorage[i].hobby[k].checked) {
                        hobbies.push(dataOnLocalStorage[i].hobby[k].value);
                    }
                }
                var details = {
                    "data": dataOnLocalStorage
                };
                localStorage.details = JSON.stringify(details);
                alert("Data Updated Succesfully");
                flag = 0;
                break;
            }
        }
    } else {
        alert("Data Doesn,t Exist");
        return;
    }
}

function deleteData() {
    debugger;
    id = document.getElementById('id').value;
    if (localStorage.length) {
        var dataOnLocalStorage = JSON.parse(localStorage.details);
        var dataOnLocalStorage = dataOnLocalStorage.data;
        for (i = 0; i < dataOnLocalStorage.length; i++) {
            if (dataOnLocalStorage[i].id == id) {
                flag = 1;
            }
        }
        if (flag != 1) {
            flag = 0;
            alert("Id Doesn't Exist");
            location.reload();
            return;
        }
        for (var i = 0; i < dataOnLocalStorage.length; i++) {
            if (dataOnLocalStorage[i].id == id) {
                dataOnLocalStorage.splice(i, 1);
                break;
            }
        }
        var details = {
            data: dataOnLocalStorage
        };
        localStorage.details = JSON.stringify(details);
        alert("Data Deleted Succesfully");
        document.getElementById('id').value = "";
        flag = 0;
    } else {
        alert("Data Doesn,t Exist");
        return;
    }
}

function clearAll() {
    document.getElementById("txt_name").value = "";
    document.getElementById("txt_id").value = "";
    var locate = document.getElementsByName("loc");
    for (let i = 0; i < locate.length; i++) {
        locate[i].selectedIndex = 0;
    }
    var gender = document.getElementsByName("gender");
    for (let i = 0; i < gender.length; i++) {
        gender[i].checked = false;
    }
    var hobby = document.getElementsByName("hobby");
    for (let i = 0; i < hobby.length; i++) {
        hobby[i].checked = false;
    }
}
