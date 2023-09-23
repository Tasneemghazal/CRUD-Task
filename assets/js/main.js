var courseName=document.querySelector("#courseName");
var courseCategory=document.querySelector("#courseCategory");
var coursePrice=document.querySelector("#coursePrice");
var courseDescription=document.querySelector("#courseDescription");
var courseCapacity=document.querySelector("#courseCapacity");
var addBtn=document.querySelector("#click");
var inputs=document.querySelectorAll(".inputs");
var courses=[];
var delBtn=document.querySelector("#deleteBtn");
var search = document.querySelector("#search");
var nameError=document.querySelector(".nameError");
var catError=document.querySelector(".catError");
var priceError=document.querySelector(".priceError");
var DesError=document.querySelector(".desError");
var capError=document.querySelector(".capError");
var isNameTrue,isCategoryTrue,isPriceTrue,isDescriptionTrue,isCapacityTrue =false;
addBtn.addEventListener("click",function(e){
    e.preventDefault();
    addCourse();
    Reset();
    displayData();
 
});

delBtn.addEventListener("click",function(e){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            courses=[];
            displayData();
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
   
    
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
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
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
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            courses.splice(index, 1);
            displayData();
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
   
}

search.addEventListener("keyup", function(e){
    var Result=``;
    for(var i=0; i<courses.length; i++){
        if(courses[i].name.toLowerCase().includes(e.target.value.toLowerCase()))
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
})

courseName.addEventListener("keyup", function() {
    var pattern= /^[A-Z][a-z]{2,10}$/;
   if(pattern.test(courseName.value)){
    if(courseName.classList.contains("is-invalid")){
        courseName.classList.remove("is-invalid");
        courseName.classList.add("is-valid");
    }
    courseName.classList.add("is-valid");
    nameError.style.cssText = "display:none";
    isNameTrue=true;
   
    

   }
   else{
    if(courseName.classList.contains("is-valid")){
        courseName.classList.remove("is-valid");
        courseName.classList.add("is-invalid");
    }
    courseName.classList.add("is-invalid");
    nameError.style.cssText = "display:block";
    isNameTrue=false;
   

   }
   isTrue(isNameTrue,isCapacityTrue,isCategoryTrue,isDescriptionTrue,isPriceTrue);
})
courseCategory.addEventListener("keyup", function() {
    var pattern= /^[A-Z][a-z]{2,10}$/;
   if(pattern.test(courseCategory.value)){
    if(courseCategory.classList.contains("is-invalid")){
        courseCategory.classList.remove("is-invalid");
        courseCategory.classList.add("is-valid");
    }
    courseCategory.classList.add("is-valid");
    catError.style.cssText = "display:none";
    isCategoryTrue=true;
   
    

   }
   else{
    if(courseCategory.classList.contains("is-valid")){
        courseCategory.classList.remove("is-valid");
        courseCategory.classList.add("is-invalid");
    }
    courseCategory.classList.add("is-invalid");
    catError.style.cssText = "display:block";
    isCategoryTrue=false;
  

   }

   isTrue(isNameTrue,isCapacityTrue,isCategoryTrue,isDescriptionTrue,isPriceTrue);
})

courseCapacity.addEventListener("keyup", function() {
    var pattern= /[2-4][0-9]|50/;
   if(pattern.test(courseCapacity.value)){
    if(courseCapacity.classList.contains("is-invalid")){
        courseCapacity.classList.remove("is-invalid");
        courseCapacity.classList.add("is-valid");
    }
    courseCapacity.classList.add("is-valid");
    capError.style.cssText = "display:none";
    isCapacityTrue=true;
   
    

   }
   else{
    if(courseCapacity.classList.contains("is-valid")){
        courseCapacity.classList.remove("is-valid");
        courseCapacity.classList.add("is-invalid");
    }
    courseCapacity.classList.add("is-invalid");
    capError.style.cssText = "display:block";
    isCapacityTrue=false;
  

   }

   isTrue(isNameTrue,isCapacityTrue,isCategoryTrue,isDescriptionTrue,isPriceTrue);
})

courseDescription.addEventListener("keyup", function() {
    var pattern= /^[a-zA-Z0-9 ]{3,20}$/;
   if(pattern.test(courseDescription.value)){
    if(courseDescription.classList.contains("is-invalid")){
        courseDescription.classList.remove("is-invalid");
        courseDescription.classList.add("is-valid");
    }
    courseDescription.classList.add("is-valid");
    DesError.style.cssText = "display:none";
    isDescriptionTrue=true;
   
    

   }
   else{
    if(courseDescription.classList.contains("is-valid")){
        courseDescription.classList.remove("is-valid");
        courseDescription.classList.add("is-invalid");
    }
    courseDescription.classList.add("is-invalid");
    DesError.style.cssText = "display:block";
    isDescriptionTrue=false;
  

   }

   isTrue(isNameTrue,isCapacityTrue,isCategoryTrue,isDescriptionTrue,isPriceTrue);
})

coursePrice.addEventListener("keyup", function() {
    var pattern= /100|200|300/;
   if(pattern.test(coursePrice.value)){
    if(coursePrice.classList.contains("is-invalid")){
        coursePrice.classList.remove("is-invalid");
        coursePrice.classList.add("is-valid");
    }
    coursePrice.classList.add("is-valid");
    priceError.style.cssText = "display:none";
    isPriceTrue=true;
   
    

   }
   else{
    if(coursePrice.classList.contains("is-valid")){
        coursePrice.classList.remove("is-valid");
        coursePrice.classList.add("is-invalid");
    }
    coursePrice.classList.add("is-invalid");
    priceError.style.cssText = "display:block";
    isPriceTrue=false;
  

   }

   isTrue(isNameTrue,isCapacityTrue,isCategoryTrue,isDescriptionTrue,isPriceTrue);
})

function isTrue(isNameTrue,isCapacityTrue,isCategoryTrue,isDescriptionTrue,isPriceTrue){
    if(isNameTrue && isCapacityTrue && isCategoryTrue && isDescriptionTrue && isPriceTrue){
        addBtn.removeAttribute("disabled");
    }
    else{
        addBtn.setAttribute("disabled", "disabled");
    }
}
