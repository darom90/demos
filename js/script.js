function getUrl(){
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(function(){
    requestApi();
    $('#recipes').on('change',() =>{
        var chooseRecipe = $('#recipes').val();
        console.log(chooseRecipe);
    })
});

function requestApi(){
    $.ajax({
        dataType : 'json',
        url : getUrl(),
        success:(data) => chooseRecipe(data.recipes),
        error:() => console.log("error"),
    });
}
var allData= [];
function chooseRecipe(recip){
    allData = recip;
    var option = "";
    recip.forEach(item =>{
        option +=`
            <option value="${item.id}">${item.name}</option>
        `;
    });
    $('#recipes').append(option);
}

function get(recip){
    switch(recip){
        case:.....
        // cale function
        break;
    }
}