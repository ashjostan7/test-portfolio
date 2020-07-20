// Importing the CSS files:
import "./style/style.css";
import "./style/projects.css";
import $ from "jquery";
import 'slick-carousel';



import {data} from "./javascript/projects_data"
function loadProjects(){ 

    
    for (var i = 0; i <data.projects.length; i++) {
        var {project_id,date,heading,tags,description,image_link,awards,is_report,report_link,is_code,code_link,is_video,video_link}=data.projects[i];
        
        //Creating the tags for each project card
        var tag_list="";
       
        for (var j=0; j<tags.length;j++)
        {
            
            tag_list=tag_list+'<p>'+tags[j]+'</p>'
        }
        
        var section1 ='<div class="date">'+date+'</div><div class="header"><h5>'+heading+'</h5><div class="tags">'+tag_list+'</div>';
        var section2='<img src='+image_link+'><p>'+description+'</p>';
        var section3='';
        if (is_report=="1"){
             section3='<div><a href='+report_link+' target="blank">Read Report</a></div>'
        }
        if (is_code=="1"){
            section3=section3+'<div><a href='+code_link+'target="blank">View Code</a></div>'
        }
        if (is_video=="1"){
            section3=section3+'<div><a href='+video_link+'target="_blank">View Video</a></div>'
        }
        
        $('<div class="content">'+section1+'<div class="description">'+section2+'</div> <div class=report>'+section3+'</div></div>').appendTo(".project_section");
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