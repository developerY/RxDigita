import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {RX_LOGO_URL, SEARCH_INDEX, SearchIndexItem} from '../../data/rxdigita.data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatIconModule, ReactiveFormsModule],
  host: {
    '(document:keydown.escape)': 'closeMenus()',
  },
  template: `
    <header
      class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
    >
      <div class="h-20 w-full px-margin flex items-center justify-between gap-gutter">
        <!-- Brand Lockup -->
        <a
          routerLink="/"
          class="flex items-center gap-space-md shrink-0 group"
          (click)="closeMenus()"
        >
          <img
            alt="RxDigita Logo"
            class="h-9 w-9 object-contain rounded-full shadow-sm"
            [src]="logoUrl"
            referrerpolicy="no-referrer"
          />
          <div class="flex flex-col">
            <span
              class="font-title-md text-title-md text-primary font-bold tracking-tight group-hover:text-primary-container transition-colors"
              >RxDigita</span
            >
            <span
              class="font-label-sm text-label-sm text-secondary uppercase tracking-widest"
              >Biotech &amp; Health</span
            >
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden xl:flex items-center gap-space-xs" aria-label="Primary">
          <a
            routerLink="/"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            [routerLinkActiveOptions]="{exact: true}"
            class="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg whitespace-nowrap"
          >
            Home
          </a>
          <a
            routerLink="/platforms"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            class="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg whitespace-nowrap"
          >
            Platforms
          </a>
          <a
            routerLink="/health-living"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            class="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg whitespace-nowrap"
          >
            Health &amp; Living
          </a>
          <a
            routerLink="/innovation"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            class="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg whitespace-nowrap"
          >
            Innovation
          </a>
          <a
            routerLink="/company-legacy"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            class="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg whitespace-nowrap"
          >
            Company &amp; Legacy
          </a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-space-md shrink-0">
          <button
            type="button"
            aria-label="Search platform"
            (click)="openSearch()"
            class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
          >
            <mat-icon class="text-[20px]">search</mat-icon>
          </button>

          <a
            routerLink="/company-legacy"
            fragment="contact-us"
            class="hidden sm:inline-flex items-center justify-center px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap"
          >
            Contact Us
          </a>

          <div class="relative">
            <button
              type="button"
              aria-label="Investigator account menu"
              (click)="toggleProfile()"
              class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-container transition-colors cursor-pointer"
            >
              <mat-icon class="text-[18px]">person</mat-icon>
            </button>

            @if (profileOpen()) {
              <div
                class="absolute right-0 mt-3 w-72 rounded-xl bg-surface-container-lowest shadow-xl border border-outline-variant/40 p-space-md flex flex-col gap-space-sm z-50"
              >
                <div class="flex items-center justify-between pb-2 border-b border-surface-container">
                  <div>
                    <div class="font-title-md text-title-md text-on-surface font-bold">
                      Clinical Partner Portal
                    </div>
                    <div class="font-caption text-caption text-tertiary">
                      Bio-Clinical OS v4.8
                    </div>
                  </div>
                  <button
                    type="button"
                    (click)="profileOpen.set(false)"
                    class="text-tertiary hover:text-on-surface cursor-pointer"
                    aria-label="Close portal menu"
                  >
                    <mat-icon class="text-[18px]">close</mat-icon>
                  </button>
                </div>
                <a
                  routerLink="/platforms"
                  fragment="schematics"
                  (click)="profileOpen.set(false)"
                  class="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low text-body-sm text-on-surface transition-colors"
                >
                  <mat-icon class="text-[18px] text-primary">description</mat-icon>
                  <span>Engineering Schematics Dossier</span>
                </a>
                <a
                  routerLink="/innovation"
                  fragment="pipeline"
                  (click)="profileOpen.set(false)"
                  class="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low text-body-sm text-on-surface transition-colors"
                >
                  <mat-icon class="text-[18px] text-secondary">biotech</mat-icon>
                  <span>Clinical Trial Pipeline Tracker</span>
                </a>
                <a
                  routerLink="/company-legacy"
                  fragment="contact-us"
                  (click)="profileOpen.set(false)"
                  class="flex items-center gap-2 p-2 rounded-lg bg-primary text-on-primary font-label-md justify-center hover:bg-primary-container transition-colors"
                >
                  <mat-icon class="text-[18px]">send</mat-icon>
                  <span>Submit IRB / Trial Inquiry</span>
                </a>
              </div>
            }
          </div>

          <!-- Mobile menu button -->
          <button
            type="button"
            aria-label="Toggle navigation menu"
            (click)="mobileMenuOpen.set(!mobileMenuOpen())"
            class="xl:hidden w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
          >
            <mat-icon class="text-[22px]">{{ mobileMenuOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (mobileMenuOpen()) {
        <nav
          class="xl:hidden bg-surface-container-lowest border-t border-surface-container px-margin py-space-md flex flex-col gap-space-xs shadow-lg"
          aria-label="Mobile Navigation"
        >
          <a
            routerLink="/"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            [routerLinkActiveOptions]="{exact: true}"
            (click)="mobileMenuOpen.set(false)"
            class="px-space-md py-space-sm rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container"
            >Home</a
          >
          <a
            routerLink="/platforms"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            (click)="mobileMenuOpen.set(false)"
            class="px-space-md py-space-sm rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container"
            >Platforms</a
          >
          <a
            routerLink="/health-living"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            (click)="mobileMenuOpen.set(false)"
            class="px-space-md py-space-sm rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container"
            >Health &amp; Living</a
          >
          <a
            routerLink="/innovation"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            (click)="mobileMenuOpen.set(false)"
            class="px-space-md py-space-sm rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container"
            >Innovation</a
          >
          <a
            routerLink="/company-legacy"
            routerLinkActive="bg-surface-container-high text-primary font-bold"
            (click)="mobileMenuOpen.set(false)"
            class="px-space-md py-space-sm rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container"
            >Company &amp; Legacy</a
          >
          <a
            routerLink="/company-legacy"
            fragment="contact-us"
            (click)="mobileMenuOpen.set(false)"
            class="mt-space-xs px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-center"
            >Contact Us</a
          >
        </nav>
      }
    </header>

    <!-- Interactive Search Modal -->
    @if (searchOpen()) {
      <div class="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
        <button
          type="button"
          aria-label="Close search dialog"
          (click)="searchOpen.set(false)"
          class="fixed inset-0 bg-on-surface/40 backdrop-blur-sm cursor-default"
        ></button>
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search RxDigita"
          class="relative z-10 w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden"
        >
          <div class="p-space-md border-b border-surface-container flex items-center gap-space-sm">
            <mat-icon class="text-primary text-[22px]">search</mat-icon>
            <input
              type="text"
              [formControl]="searchControl"
              placeholder="Search CGM Disk, MicroNeedles, ADME-Tox, RxApp, Sleep, Leadership..."
              class="w-full h-10 bg-transparent text-on-surface placeholder:text-outline focus:outline-none font-body-md"
            />
            <button
              type="button"
              (click)="searchOpen.set(false)"
              class="px-2 py-1 rounded bg-surface-container text-caption text-tertiary hover:text-on-surface cursor-pointer"
            >
              ESC
            </button>
          </div>
          <div class="max-h-96 overflow-y-auto p-space-sm flex flex-col gap-1">
            @for (item of filteredResults(); track item.id) {
              <button
                type="button"
                (click)="navigateToResult(item)"
                class="w-full text-left p-space-sm rounded-xl hover:bg-surface-container-low transition-colors flex items-start gap-space-sm cursor-pointer"
              >
                <div
                  class="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5"
                >
                  <mat-icon class="text-[20px]">{{ item.icon }}</mat-icon>
                </div>
                <div class="flex flex-col min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-title-md text-title-md text-on-surface font-bold truncate">
                      {{ item.title }}
                    </span>
                    <span
                      class="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm shrink-0"
                    >
                      {{ item.category }}
                    </span>
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    {{ item.description }}
                  </p>
                </div>
              </button>
            } @empty {
              <div class="p-space-lg text-center text-on-surface-variant font-body-sm">
                No matching RxDigita platforms or modules found for "{{ searchQuery() }}".
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class Header {
  private readonly router = inject(Router);
  readonly logoUrl = RX_LOGO_URL;

  readonly searchOpen = signal(false);
  readonly profileOpen = signal(false);
  readonly mobileMenuOpen = signal(false);
  readonly searchQuery = signal('');

  readonly searchControl = new FormControl('', {nonNullable: true});

  readonly filteredResults = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    if (!q) {
      return SEARCH_INDEX.slice(0, 8);
    }
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q),
    );
  });

  constructor() {
    this.searchControl.valueChanges.subscribe((val) => {
      this.searchQuery.set(val);
    });
  }

  openSearch(): void {
    this.profileOpen.set(false);
    this.mobileMenuOpen.set(false);
    this.searchControl.setValue('');
    this.searchQuery.set('');
    this.searchOpen.set(true);
  }

  toggleProfile(): void {
    this.searchOpen.set(false);
    this.mobileMenuOpen.set(false);
    this.profileOpen.update((v) => !v);
  }

  closeMenus(): void {
    this.searchOpen.set(false);
    this.profileOpen.set(false);
    this.mobileMenuOpen.set(false);
  }

  navigateToResult(item: SearchIndexItem): void {
    this.searchOpen.set(false);
    this.router.navigate([item.route], {
      fragment: item.fragment,
    });
  }
}
