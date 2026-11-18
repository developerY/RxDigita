import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="flex flex-col w-full">
      <!-- Top Ambient Glow Field -->
      <div class="relative w-full overflow-hidden bg-surface-container-lowest">
        <div
          class="absolute -top-40 right-10 w-[580px] h-[580px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute top-20 right-1/3 w-[360px] h-[360px] bg-warm-glow/45 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute top-64 -left-32 w-[460px] h-[460px] bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute bottom-12 right-16 w-[340px] h-[340px] bg-aqua-glow/40 rounded-full blur-3xl pointer-events-none"
        ></div>

        <!-- Hero Section -->
        <section class="relative w-full max-w-[1440px] mx-auto px-margin pt-space-xl pb-margin-lg">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <!-- Left Column: Typographic Focus -->
            <div class="lg:col-span-7 flex flex-col gap-space-lg">
              <div
                class="inline-flex items-center gap-space-xs self-start px-space-md py-1 rounded-full bg-surface-container-low text-secondary"
              >
                <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span class="font-label-sm text-label-sm uppercase tracking-wider"
                  >Clinical Bio-Telemetry OS</span
                >
                <span class="text-tertiary-fixed-dim">|</span>
                <span class="font-label-sm text-label-sm font-normal text-on-surface-variant"
                  >Version 4.2 Active</span
                >
              </div>
              <div class="flex flex-col gap-space-xs">
                <h1
                  class="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-[1.08]"
                >
                  Technology <span class="text-primary">for Life</span>:<br />
                  <span class="text-secondary">Enhancing Well-Being</span> Through Advanced
                  Technology
                </h1>
                <p
                  class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-sm leading-relaxed"
                >
                  RxDigita bridges clinical biotechnology, painless micro-needle sensor arrays, and
                  precision predictive metabolism—transforming volatile vital data into continuous,
                  life-extending clarity.
                </p>
              </div>
              <!-- CTAs & Micro Proof -->
              <div class="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  routerLink="/platforms"
                  class="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-xl bg-primary text-on-primary font-title-md text-title-md shadow-md hover:bg-primary-container transition-all"
                >
                  <span>Explore Platforms</span>
                  <mat-icon class="text-[18px]">arrow_forward</mat-icon>
                </a>
                <a
                  routerLink="/innovation"
                  class="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-xl bg-surface-container-low text-primary font-title-md text-title-md hover:bg-surface-container transition-colors"
                >
                  <mat-icon class="text-[18px]">biotech</mat-icon>
                  <span>Clinical Research</span>
                </a>
                <div class="flex items-center gap-space-xs pl-space-xs text-on-surface-variant">
                  <mat-icon class="text-secondary text-[20px]">verified_user</mat-icon>
                  <span class="font-caption text-caption"
                    >FDA Phase II Verified Transdermal Sensor</span
                  >
                </div>
              </div>
            </div>

            <!-- Right Column: Interactive Diagnostic Terminal Visual -->
            <div class="lg:col-span-5 relative">
              <div
                class="relative w-full rounded-2xl bg-surface-container-lowest p-space-md shadow-xl flex flex-col gap-space-md"
              >
                <!-- Live telemetry bar -->
                <div
                  class="flex items-center justify-between bg-surface-container-low px-space-md py-space-xs rounded-lg"
                >
                  <div class="flex items-center gap-space-xs">
                    <span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <span class="font-label-sm text-label-sm text-on-surface uppercase"
                      >CGM Disk Pulse • Patch 09B</span
                    >
                  </div>
                  <span class="font-caption text-caption text-secondary font-mono"
                    >Live: &lt; 8.4s latency</span
                  >
                </div>
                <!-- Visual Subject -->
                <div
                  class="relative w-full h-[260px] rounded-xl overflow-hidden shadow-inner bg-surface-container"
                >
                  <img
                    class="w-full h-full object-cover"
                    alt="Ultra-thin biocompatible transdermal micro-needle patch with clinical cyan telemetry light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd4QpLtBS5zVaiKu2NnNhDwUG1T4182OZ8cqqkWEX6_Xod-iW56HuTI7jJ4peQJEu2PpdgP1vsCUEPhtgFmpFDNcm_vqtJ3_KsfYsUx2MD-YLPUzoLR8n8-JCYiTH-WB_NRhcfToqieF_QZyg8r_gvUXg7Nscaj30Kxn1OWc_Z-9jHhENyQgAcckdaz6OoFh2AaIAtAjlfuIcZlfDNU-8-9F0VGZb4i5s3M5Zdp_Q"
                    referrerpolicy="no-referrer"
                  />
                  <!-- Floating Micro Data Readout -->
                  <div
                    class="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md rounded-lg p-space-sm shadow-md flex items-center justify-between"
                  >
                    <div>
                      <div class="font-caption text-caption text-tertiary">
                        Real-Time Interstitial Glucose
                      </div>
                      <div class="font-headline-sm text-headline-sm text-primary font-bold">
                        104
                        <span class="text-caption font-normal text-on-surface-variant"
                          >mg/dL (Nominal)</span
                        >
                      </div>
                    </div>
                    <div class="flex flex-col items-end">
                      <span
                        class="font-caption text-caption text-secondary font-bold flex items-center gap-1"
                      >
                        <mat-icon class="text-[14px]">trending_flat</mat-icon> Steady
                      </span>
                      <span class="font-label-sm text-label-sm text-tertiary font-mono"
                        >ADME Model: Stable</span
                      >
                    </div>
                  </div>
                </div>
                <!-- Dynamic Telemetry Waveform -->
                <div class="flex flex-col gap-space-xs px-space-xs">
                  <div
                    class="flex justify-between items-center text-caption font-caption text-on-surface-variant"
                  >
                    <span>Micro-osmotic Flux Stability</span>
                    <span class="text-primary font-bold">99.98% Accuracy</span>
                  </div>
                  <div class="w-full h-10 bg-surface-container-low rounded-lg p-1.5 flex items-center">
                    <svg
                      class="w-full h-full text-primary"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 380 32"
                    >
                      <path
                        d="M0,16 Q20,16 35,6 T70,26 T105,14 T140,18 T175,8 T210,22 T245,16 T280,10 T315,20 T350,14 L380,16"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M0,16 Q20,16 35,6 T70,26 T105,14 T140,18 T175,8 T210,22 T245,16 T280,10 T315,20 T350,14 L380,16 L380,32 L0,32 Z"
                        fill="currentColor"
                        opacity="0.08"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Key Metrics Bar -->
      <section class="w-full bg-surface-container-low py-space-lg">
        <div class="max-w-[1440px] mx-auto px-margin">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div
              class="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-space-xs text-primary">
                <mat-icon class="text-[20px]">layers</mat-icon>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary"
                  >IP Portfolio</span
                >
              </div>
              <div class="font-headline-md text-headline-md text-on-surface font-bold">
                4+ Patented
              </div>
              <div class="font-body-sm text-body-sm text-on-surface-variant">
                Delivery Platforms in Clinical Pipeline
              </div>
            </div>
            <div
              class="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-space-xs text-secondary">
                <mat-icon class="text-[20px]">speed</mat-icon>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary"
                  >Telemetry</span
                >
              </div>
              <div class="font-headline-md text-headline-md text-on-surface font-bold">
                &lt; 10s Latency
              </div>
              <div class="font-body-sm text-body-sm text-on-surface-variant">
                Zero-lag CGM Interstitial Telemetry
              </div>
            </div>
            <div
              class="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-space-xs text-primary">
                <mat-icon class="text-[20px]">vaccines</mat-icon>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary"
                  >Painless Tech</span
                >
              </div>
              <div class="font-headline-md text-headline-md text-on-surface font-bold">
                0.35 mm
              </div>
              <div class="font-body-sm text-body-sm text-on-surface-variant">
                Sub-nerve Microneedle Drug Delivery
              </div>
            </div>
            <div
              class="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-space-xs text-secondary">
                <mat-icon class="text-[20px]">hub</mat-icon>
                <span class="font-label-sm text-label-sm uppercase tracking-wider text-secondary"
                  >Bio-Compute</span
                >
              </div>
              <div class="font-headline-md text-headline-md text-on-surface font-bold">
                ADME-Tox
              </div>
              <div class="font-body-sm text-body-sm text-on-surface-variant">
                Real-Time Predictive Pharmacokinetics
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Pillars Bento / Card Architecture -->
      <section class="w-full max-w-[1440px] mx-auto px-margin py-margin-lg flex flex-col gap-space-xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div class="flex flex-col gap-space-xs max-w-xl">
            <span
              class="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold"
              >Comprehensive Capabilities</span
            >
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Four Strategic Pillars of Digital Medicine
            </h2>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-md">
            From transdermal hardware delivery to systemic biological data analysis, our unified
            ecosystems solve patient adherence and clinical trial precision.
          </p>
        </div>

        <!-- 4 Interactive Pillar Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <!-- Card 1 -->
          <a
            routerLink="/platforms"
            fragment="microneedles"
            class="group relative flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-md"
            >
              <mat-icon class="text-[28px]">grid_goldenratio</mat-icon>
            </div>
            <div
              class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mb-1"
            >
              Pillar 01
            </div>
            <h3
              class="font-title-md text-title-md text-on-surface font-bold mb-space-xs group-hover:text-primary transition-colors"
            >
              MicroNeedles &amp; Sensors
            </h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1">
              Rx Tattoo and CGM Disk transdermal arrays providing painless fluidics, therapeutic
              molecule micro-dosing, and interstitial biometric capture.
            </p>
            <div
              class="pt-space-sm flex flex-col gap-space-xs bg-surface-container-low rounded-lg p-space-sm mb-space-md"
            >
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>Rx Tattoo Fluidics</span>
                <span class="text-secondary font-bold">Active</span>
              </div>
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>Hummingbird Fuel Delivery</span>
                <span class="text-primary font-bold">Certified</span>
              </div>
            </div>
            <div
              class="flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
            >
              <span>Explore Platforms</span>
              <mat-icon class="text-[16px]">arrow_forward</mat-icon>
            </div>
          </a>

          <!-- Card 2 -->
          <a
            routerLink="/health-living"
            class="group relative flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-md"
            >
              <mat-icon class="text-[28px]">vital_signs</mat-icon>
            </div>
            <div
              class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mb-1"
            >
              Pillar 02
            </div>
            <h3
              class="font-title-md text-title-md text-on-surface font-bold mb-space-xs group-hover:text-primary transition-colors"
            >
              Health &amp; Connected Living
            </h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1">
              Connected nutrition appliances, circadian sleep architecture, and smart cycle
              ergonomics engineered to harmonize with cellular recovery rhythms.
            </p>
            <div
              class="pt-space-sm flex flex-col gap-space-xs bg-surface-container-low rounded-lg p-space-sm mb-space-md"
            >
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>Sleep Architecture Engine</span>
                <span class="text-secondary font-bold">v2.1 Sync</span>
              </div>
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>Nutritional Delivery Matrix</span>
                <span class="text-primary font-bold">Adaptive</span>
              </div>
            </div>
            <div
              class="flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
            >
              <span>Review Health Systems</span>
              <mat-icon class="text-[16px]">arrow_forward</mat-icon>
            </div>
          </a>

          <!-- Card 3 -->
          <a
            routerLink="/innovation"
            class="group relative flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-md"
            >
              <mat-icon class="text-[28px]">ecg_heart</mat-icon>
            </div>
            <div
              class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mb-1"
            >
              Pillar 03
            </div>
            <h3
              class="font-title-md text-title-md text-on-surface font-bold mb-space-xs group-hover:text-primary transition-colors"
            >
              Innovation &amp; RxApp
            </h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1">
              Integrated cardiovascular DeSign heuristics, glucose trend mapping, and predictive
              patient companion tools that pre-empt clinical spikes.
            </p>
            <div
              class="pt-space-sm flex flex-col gap-space-xs bg-surface-container-low rounded-lg p-space-sm mb-space-md"
            >
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>Cardiovascular DeSign</span>
                <span class="text-secondary font-bold">Telemetry</span>
              </div>
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>RxApp WellBeing Hub</span>
                <span class="text-primary font-bold">Integrated</span>
              </div>
            </div>
            <div
              class="flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
            >
              <span>Discover Innovation</span>
              <mat-icon class="text-[16px]">arrow_forward</mat-icon>
            </div>
          </a>

          <!-- Card 4 -->
          <a
            routerLink="/platforms"
            fragment="adme-tox"
            class="group relative flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors mb-space-md"
            >
              <mat-icon class="text-[28px]">science</mat-icon>
            </div>
            <div
              class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider mb-1"
            >
              Pillar 04
            </div>
            <h3
              class="font-title-md text-title-md text-on-surface font-bold mb-space-xs group-hover:text-primary transition-colors"
            >
              Medical ADME-Tox &amp; IoT
            </h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md flex-1">
              Absorption, Distribution, Metabolism, and Excretion algorithmic simulations paired with
              distributed clinical laboratory instrumentation.
            </p>
            <div
              class="pt-space-sm flex flex-col gap-space-xs bg-surface-container-low rounded-lg p-space-sm mb-space-md"
            >
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>ADME-Tox Modeling</span>
                <span class="text-secondary font-bold">Validated</span>
              </div>
              <div class="flex items-center justify-between text-caption font-caption text-on-surface">
                <span>Laboratory IoT Mesh</span>
                <span class="text-primary font-bold">Encrypted</span>
              </div>
            </div>
            <div
              class="flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold group-hover:translate-x-1 transition-transform"
            >
              <span>View Bio-Informatics</span>
              <mat-icon class="text-[16px]">arrow_forward</mat-icon>
            </div>
          </a>
        </div>
      </section>

      <!-- Featured Spotlight: CGM Disk & Rx Tattoo Revolution -->
      <section
        class="w-full bg-gradient-to-br from-surface-container-low via-aqua-surface/75 to-surface-container-low py-margin-lg"
      >
        <div class="max-w-[1440px] mx-auto px-margin">
          <div
            class="bg-surface-container-lowest rounded-3xl p-space-lg lg:p-margin shadow-lg flex flex-col gap-space-xl"
          >
            <div
              class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-lg"
            >
              <div class="flex flex-col gap-space-xs max-w-2xl">
                <div
                  class="inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold"
                >
                  <mat-icon class="text-[18px]">verified</mat-icon> Breakthrough Engineering
                </div>
                <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  The CGM Disk &amp; Rx Tattoo Revolution
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Comparing standard blood capillary fingersticks against our patented continuous
                  intradermal micro-array. Zero lancet trauma, real-time predictive trend
                  intelligence.
                </p>
              </div>
              <div class="flex items-center gap-space-xs">
                <span
                  class="px-space-md py-space-xs rounded-full bg-surface-container text-primary font-label-md text-label-md font-bold"
                  >Patent ID: US-1094-RXD</span
                >
              </div>
            </div>

            <!-- Comparative Layout Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <!-- Conventional Modality -->
              <div
                class="lg:col-span-5 bg-surface-container-low rounded-2xl p-space-lg flex flex-col gap-space-md"
              >
                <div class="flex items-center justify-between">
                  <span class="font-label-md text-label-md text-tertiary uppercase font-bold"
                    >Conventional Modality</span
                  >
                  <span
                    class="px-space-sm py-0.5 rounded bg-error-container text-on-error-container font-caption text-caption font-bold"
                    >High Friction</span
                  >
                </div>
                <div class="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container">
                  <img
                    class="w-full h-full object-cover"
                    alt="Traditional capillary blood glucose finger-stick meter with test strips and lancets"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8cYod4Z1K8UKNnAIFJieD_eQYSu4dj7FrkRzbgJBwNlkEfWALuXhbMNlKRkImGARqPKGAROiyAd-pZ8s3f6eKYZh5rv-sQDGTdr_k5VFCLaCry50TuMFKiAjlvN2HhRFLibGQ0Z3bJ6q--ykzdsXutgJwOubg10IptokvGNA-VDDTyBJKdz2rqqEA4pMa9L9E2iSa_UPr4soawuPS2LNnLNWxjmjNvXpZhZI9MTI"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <div class="flex flex-col gap-space-xs">
                  <h4 class="font-title-md text-title-md text-on-surface">
                    Capillary Blood Fingersticks
                  </h4>
                  <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <li class="flex items-start gap-2">
                      <mat-icon class="text-error text-[18px] shrink-0 mt-0.5">close</mat-icon>
                      <span
                        ><strong>Nociceptive trauma:</strong> Penetrates deep pain receptors
                        repeatedly daily.</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <mat-icon class="text-error text-[18px] shrink-0 mt-0.5">close</mat-icon>
                      <span
                        ><strong>Static snapshot:</strong> Misses dangerous nocturnal hypoglycemic
                        plunges.</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <mat-icon class="text-error text-[18px] shrink-0 mt-0.5">close</mat-icon>
                      <span
                        ><strong>Single-analyte:</strong> Cannot deliver drug doses or map
                        pharmacokinetics.</span
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Central Transform Indicator -->
              <div class="lg:col-span-2 flex flex-col items-center justify-center gap-space-xs py-space-sm">
                <div
                  class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md"
                >
                  <mat-icon class="text-[24px]">swap_horiz</mat-icon>
                </div>
                <span
                  class="font-label-sm text-label-sm text-secondary uppercase font-bold text-center"
                  >Biotech Leap</span
                >
              </div>

              <!-- RxDigita CGM Disk & Rx Tattoo -->
              <div
                class="lg:col-span-5 bg-surface-container rounded-2xl p-space-lg flex flex-col gap-space-md shadow-sm"
              >
                <div class="flex items-center justify-between">
                  <span class="font-label-md text-label-md text-primary uppercase font-bold"
                    >RxDigita Next-Gen</span
                  >
                  <span
                    class="px-space-sm py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-bold"
                    >Sub-Cutaneous</span
                  >
                </div>
                <div class="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container-high">
                  <img
                    class="w-full h-full object-cover"
                    alt="Microscopic rendering of RxDigita biocompatible silicon micro-needle pyramid array"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvTmYouGdqoykHXTZPcRzrycTXOv34kH_X5Lpe1I-A-xG25HxcWySGjBX_UJF18BfUn1hNZowjsub5sN_QudFfZt7vVDVv_slJLTSYUCsJYr1MOGd76Az0ZaJRyGode0il2Qle3M4IOllT82V8mhumSTcZUsdZJBLpCIW0MNlmILsE4GOIq4xiaLFizyk0sSMvXEF1C5vFzC2RJB6ZMjbrQ7rrLHbQPHgN7lwdGnQ"
                    referrerpolicy="no-referrer"
                  />
                </div>
                <div class="flex flex-col gap-space-xs">
                  <h4 class="font-title-md text-title-md text-on-surface">
                    CGM Disk &amp; Rx Tattoo Matrix
                  </h4>
                  <ul class="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <li class="flex items-start gap-2">
                      <mat-icon class="text-secondary text-[18px] shrink-0 mt-0.5"
                        >check_circle</mat-icon
                      >
                      <span
                        ><strong>100% Pain-free:</strong> 350-micron depth sits above tactile nerve
                        endings.</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <mat-icon class="text-secondary text-[18px] shrink-0 mt-0.5"
                        >check_circle</mat-icon
                      >
                      <span
                        ><strong>Continuous stream:</strong> Updates interstitial glucose every 8
                        seconds.</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <mat-icon class="text-secondary text-[18px] shrink-0 mt-0.5"
                        >check_circle</mat-icon
                      >
                      <span
                        ><strong>Dual Function:</strong> Integrated transdermal delivery via
                        microfluidic channels.</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Metric Breakdown -->
            <div
              class="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md"
            >
              <div class="flex items-center gap-space-md">
                <div
                  class="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm"
                >
                  <mat-icon class="text-[22px]">auto_graph</mat-icon>
                </div>
                <div>
                  <div class="font-title-md text-title-md text-on-surface font-bold">
                    Clinical Efficacy Index (CEI)
                  </div>
                  <div class="font-caption text-caption text-on-surface-variant">
                    Comparison of glycemic time-in-range adherence over 90 days
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-space-xl w-full md:w-auto justify-end">
                <div class="flex flex-col items-center">
                  <span class="font-caption text-caption text-tertiary">Standard Fingerstick</span>
                  <span class="font-headline-sm text-headline-sm text-on-surface-variant font-bold"
                    >54.2%</span
                  >
                </div>
                <div class="h-8 w-[1px] bg-outline-variant"></div>
                <div class="flex flex-col items-center">
                  <span class="font-caption text-caption text-secondary font-bold"
                    >Rx Tattoo Array</span
                  >
                  <span class="font-headline-sm text-headline-sm text-primary font-bold"
                    >92.7%</span
                  >
                </div>
                <a
                  routerLink="/platforms"
                  fragment="schematics"
                  class="px-space-md py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary-container transition-colors"
                >
                  Read Clinical Whitepaper
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Connected Ecosystem: Hardware, Lifestyle & Nutrition -->
      <section class="w-full max-w-[1440px] mx-auto px-margin py-margin-lg">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div class="lg:col-span-5 flex flex-col gap-space-md">
            <span
              class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-widest"
              >Ecosystem Synergy</span
            >
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              From Laboratory Formulation to Your Kitchen &amp; Sleep Suite
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Human health cannot be solved by clinical sensors alone. RxDigita synthesizes
              nutritional micro-delivery appliances, continuous exercise kinetics, and circadian
              sleep algorithms into one continuous bio-loop.
            </p>
            <div class="flex flex-col gap-space-sm pt-space-xs">
              <div class="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                <mat-icon class="text-primary text-[24px]">kitchen</mat-icon>
                <div>
                  <div class="font-title-md text-title-md text-on-surface font-bold">
                    Nutritional Delivery Appliances
                  </div>
                  <div class="font-body-sm text-body-sm text-on-surface-variant">
                    Automated macro-nutrient formulation tailored to current CGM readings.
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                <mat-icon class="text-primary text-[24px]">bedtime</mat-icon>
                <div>
                  <div class="font-title-md text-title-md text-on-surface font-bold">
                    Sleep Architecture &amp; App Sync
                  </div>
                  <div class="font-body-sm text-body-sm text-on-surface-variant">
                    Neuro-restorative tracking identifying nighttime metabolic spikes.
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                <mat-icon class="text-primary text-[24px]">pedal_bike</mat-icon>
                <div>
                  <div class="font-title-md text-title-md text-on-surface font-bold">
                    Smart Exercise &amp; Bike Telemetry
                  </div>
                  <div class="font-body-sm text-body-sm text-on-surface-variant">
                    Direct integration with cardiovascular sensors to calculate glucose load
                    disposal.
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-space-xs">
              <a
                routerLink="/health-living"
                class="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-high text-primary font-title-md text-title-md hover:bg-surface-container transition-colors"
              >
                <span>Explore Connected Health Modules</span>
                <mat-icon class="text-[18px]">chevron_right</mat-icon>
              </a>
            </div>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div class="relative h-72 rounded-2xl overflow-hidden shadow-md bg-surface-container">
              <img
                class="w-full h-full object-cover"
                alt="Smart kitchen nutrition dispensing appliance for precision liquid micro-nutrients"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp24BuKpX8BDVNrXtKgZMT_3fwD3Z7COHGXr5_fUQ339EE__fut-6K6jTGDG5tPVxNv_2EOhjb8T-g5Dj0yFFMznQnDWbetgi_AH6mNlUF1DHyHoE8aNs9vS4PlAcygU93C73DEap82EtzQFL51odtAAhOflRp5EVhr9RUX5Uxivw_yOKUWkgj2TmuVx6-b-hymoYJpONAAxzAiRSRXb-X572jxGbHEO2K16W7PrY"
                referrerpolicy="no-referrer"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-on-tertiary"
              >
                <span class="font-label-sm text-label-sm uppercase text-secondary-fixed"
                  >Nutrition Appliance</span
                >
                <span class="font-title-md text-title-md font-bold">Automated Bio-Delivery</span>
              </div>
            </div>
            <div
              class="relative h-72 rounded-2xl overflow-hidden shadow-md sm:translate-y-8 bg-surface-container"
            >
              <img
                class="w-full h-full object-cover"
                alt="Connected indoor stationary smart fitness cycle displaying cardiovascular and glucose telemetry"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0wANLZVwpgYTVZdE4jqgbdVVIu006uHFcaoJW2-XN8s-Ro2AzE8ZFHYV8CZswuEL5h-nMgp2hpckE2bgJIHwwWWRademCI9lt_LV153EML9jcOWqglulB3qufL196u8QOUPvMEl92B0e3Q0E6vLr1DO_fhUq87IBpty9iz_-KbL_5bM_vtZRXlWcV0Tg0k42fK-BmVj3TrhUQ_GzNEKZNhXB2KClRzeNVIe6Jz-A"
                referrerpolicy="no-referrer"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-on-tertiary"
              >
                <span class="font-label-sm text-label-sm uppercase text-secondary-fixed"
                  >Exercise Kinetic Telemetry</span
                >
                <span class="font-title-md text-title-md font-bold">Real-time Glucose Burn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Research Heritage & Legacy -->
      <section class="w-full bg-surface-container-lowest py-margin-lg">
        <div class="max-w-[1440px] mx-auto px-margin">
          <div
            class="bg-gradient-to-br from-surface-container-low via-warm-surface/75 to-surface-container-low rounded-3xl p-space-lg lg:p-margin flex flex-col gap-space-lg"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div class="flex flex-col gap-space-xs">
                <div
                  class="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase font-bold tracking-widest"
                >
                  <mat-icon class="text-[18px]">history_edu</mat-icon> Deep Scientific Roots
                </div>
                <h3 class="font-headline-md text-headline-md text-on-surface font-bold">
                  Built on Proven Biotechnology Leadership
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  From our early contributions to the pioneering Google Health Wave
                  conceptualizations to modern transdermal micro-fluidic delivery systems, RxDigita
                  leads continuous health intelligence.
                </p>
              </div>
              <a
                routerLink="/company-legacy"
                class="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-xl bg-surface-container-lowest text-primary font-title-md text-title-md shadow-sm hover:shadow-md transition-shadow"
              >
                <span>Read Company Legacy</span>
                <mat-icon class="text-[18px]">arrow_forward</mat-icon>
              </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-space-xs">
              <div
                class="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-space-xs shadow-sm"
              >
                <span class="font-label-sm text-label-sm text-secondary font-bold"
                  >2008 – 2012</span
                >
                <div class="font-title-md text-title-md text-on-surface font-bold">
                  Google Health Wave Era
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Early architectural frameworks for patient-sovereign medical data integration and
                  standardized EHR protocol interchange.
                </p>
              </div>
              <div
                class="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-space-xs shadow-sm"
              >
                <span class="font-label-sm text-label-sm text-secondary font-bold"
                  >2013 – 2020</span
                >
                <div class="font-title-md text-title-md text-on-surface font-bold">
                  Micro-Fluidic &amp; Sensor R&amp;D
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Invention of the Hummingbird Fuel micro-pump architecture and sub-dermal silicon
                  pyramid arrays for painless transdermal capture.
                </p>
              </div>
              <div
                class="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-space-xs shadow-sm"
              >
                <span class="font-label-sm text-label-sm text-secondary font-bold"
                  >2021 – Present</span
                >
                <div class="font-title-md text-title-md text-on-surface font-bold">
                  Continuous Bio-Clinical OS
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Commercialization of the CGM Disk, Rx Tattoo telemetry, and deep integration into
                  cloud ADME-Tox pharmacokinetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Global Action Banner -->
      <section class="w-full max-w-[1440px] mx-auto px-margin py-margin-lg">
        <div
          class="relative bg-primary text-on-primary rounded-3xl p-space-xl overflow-hidden shadow-xl"
        >
          <div
            class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"
          ></div>
          <div
            class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg"
          >
            <div class="flex flex-col gap-space-xs max-w-2xl">
              <span
                class="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-widest font-bold"
                >Partner With RxDigita</span
              >
              <h2 class="font-headline-lg text-headline-lg font-bold text-on-primary tracking-tight">
                Accelerate Your Clinical Trial or Diagnostic Pipeline
              </h2>
              <p class="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
                Integrate our patented microneedle platforms, bio-sensor disks, and ADME-Tox
                predictive software into your therapeutic development lifecycle.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-space-md">
              <a
                routerLink="/company-legacy"
                fragment="contact-us"
                class="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md rounded-xl bg-surface-container-lowest text-primary font-title-md text-title-md shadow-md hover:bg-surface-container-low transition-colors"
              >
                Request Clinical Access
              </a>
              <a
                routerLink="/platforms"
                class="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md rounded-xl bg-primary-container text-on-primary-container font-title-md text-title-md hover:bg-primary-container/80 transition-colors"
              >
                Platform Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class Home {}
