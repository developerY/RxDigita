import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RX_LOGO_URL} from '../../data/rxdigita.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="w-full bg-surface-container-low">
      <div class="w-full px-margin py-space-xl flex flex-col gap-space-lg">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-gutter">
          <div class="flex flex-col gap-space-xs">
            <div class="flex items-center gap-space-sm">
              <img
                alt="RxDigita Logo"
                class="h-7 w-7 object-contain rounded-full shadow-sm"
                [src]="logoUrl"
                referrerpolicy="no-referrer"
              />
              <span class="font-title-md text-title-md text-primary font-bold">RxDigita</span>
              <span
                class="font-caption text-caption text-secondary px-space-xs py-0.5 rounded-full bg-surface-container"
                >Bio-Clinical OS</span
              >
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Next-generation precision biotechnology, IoT micro-sensing arrays, and continuous
              digital metabolic health platforms.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-gutter">
            <a
              class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              routerLink="/platforms"
              fragment="microneedles"
              >MicroNeedles</a
            >
            <a
              class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              routerLink="/platforms"
              fragment="adme-tox"
              >ADME-Tox</a
            >
            <a
              class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              routerLink="/platforms"
              fragment="cgm-disk"
              >CGM Disk</a
            >
            <a
              class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              routerLink="/innovation"
              fragment="wellbeing-suite"
              >RxApp</a
            >
          </div>
        </div>
        <div class="h-[1px] w-full bg-surface-container"></div>
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-space-md font-caption text-caption text-tertiary"
        >
          <div class="flex items-center gap-gutter-sm">
            <a
              class="hover:text-on-surface transition-colors"
              routerLink="/company-legacy"
              >Privacy Policy</a
            >
            <a
              class="hover:text-on-surface transition-colors"
              routerLink="/company-legacy"
              >Terms of Service</a
            >
            <a
              class="hover:text-on-surface transition-colors"
              routerLink="/company-legacy"
              fragment="contact-us"
              >Clinical Inquiries</a
            >
          </div>
          <div>© 2025 RxDigita Inc. All rights reserved. Precision Medical Systems.</div>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  readonly logoUrl = RX_LOGO_URL;
}
