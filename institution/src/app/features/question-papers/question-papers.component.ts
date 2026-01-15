import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuestionPaper {
  id: number | string;
  subject: string;
  code: string;
  semester: number;
  year: number;
  fileUrl: string;
  fileSize: string;
  program: string;
}

interface Program {
  id: string;
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-question-papers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-papers.component.html',
  styleUrl: './question-papers.component.scss'
})
export class QuestionPapersComponent {
  programs: Program[] = [
    { id: 'bba', name: 'BBA', icon: '💻', color: '#667eea' },
    { id: 'bba-f', name: 'BBA-F', icon: '📊', color: '#f59e0b' },
    { id: 'bhm', name: 'BHM', icon: '🎓', color: '#10b981' }
  ];

  semesters: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  selectedProgram: string = 'bba';
  selectedSemester: number = 0;

  //mock data for UI
  questionPapers: QuestionPaper[] = [
    // bba Papers
    { id: 1, program: 'bba', subject: 'Programming in C', code: 'BBA-101', semester: 1, year: 2024, fileUrl: '#', fileSize: '2.5 MB' },
    { id: 2, program: 'bba', subject: 'Digital Logic', code: 'BBA-102', semester: 1, year: 2024, fileUrl: '#', fileSize: '1.8 MB' },
    { id: 3, program: 'bba', subject: 'Mathematics I', code: 'BBA-103', semester: 1, year: 2024, fileUrl: '#', fileSize: '2.1 MB' },
    { id: 4, program: 'bba', subject: 'Data Structures', code: 'BBA-201', semester: 2, year: 2024, fileUrl: '#', fileSize: '3.2 MB' },
    { id: 5, program: 'bba', subject: 'Object Oriented Programming', code: 'BBA-202', semester: 2, year: 2024, fileUrl: '#', fileSize: '2.8 MB' },
    { id: 6, program: 'bba', subject: 'Web Technology', code: 'BBA-301', semester: 3, year: 2023, fileUrl: '#', fileSize: '2.4 MB' },
    { id: 7, program: 'bba', subject: 'Database Management System', code: 'BBA-302', semester: 3, year: 2023, fileUrl: '#', fileSize: '3.1 MB' },
    { id: 8, program: 'bba', subject: 'Software Engineering', code: 'BBA-401', semester: 4, year: 2023, fileUrl: '#', fileSize: '2.9 MB' },

    // bba-f Papers
    { id: 9, program: 'bba-f', subject: 'Business Communication', code: 'BBA-F-101', semester: 1, year: 2024, fileUrl: '#', fileSize: '1.9 MB' },
    { id: 10, program: 'bba-f', subject: 'Principles of Management', code: 'BBA-F-102', semester: 1, year: 2024, fileUrl: '#', fileSize: '2.3 MB' },
    { id: 11, program: 'bba-f', subject: 'Financial Accounting', code: 'BBA-F-103', semester: 1, year: 2024, fileUrl: '#', fileSize: '2.7 MB' },
    { id: 12, program: 'bba-f', subject: 'Microeconomics', code: 'BBA-F-201', semester: 2, year: 2024, fileUrl: '#', fileSize: '2.2 MB' },
    { id: 13, program: 'bba-f', subject: 'Business Statistics', code: 'BBA-F-202', semester: 2, year: 2024, fileUrl: '#', fileSize: '2.6 MB' },
    { id: 14, program: 'bba-f', subject: 'Marketing Management', code: 'BBA-F-301', semester: 3, year: 2023, fileUrl: '#', fileSize: '2.4 MB' },

    // bhm Papers
    { id: 15, program: 'bhm', subject: 'Introduction to IT', code: 'BHM-101', semester: 1, year: 2024, fileUrl: '#', fileSize: '2.1 MB' },
    { id: 16, program: 'bhm', subject: 'Programming Concepts', code: 'BHM-102', semester: 1, year: 2024, fileUrl: '#', fileSize: '2.8 MB' },
    { id: 17, program: 'bhm', subject: 'Discrete Mathematics', code: 'BHM-103', semester: 1, year: 2024, fileUrl: '#', fileSize: '2.5 MB' },
    { id: 18, program: 'bhm', subject: 'Computer Architecture', code: 'BHM-201', semester: 2, year: 2024, fileUrl: '#', fileSize: '3.0 MB' },
    { id: 19, program: 'bhm', subject: 'Operating Systems', code: 'BHM-301', semester: 3, year: 2023, fileUrl: '#', fileSize: '2.9 MB' },
    { id: 20, program: 'bhm', subject: 'Artificial Intelligence', code: 'BHM-401', semester: 4, year: 2023, fileUrl: '#', fileSize: '3.3 MB' },
  ];

  get filteredPapers(): QuestionPaper[] {
    return this.questionPapers.filter(paper => {
      const programMatch = paper.program.toLowerCase().startsWith(this.selectedProgram);
      const semesterMatch = this.selectedSemester === 0 || paper.semester === this.selectedSemester;
      return programMatch && semesterMatch;
    });
  }

  selectProgram(programName: string): void {
    this.selectedProgram = programName.toLowerCase();
  }

  selectSemester(semester: number): void {
    this.selectedSemester = semester;
  }

  getProgramColor(): string {
    const program = this.programs.find(p => p.id === this.selectedProgram);
    return program ? `linear-gradient(135deg, ${program.color} 0%, ${program.color}dd 100%)` :
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }

  downloadPaper(paper: QuestionPaper): void {
    console.log('Downloading paper:', paper);
    alert(`Downloading ${paper.subject} (${paper.code})`);
  }
}

