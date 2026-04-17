import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FaqItem } from '../../../core/interfaces/FaqItem.interfaces';
import { AccountService } from '../../../core/services/account.service';


@Component({
  selector: 'app-help-center-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-center-component.html',
  styleUrl: './help-center-component.scss',
})
export class HelpCenterComponent {
  private accountService = inject(AccountService);
  currentUser = this.accountService.currentUser;

  faqs: FaqItem[] = [
    {
      question: 'How do I change my streaming quality?',
      answer: 'You can adjust your streaming quality in the video player settings during playback, or set a default in your Account Profile preferences under "Playback Settings".',
      isOpen: false
    },
    {
      question: 'Is CINESTREAM available offline?',
      answer: 'Yes, you can download titles on mobile devices and tablets for offline viewing. Look for the download icon (a downward arrow) next to titles in the mobile app. Downloads expire after 30 days or 48 hours after you start watching.',
      isOpen: true
    },
    {
      question: 'Which devices support 4K Dolby Atmos?',
      answer: '4K Dolby Atmos is supported on Apple TV 4K, recent Roku Ultra models, Nvidia Shield, and select smart TVs from LG, Samsung, and Sony. Ensure your audio receiver or soundbar is also Dolby Atmos compatible.',
      isOpen: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
