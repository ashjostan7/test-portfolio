// Importing the CSS files:
import "./style/style.css";
import "./style/projects.css";
import $ from "jquery";
import 'slick-carousel';



import {data} from "./javascript/projects_data"
function loadProjects(){ 

    
    for (var i = 0; i <data.projects.length; i++) {
        var {project_id,date,heading,tags,description,image_link,awards,is_report,report_link,is_code,code_link}=data.projects[i];
        
        //Creating the tags for each project card
        var tag_list="";
       
        for (var j=0; j<tags.length;j++)
        {
            
            tag_list=tag_list+'<div><p>'+tags[j]+'</p></div>'
        }
        
        var section1 ='<div class="date">'+date+'</div><div class="header"><h5>'+heading+'</h5><div class="tags">'+tag_list+'</div>'
        $('<div class="content">'+section1+'<div class="description"><img src='+image_link+'><p>'+description+'</p></div> <div class=report><div class="report_data"><a href="mailto:ashjostan7@gmail.com">Read Report</a></div></div></div>').appendTo(".project_section");
    }
    $('.project_section').slick({
        // centerMode: true,
        // centerPadding: '60px',
        dots: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        responsive: 
        [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots:true
            }
            },
            {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true
            }
            }
        ]
      });
    
}
$(document).ready(function () {
    loadProjects();
})