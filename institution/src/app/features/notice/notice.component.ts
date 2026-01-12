import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatePipe } from "../../shared/directives/date.pipe";

@Component({
  selector: 'app-notice',
  imports: [CommonModule, DatePipe],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {
  selectedNotice: any = null;

  notices = [
    {
      title: 'Semester Exam Schedule Published',
      description: 'The final semester examination schedule has been released. Please check the academic section.',
      date: '2025-01-10',
      imageUrl: 'assets/images/intern-abroad.jpg',
      important: true
    },
    {
      title: 'Holiday Notice',
      description: 'College will remain closed on Magh 1 due to public holiday.',
      date: '2026-01-08',
      imageUrl: 'assets/images/intern-abroad.jpg',
      important: false
    },
    {
      title: 'Library Membership Renewal',
      description: 'All students are requested to renew their library membership before Magh 15.',
      date: '2026-01-01',
      imageUrl: 'assets/images/intern-abroad.jpg',
      important: false
    }
  ];

  openNotice(notice: any) {
    this.selectedNotice = notice;
  }

  closeModal() {
    this.selectedNotice = null;
  }


}
