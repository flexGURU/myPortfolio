import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      imgSrc: "../../../assets/admin.png",
      title: "Admin Blog Post Dashboard",
      description: "The Integration of Angular and Firebase NoSQL db",
      body: "Admin page that manages the uploading of Posts on the Firebase Cloud",
      links: "",
      tags: ["Firebase", "Angular", "Typescript"]    
    },
    {
      imgSrc: "../../../assets/erp.png",
      title: "Eazzy Booking Buses",
      description: "ERP Next and Frappe Framework",
      body: "ERPNext-based trip booking system with M-Pesa integration and ticket delivery",
      tags: ["ERPNext", "Frappe", "Python", "Daraja API"]
    },
    {
      imgSrc: "../../../assets/model.png",
      title: "Model Spotlight",
      description: "A Model Blog Post Website using Angular and Firebase Cloud",
      body: "A Model Blog Post Website using Angular and Firebase Cloud",
      tags: ["Firebase", "Angular", "Typescript"]
    },
    {
      imgSrc: "../../../assets/emission.jpeg",
      title: "Emission Insight",
      description: "Cloud AWS infrastructure",
      body: "IoT pipeline in the AWS cloud using a Serverless Architecture and frontend Angular Dashboard",
      tags: ["Angular", "AWS Lambda", "DynamoDB" ,"Amplify" ]
    },
    {
      imgSrc: "../../../assets/juma.png",
      title: "Portfolios",
      description: "Professional Portfolios",
      body: "Professional portfolios for self Marketing",
      tags: ["Tailwind", "Typescript"]
    },
    
  ]

}
