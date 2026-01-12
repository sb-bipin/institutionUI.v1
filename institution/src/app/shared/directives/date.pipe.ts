import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'easyDate',
  standalone: true
})
export class DatePipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';

    const inputDate = new Date(value);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - inputDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Today';
    }

    if (diffDays === 1) {
      return 'Yesterday';
    }

    if (diffDays < 7) {
      return `${diffDays} days ago`;
    }

    return inputDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
}
