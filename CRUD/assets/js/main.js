var courseName=document.querySelector("#courseName");
var courseCategory=document.querySelector("#courseCategory");
var coursePrice=document.querySelector("#coursePrice");
var courseDescription=document.querySelector("#courseDescription");
var courseCapacity=document.querySelector("#courseCapacity");
var addBtn=document.querySelector("#click");
var inputs=document.querySelectorAll(".inputs");
var courses=[];
var delBtn=document.querySelector("#deleteBtn");
addBtn.addEventListener("click",function(e){
    e.preventDefault();
    addCourse();
    Reset();
    displayData();
 
});

delBtn.addEventListener("click",function(e){
    courses=[];
    displayData();
});
 

function addCourse(){
    var courseInfo={
        name: courseName.value,
        category: courseCategory.value,
        price:coursePrice.value,
        description: courseDescription.value,
        capacity: courseCapacity.value,
    }
    
    courses.push(courseInfo);
}

function Reset(){
    for(var i=0; i<inputs.length; i++) {
        inputs[i].value='';
    }
}
function displayData(){
    var Result=``;
    for(var i=0; i<courses.length; i++){
        Result+=` 
        <tr> 
            <td> ${i}              </td>
            <td> ${courses[i].name}</td>
            <td> ${courses[i].category}</td>
            <td> ${courses[i].price}</td>
            <td> ${courses[i].capacity}</td>
            <td> ${courses[i].description}</td>
            <td><button type="button" class="btn btn-outline-primary">update</button></td>
            <td><button type="button" class="btn btn-outline-danger" onclick="deleteCourse(${i})">delete</button></td>
        </tr>`;
    }
    document.getElementById("data").innerHTML=Result;

}

function deleteCourse(index) {
   courses.splice(index, 1);
   displayData();
}