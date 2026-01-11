import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bba',
  imports: [CommonModule],
  templateUrl: './bba.component.html',
  styleUrl: './bba.component.scss'
})
export class BbaComponent {
  programInfo = {
    title: 'Bachelor of Business Administration (BBA)',
    university: 'Pokhara University',
    duration: '4 Years (8 Semesters)',
    affiliation: 'Affiliated to Pokhara University',
    tagline: 'Transform Your Business Acumen into Leadership Excellence',
    syllabusLink: 'assets/syllabus/bba_syllabus.pdf'
  };

  highlights = [
    { icon: 'fas fa-award', title: 'PU Affiliated', color: 'primary' },
    { icon: 'fas fa-clock', title: '4 Years Program', color: 'success' },
    { icon: 'fas fa-users', title: 'Expert Faculty', color: 'info' },
    { icon: 'fas fa-building', title: 'Industry Links', color: 'warning' }
  ];

  features = [
    {
      icon: 'fas fa-book',
      title: 'Comprehensive Curriculum',
      description: 'Industry-aligned courses covering all aspects of business management, from fundamentals to advanced strategic concepts.',
      color: 'primary'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Practical Learning',
      description: 'Real-world case studies, internships, and project-based learning to bridge the gap between theory and practice.',
      color: 'success'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Perspective',
      description: 'International business practices and cross-cultural management skills for the global marketplace.',
      color: 'info'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Career Development',
      description: 'Dedicated placement support, career counseling, and industry networking opportunities.',
      color: 'danger'
    }
  ];

  semesters = [
    {
      number: 'V',
      totalCredits: 18,
      subjects: [
        { code: 'MIS 201', title: 'Introduction to Management Information System', credits: 3 },
        { code: 'MGT 314', title: 'Management of Human Resources', credits: 3 },
        { code: 'FIN 437', title: 'Financial Institutions and Markets', credits: 3 },
        { code: 'MKT 241', title: 'Principles of Marketing', credits: 3 },
        { code: 'FIN 232', title: 'Commercial Bank Management', credits: 3 },
        { code: 'PRJ 492', title: 'Project Work', credits: 3 }
      ]
    },
    {
      number: 'VI',
      totalCredits: 12,
      subjects: [
        { code: 'MIS 301', title: 'Essentials of E-Business', credits: 3 },
        { code: 'FIN 231', title: 'Financial Management', credits: 3 },
        { code: 'LAW 292', title: 'Legal Aspects of Banking and Insurance', credits: 3 },
        { code: 'FIN 331', title: 'Life and Health Insurance', credits: 3 }
      ]
    },
    {
      number: 'VII',
      totalCredits: 12,
      subjects: [
        { code: 'MGT 311', title: 'Fundamentals of Operations Management', credits: 3 },
        { code: 'FIN 333', title: 'Property and Liability Insurance', credits: 3 },
        { code: 'FIN 334', title: 'Treasury Operations / Management', credits: 3 },
        { code: 'FIN 335', title: 'Credit Risk Management', credits: 3 }
      ]
    },
    {
      number: 'VIII',
      totalCredits: 9,
      subjects: [
        { code: 'MGT 411', title: 'Business Environment in Nepal', credits: 3 },
        { code: 'MGT 412', title: 'Strategic Management', credits: 3 },
        { code: 'FIN 337', title: 'International Banking and Insurance', credits: 3 }
      ]
    }
  ];

  electives = [
    { code: 'FIN 431', title: 'Corporate Finance', credits: 3 },
    { code: 'FIN 432', title: 'Microfinance', credits: 3 },
    { code: 'FIN 433', title: 'Investment Management', credits: 3 },
    { code: 'FIN 436', title: 'Fundamentals of Financial Derivatives', credits: 3 },
    { code: 'FIN 438', title: 'Trade Finance', credits: 3 },
    { code: 'FIN 471', title: 'Marketing of Banking and Insurance Services', credits: 3 },
    { code: 'FIN 472', title: 'IT for Banking and Insurance Services', credits: 3 },
    { code: 'FIN 473', title: 'Special Topics in Insurance', credits: 3 }
  ];


  eligibility = [
    'Completed 10+2 or equivalent from a recognized board',
    'Minimum D+ grade in all subjects of grade 11 and 12',
    'Entrance examination conducted by Pokhara University',
    'Group discussion and personal interview'
  ];

  careerPaths = [
    { title: 'Business Manager', icon: 'fas fa-briefcase' },
    { title: 'Financial Analyst', icon: 'fas fa-chart-bar' },
    { title: 'Marketing Manager', icon: 'fas fa-bullhorn' },
    { title: 'HR Manager', icon: 'fas fa-users' },
    { title: 'Entrepreneur', icon: 'fas fa-lightbulb' },
    { title: 'Consultant', icon: 'fas fa-user-tie' }
  ];

  faqs = [
    {
      question: 'What is the duration of the BBA program?',
      answer: 'The BBA program is a 4-year undergraduate course divided into 8 semesters.',
      show: false
    },
    {
      question: 'What are the admission requirements?',
      answer: 'Candidates must have completed 10+2 or equivalent with minimum D+ grade in all subjects and qualify the PU entrance exam.',
      show: false
    },
    {
      question: 'Is there any entrance examination?',
      answer: 'Yes, candidates must appear for the Pokhara University entrance examination followed by group discussion and interview.',
      show: false
    },
    {
      question: 'What are the career opportunities after BBA?',
      answer: 'Graduates can pursue careers in management, finance, marketing, HR, entrepreneurship, or continue with MBA programs.',
      show: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].show = !this.faqs[index].show;
  }
}
