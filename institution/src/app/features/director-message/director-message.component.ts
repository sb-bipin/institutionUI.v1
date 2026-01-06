import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-director-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './director-message.component.html',
  styleUrls: ['./director-message.component.scss']
})
export class DirectorMessageComponent {
  directors = [
    {
      id: 'director',
      name: 'Mr. Shailesh Kumar Singh',
      position: 'Director',
      initials: 'SS',
      color: 'primary',
      icon: 'bi-star-fill',
      quote: 'Shaping minds, building futures',
      images: 'assets/images/director.jpg',
      messages: [
        {
          title: 'Vision for Excellence',
          icon: 'bi-lightbulb-fill',
          content: 'The foundation of every thriving nation rests upon its youth and the caliber of education they receive. In today\'s rapidly evolving landscape, innovation, creativity, and entrepreneurial spirit have become the cornerstones of success.'
        },
        {
          title: 'Our Commitment',
          icon: 'bi-mortarboard-fill',
          content: 'At Nepal Western Academy, we recognize that true excellence emerges from the seamless integration of knowledge and its practical application. Our institution pioneers innovative educational approaches that provide access to international standards.'
        },
        {
          title: 'Proven Track Record',
          icon: 'bi-trophy-fill',
          content: 'For over a decade, we\'ve established our reputation as a leading institution in hospitality management, insurance, and business education, consistently delivering exceptional talent to these industries.'
        }
      ],
      closing: 'With unwavering dedication and sincere appreciation, I thank our well-wishers, guardians, parents, students, and staff for their continued support and trust in our vision.'
    },
    {
      id: 'academic-director',
      name: 'Mr. Bhim Bahadur Chaudhary',
      position: 'Academic Director',
      initials: 'RS',
      color: 'success',
      icon: 'bi-book-fill',
      quote: 'Excellence through education, success through innovation',
      images: 'assets/images/academic-director.jpg',
      messages: [
        {
          title: 'Academic Excellence',
          icon: 'bi-award-fill',
          content: 'Our academic framework is designed to nurture critical thinking, creativity, and practical skills. We believe in creating a learning environment where students can explore, experiment, and excel in their chosen fields.'
        },
        {
          title: 'Industry-Ready Curriculum',
          icon: 'bi-briefcase-fill',
          content: 'Our curriculum is continuously updated to reflect current industry demands and emerging trends. We integrate real-world projects, internships, and industry collaborations to ensure our graduates are job-ready from day one.'
        },
        {
          title: 'Research & Innovation',
          icon: 'bi-lightbulb',
          content: 'We encourage a culture of research and innovation, providing students with opportunities to work on cutting-edge projects, participate in conferences, and contribute to knowledge creation in their respective fields.'
        }
      ],
      closing: 'I invite you to join us in this transformative educational journey where academic rigor meets practical application, preparing you for a successful and fulfilling career.'
    }
  ];

  activeDirector = 0;

  selectDirector(index: number) {
    this.activeDirector = index;
  }
}