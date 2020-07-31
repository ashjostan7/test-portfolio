//Importing images:
import img0 from "../images/project/0.jpg";
import img1 from "../images/project/1.JPG";
import img2 from "../images/project/2.JPG";
import img3 from "../images/project/3.JPG";
import img4 from "../images/project/4.jpg";
import img5 from "../images/project/5.png";
import img6 from "../images/project/6.JPG";
import img7 from "../images/project/7.JPG";
import img8 from "../images/project/8.JPG";
import img9 from "../images/project/9.JPG";

//Importing project reports:
import file1 from "../assets/1.pdf";
import file2 from "../assets/2.pdf";
import file3 from "../assets/3.pdf";
import file4 from "../assets/4.pdf";
import file5 from "../assets/5.pdf";
import file6 from "../assets/6.pdf";

//JSON for project data:
export const data ={
    "projects":
        [
            {
                "project_id": 0,
                "date": "August 2020 - In progress",
                "heading": "Extending Pose Estimation Algorithms to study lower leg kinematics",
                "tags": ["Deep Learning", "Biomechanics", "Pose Estimation"],
                "description": "Reported on the feasibility of using Pose estimation algorithms for motion capture for Industry Partner New Balance as a part of my Master's Thesis. Trained a pose estimation model on a MobileNet v2 and ResNet 18 backbone on a custom made randomised dataset (200 images) and sequential dataset(900 images). The model was used to study lower leg kinematics.",
                "awards": "",
                "image_link": img0,
                "is_report": "0",
                "report_link": "./assets/0.pdf",
                "is_code": "0",
                "code_link": "",
                "is_video":"0",
                "video_link":""
            },
            {
                "project_id": 1,
                "date": "May 2020",
                "heading": "Reliability of KinectV2 3D human body scanner for kinanthropometry survey.",
                "tags": ["Kinanthropometry", "Statistical Analysis", "Experiment Design"],
                "description": "Reported on the reliability of measurements of calf and waist girth extracted from 3D human scans with measurements taken by a ISAK practioner. Developed the MATLAb script to extract calf and waist girth to replicate anthropometric tape measure.",
                "awards": "",
                "image_link": img1,
                "is_report": "1",
                "report_link": file1,
                "is_code": "1",
                "code_link": "https://github.com/ashjostan7/3DScanning-Kinanthropometry",
                "is_video":"0",
                "video_link":""
            },
            {
                "project_id": 2,
                "date": " February 2020",
                "heading": "Human centred design of a novel cycling helmet ",
                "tags": ["Product Design","Innovation"],
                "description": "Group project in designing a novel helmet for recreational cycling at the youth level. Project executed from the ideation to industry implementation.",
                "awards": "",
                "image_link": img2,
                "is_report": "1",
                "report_link": file2,
                "is_code": "0",
                "code_link": "",
                "is_video":"0",
                "video_link":""
            },
            {
                "project_id": 3,
                "date": " January 2020",
                "heading": "Computational Fluid Dynamics analysis of a Novel cyling helmet. ",
                "tags": ["CAD", "CFD"],
                "description": "Iterative design process of a recreational cycling helmet using SolidWorks and computational fluid dynamic analysis of the same. The CFD analysis uses steady Reynolds-Averaged Navier–Stokes (RANS) equations using a k-ω shear stress transport (SST) model.",
                "awards": "",
                "image_link": img3,
                "is_report": "1",
                "report_link": file3,
                "is_code": "0",
                "code_link": "",
                "is_video":"0",
                "video_link":""
            },
            {
                "project_id": 4,
                "date": "January 2020",
                "heading": "Concurrent Validity of Step Freuency.",
                "tags": ["Statistical Study", "Applied Measurements","Data Processing"],
                "description": "Study conducted to prove the concurrent validity of step frequency calculated by OptoJump based on data collected from six participants. Using a Bland Altman plot and inter class correlation reported the validity of OptoJump system.",
                "awards": "",
                "image_link": img4,
                "is_report": "1",
                "report_link": file4,
                "is_code": "0",
                "code_link": "",
                "is_video":"0",
                "video_link":"",
                "is_video":"0",
                "video_link":""
            },
            {
                "project_id": 5,
                "date": " December 2019",
                "heading": "Modeling the trajectory of a table tennis ball",
                "tags": ["Data Collection", "Statistical Analysis", "Data Processing"],
                "description": "Modelling the trajectory of table tennis ball in MATLAB to study the difference in trajectory of a table tennis ball hit with top-spin or back-spin with a flat hit of the ball with no spin. The code includes a UI kit for interactive usage.",
                "awards": "",
                "image_link": img5,
                "is_report": "1",
                "report_link": file5,
                "is_code": "1",
                "code_link": "",
                "is_video":"0",
                "video_link":"",
                "is_video":"0",
                "video_link":""
           }
        ,
            {
                "project_id": 6,
                "date": "March 2019 ",
                "heading": "Recommender system for running technique using deep learning and computer vision",
                "tags": ["Deep Learning","Open Pose","Biomechanics"],
                "description": "Using Open Pose built a system to identify and extract the push off angle of a sprinter during block clearance of a 100m sprint. The project was carried out with a vision to aid analysis of athletes training in Sports Authority of India.",
                "awards": "",
                "image_link": img6,
                "is_report": "1",
                "report_link": file6,
                "is_code": "",
                "code_link": "",
                "is_video":"0",
                "video_link":""
            },
            {
                "project_id": 7,
                "date": "September 2017 ",
                "heading": "GESTURE IT - IoT home and auditorium automation",
                "tags": ["Home Automation","IoT"],
                "description": "Using Google Tango(discontinued by google) developed an andorid application to control electrical appliances. Application allowed the user to point at the appliance and access its functionalities.",
                "awards": "",
                "image_link": img7,
                "is_report": "",
                "report_link": "",
                "is_code": "",
                "code_link": "",
                "is_video":"1",
                "video_link":"https://www.youtube.com/watch?v=mrurRQgYq38"
            },
            {
                "project_id": 8,
                "date": "September 2018",
                "heading": "Electro-Mechanical prosthetic solution for leprosy patients.",
                "tags": ["Social Service","Microprocessor","Product Design"],
                "description": "interdisciplinary group project aimed at providing a low cost partially automated prosthetic solution for Sumanahalli Leprosy Rehabilitation Training Centre. Making leprosy patients affected in the palm self-sufficient, such that fundamental basic needs such as eating, holding objects and calling people can be made their own.",
                "awards": "",
                "image_link": img8,
                "is_report": "",
                "report_link": "",
                "is_code": "0",
                "code_link": "",
                "is_video":"0",
                "video_link":""
            },
            {
                "project_id": 9,
                "date": "September 2016",
                "heading": "Sleep detection and motion control",
                "tags": ["Image Processing","Microprocessor"],
                "description": "Developed a system to detect eye lid motion using image processing to study driver drowsiness. In addition, explored usage of gyroscope and accelerometer sensor to control motion of a remote controlled car.",
                "awards": "",
                "image_link": img9,
                "is_report": "",
                "report_link": "",
                "is_code": "0",
                "code_link": "",
                "is_video":"1",
                "video_link":"https://www.youtube.com/watch?v=hwr71haFGss"
            }
         ]

    

}