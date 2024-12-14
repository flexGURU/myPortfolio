import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  exps = [
    {
      title: "AWS Cloud Practitioner",
      company: "Emobilis Technology Institute",
      dates: "April 2024 - August 2024",
      sign: "01",
      highlights: [
        "Implementing and managing scalable solutions for diverse business requirements.",
        "Designed and deployed cloud architectures focusing on cost optimization and security best practices.",
        "Managing multi-tier applications, implementing serverless architectures"
      ]
    },
    {
      title: "AWS IoT Data Engineer",
      company: " Furaha Build Ventures",
      dates: " April 2023-December 2023",
      sign: "02",
      highlights: [
        "Designed and deployed an IoT data pipeline for the Kawi project, leveraging AWS services.",
        "Implemented real-time data ingestion from IoT sensors using AWS IoT Core, with data storage",
        "Developed GraphQL APIs using AWS AppSync to enable flexible querying of IoT data"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "GearBox Kenya LTD",
      dates: "May-August 2022",
      sign: "03",
      highlights: [
        "Developed and maintained various Python-based applications",
        "Development of facial recognition and detection systems that could be used in door automation",
      ]
    },
    
  ]

}
