import data from "https://github.com/ashjostan7/test-portfolio/blob/master/projects_data.js"
function loadProjects(){ 
   
    for (var i = 0; i <data.projects.lenght; i++) {
        var {date,heading,tags,description,awards,image_link,is_report,report_link,is_code,code_link}=data.projects[i];
        
        $('<div class="content"><div class="date">'+date+'</div><div class="header"><h4>'+heading+'</h4><div class="tags"><div>Biomechanics</div></div> <div class="description"><p>'+description+'</p><img src="./images/project/'+0+'.jpg"></div> <div class=report><a href="mailto:ashjostan7@gmail.com">Read Report</a></div></div>').appendTo(".project_section");
    }
    $('.project_section').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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

