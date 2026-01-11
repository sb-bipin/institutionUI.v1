import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bba-f',
  imports: [CommonModule],
  templateUrl: './bba-f.component.html',
  styleUrl: './bba-f.component.scss'
})
export class BbaFComponent {
  programInfo = {
    title: 'Bachelor of Business Administration - Finance (BBA-F)',
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
      number: 'I',
      totalCredits: 16,
      subjects: [
        { code: 'ENG 110', title: 'English', credits: 3 },
        { code: 'MTH 110', title: 'Basic Mathematics', credits: 3 },
        { code: 'ICT 110', title: 'IT for Business', credits: 3 },
        { code: 'BHS 110', title: 'Behavioral Science', credits: 3 },
        { code: 'MGT 111', title: 'Principles of Management', credits: 3 },
        { code: 'PRC 110', title: 'Software Skills Practicum', credits: 1 }
      ]
    },
    {
      number: 'II',
      totalCredits: 16,
      subjects: [
        { code: 'BUC 201', title: 'Business Communication', credits: 3 },
        { code: 'MTH 111', title: 'Business Mathematics', credits: 3 },
        { code: 'ECO 110', title: 'Introduction to Microeconomics', credits: 3 },
        { code: 'MGT 112', title: 'Fundamentals of Organizational Behavior', credits: 3 },
        { code: 'ACC 110', title: 'Financial Accounting', credits: 3 },
        { code: 'PRC 111', title: 'Soft Skills Practicum', credits: 1 }
      ]
    },
    {
      number: 'III',
      totalCredits: 16,
      subjects: [
        { code: 'STT 110', title: 'Business Statistics', credits: 3 },
        { code: 'ECO 111', title: 'Introduction to Macroeconomics', credits: 3 },
        { code: 'ACC 111', title: 'Cost and Management Accounting', credits: 3 },
        { code: 'FIN 110', title: 'Essentials of Finance', credits: 3 },
        { code: 'MKT 110', title: 'Principles of Marketing', credits: 3 },
        { code: 'PRC 112', title: 'Digital Marketing Practicum', credits: 1 }
      ]
    },
    {
      number: 'IV',
      totalCredits: 16,
      subjects: [
        { code: 'STT 111', title: 'Data Analysis and Modeling', credits: 3 },
        { code: 'MGT 113', title: 'Business and Society', credits: 3 },
        { code: 'RCH 110', title: 'Business Research Methods', credits: 3 },
        { code: 'MGT 114', title: 'Human Resource Management', credits: 3 },
        { code: 'FIN 111', title: 'Introduction to Financial Management', credits: 3 },
        { code: 'PRC 114', title: 'Academic Writing', credits: 1 }
      ]
    }
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
      question: 'What is the duration of the BBA-F program?',
      answer: 'The BBA-F program is a 4-year undergraduate course divided into 8 semesters.',
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
      question: 'What are the career opportunities after BBA-F?',
      answer: 'Graduates can pursue careers in management, finance, marketing, HR, entrepreneurship, or continue with MBA programs.',
      show: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].show = !this.faqs[index].show;
  }
}
