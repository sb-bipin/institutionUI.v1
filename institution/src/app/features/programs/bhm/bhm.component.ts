import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bhm',
  imports: [CommonModule],
  templateUrl: './bhm.component.html',
  styleUrl: './bhm.component.scss'
})
export class BhmComponent {
  programInfo = {
    title: 'Bachelor of Hotel Management (BHM)',
    university: 'Pokhara University',
    duration: '4 Years (8 Semesters)',
    affiliation: 'Affiliated to Pokhara University',
    tagline: 'Master the Art of Hospitality & Tourism Excellence',
  };

  highlights = [
    { icon: 'fas fa-award', title: 'PU Affiliated', color: 'primary' },
    { icon: 'fas fa-clock', title: '4 Years Program', color: 'success' },
    { icon: 'fas fa-hotel', title: 'Industry Training', color: 'info' },
    { icon: 'fas fa-globe-asia', title: 'Global Recognition', color: 'warning' }
  ];

  features = [
    {
      icon: 'fas fa-concierge-bell',
      title: 'Professional Training',
      description: 'Hands-on training in world-class kitchen labs, housekeeping facilities, front office operations, and food & beverage service.',
      color: 'primary'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Industrial Attachment',
      description: 'Mandatory internships in 5-star hotels and resorts both nationally and internationally to gain practical industry experience.',
      color: 'success'
    },
    {
      icon: 'fas fa-plane-departure',
      title: 'Global Career Opportunities',
      description: 'Work opportunities in luxury hotels, cruise ships, airlines, tourism boards, and international hospitality chains worldwide.',
      color: 'info'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Culinary Excellence',
      description: 'Master diverse cuisines including Continental, Oriental, Indian, and Nepali under guidance of expert chefs.',
      color: 'danger'
    }
  ];

  semesters = [
    {
      number: 'I',
      totalCredits: 19.5,
      subjects: [
        { code: 'ENG 204', title: 'Business Communication for Hospitality Industry', credits: 3 },
        { code: 'FNB 171', title: 'Food Production and Patisserie I (Theory)', credits: 3 },
        { code: 'FNB 191', title: 'Food Production and Patisserie I (Practical)', credits: 1.5 },
        { code: 'FNB 172', title: 'Food and Beverage Service I (Theory)', credits: 3 },
        { code: 'FNB 192', title: 'Food and Beverage Service I (Practical)', credits: 1.5 },
        { code: 'RDM 181', title: 'Accommodation Operations I (Theory)', credits: 3 },
        { code: 'RDM 191', title: 'Accommodation Operations I (Practical)', credits: 1.5 },
        { code: 'THS 161', title: 'Fundamental of Tourism and Hospitality', credits: 3 }
      ]
    },
    {
      number: 'II',
      totalCredits: 19.5,
      subjects: [
        { code: 'FHN 191', title: 'Food Hygiene & Nutrition', credits: 3 },
        { code: 'FNB 174', title: 'Food Production and Patisserie II (Theory)', credits: 3 },
        { code: 'FNB 194', title: 'Food Production and Patisserie II (Practical)', credits: 1.5 },
        { code: 'FNB 175', title: 'Food and Beverage Service II (Theory)', credits: 3 },
        { code: 'FNB 195', title: 'Food and Beverage Service II (Practical)', credits: 1.5 },
        { code: 'RDM 183', title: 'Accommodation Operations II (Theory)', credits: 3 },
        { code: 'RDM 193', title: 'Accommodation Operations II (Practical)', credits: 1.5 },
        { code: 'MGT 231', title: 'Foundation of Management', credits: 3 }
      ]
    },
    {
      number: 'III',
      totalCredits: 19.5,
      subjects: [
        { code: 'STT 101', title: 'Hospitality Statistics', credits: 3 },
        { code: 'FNB 271', title: 'Food Production and Patisserie III (Theory)', credits: 3 },
        { code: 'FNB 191', title: 'Food Production and Patisserie III (Practical)', credits: 1.5 },
        { code: 'FNB 272', title: 'Food and Beverage Service III (Theory)', credits: 3 },
        { code: 'FNB 292', title: 'Food and Beverage Service III (Practical)', credits: 1.5 },
        { code: 'RDM 281', title: 'Room Division Management I (Theory)', credits: 3 },
        { code: 'RDM 291', title: 'Room Division Management I (Practical)', credits: 1.5 },
        { code: 'MIS 201', title: 'Introduction to Management Information System', credits: 3 }
      ]
    },
    {
      number: 'IV',
      totalCredits: 19.5,
      subjects: [
        { code: 'ACC 126', title: 'Hospitality Accounting and Costing', credits: 3 },
        { code: 'FNB 274', title: 'Food Production and Patisserie IV (Theory)', credits: 3 },
        { code: 'FNB 294', title: 'Food Production and Patisserie IV (Practical)', credits: 1.5 },
        { code: 'FNB 275', title: 'Food and Beverage Service IV (Theory)', credits: 3 },
        { code: 'FNB 295', title: 'Food and Beverage Service IV (Practical)', credits: 1.5 },
        { code: 'RDM 283', title: 'Room Division Management II (Theory)', credits: 3 },
        { code: 'RDM 293', title: 'Room Division Management II (Practical)', credits: 1.5 },
        { code: 'MKT 143', title: 'Hospitality Marketing', credits: 3 }
      ]
    },
    {
      number: 'V',
      totalCredits: 15,
      subjects: [
        { code: 'FIN 133', title: 'Fundamentals of Financial Management', credits: 3 },
        { code: 'HRM 153', title: 'Hospitality Human Resources Management', credits: 3 },
        { code: 'MGT 312', title: 'Fundamentals of Entrepreneurship', credits: 3 },
        { code: 'RCH 311', title: 'Research Methodology', credits: 3 },
        { code: 'BSM 383', title: 'Behavioral Science in Hospitality Management', credits: 3 }
      ]
    },
    {
      number: 'VI',
      totalCredits: 15,
      subjects: [
        { code: 'PRG 451', title: 'Project Work', credits: 3 },
        { code: 'FNB 371 / RDM 381', title: 'Specialization I (Any One)', credits: 3 },
        { code: 'FNB 372 / RDM 382', title: 'Specialization II (Any One)', credits: 3 },
        { code: 'MGT 412 / MGT 216', title: 'Elective I (Any One)', credits: 3 },
        { code: 'HEM 384 / EMT 385 / CMI 386 / BNC 387', title: 'Elective II (Any One)', credits: 3 }
      ]
    },
    {
      number: 'VII & VIII',
      totalCredits: 12,
      subjects: [
        { code: 'INT 396', title: 'Internship – VII Semester', credits: 6 },
        { code: 'INT 397', title: 'Internship – VIII Semester', credits: 6 }
      ]
    }
  ];


  eligibility = [
    'Completed 10+2 or equivalent from a recognized board',
    'Minimum D+ grade in all subjects of grade 11 and 12',
    'Entrance examination conducted by Pokhara University',
    'Personal interview and aptitude test',
    'Good communication skills and positive attitude towards hospitality'
  ];

  careerPaths = [
    { title: 'Hotel Manager', icon: 'fas fa-hotel' },
    { title: 'Executive Chef', icon: 'fas fa-utensils' },
    { title: 'F&B Manager', icon: 'fas fa-wine-glass-alt' },
    { title: 'Front Office Manager', icon: 'fas fa-user-tie' },
    { title: 'Event Manager', icon: 'fas fa-calendar-check' },
    { title: 'Tourism Consultant', icon: 'fas fa-map-marked-alt' }
  ];

  faqs = [
    {
      question: 'What is the duration of the BHM program?',
      answer: 'The BHM program is a 4-year undergraduate course divided into 8 semesters with mandatory internship periods.',
      show: false
    },
    {
      question: 'What are the career opportunities after BHM?',
      answer: 'Graduates can work in 5-star hotels, resorts, cruise ships, airlines, event management companies, and tourism boards globally.',
      show: false
    },
    {
      question: 'Is there any internship during the course?',
      answer: 'Yes, students undergo industrial attachments in 5th and 7th semesters in reputed hotels and hospitality establishments.',
      show: false
    },
    {
      question: 'What facilities are provided for practical training?',
      answer: 'We have fully-equipped training kitchens, mock hotel rooms, front office lab, restaurant setup, and housekeeping training facilities.',
      show: false
    },
    {
      question: 'Can I work abroad after completing BHM?',
      answer: 'Yes, BHM graduates are highly sought after globally. Many work in international hotel chains, cruise ships, and luxury resorts worldwide.',
      show: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].show = !this.faqs[index].show;
  }
}
