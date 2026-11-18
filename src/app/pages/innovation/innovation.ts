import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

type CompanionMode = 'glucose' | 'cardio';
type InnovationModalType = 'cad' | 'heart-paper' | 'glucose-study' | 'diet-study' | null;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-innovation',
  imports: [RouterLink, MatIconModule],
  host: {
    '(document:keydown.escape)': 'activeModal.set(null)',
  },
  template: `
    <div class="flex flex-col w-full">
      <!-- Top Hero Header / Architectural Title -->
      <section
        class="relative w-full px-margin py-space-xl overflow-hidden bg-gradient-to-b from-surface-container-low/60 via-warm-surface/55 to-surface"
      >
        <div
          class="absolute -top-32 right-12 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute top-12 right-1/3 w-72 h-72 rounded-full bg-warm-glow/40 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute top-48 left-10 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"
        ></div>
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg relative z-10">
          <div
            class="flex flex-wrap items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary"
          >
            <span
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-bold"
            >
              <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              R&amp;D Pipeline V4.2
            </span>
            <span class="text-tertiary">/</span>
            <span class="text-on-surface-variant">Translational Medicine</span>
            <span class="text-tertiary">/</span>
            <span class="text-primary font-semibold">Human-Centered Engineering</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div class="lg:col-span-8 flex flex-col gap-space-sm">
              <h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Innovation &amp; Digital Therapeutics:
                <span class="text-primary">Pioneering Human-Centric Medical Design</span>
              </h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                Converging micro-electromechanical sensing, acoustic cardiovascular telemetry, and
                non-stigmatizing wearable form factors. We synthesize clinical-grade precision with
                empathetic, daily-wear ergonomics.
              </p>
            </div>
            <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end lg:items-end">
              <div
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md w-full max-w-sm"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0"
                >
                  <mat-icon class="text-[26px]">biotech</mat-icon>
                </div>
                <div class="flex flex-col">
                  <span class="font-label-sm text-label-sm text-secondary uppercase"
                    >ISO 13485 &amp; MDR Ready</span
                  >
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Class IIa / IIb Pipeline</span
                  >
                </div>
              </div>
              <div class="flex items-center gap-space-sm text-tertiary font-caption text-caption">
                <mat-icon class="text-[16px] text-secondary">verified_user</mat-icon>
                <span>Ethical IRB Protocol • Clinical Trials In Vivo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Metric Strip -->
      <section class="w-full px-margin -mt-6 mb-space-xl">
        <div
          class="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
        >
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-tertiary uppercase"
              >Acoustic Signal Res.</span
            >
            <span class="font-headline-md text-headline-md text-primary font-bold">99.4%</span>
            <span class="font-caption text-caption text-on-surface-variant mt-0.5"
              >Dual-MEMS phonocardiogram</span
            >
          </div>
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-tertiary uppercase"
              >Sensor Profile Thickness</span
            >
            <span class="font-headline-md text-headline-md text-secondary font-bold">1.8 mm</span>
            <span class="font-caption text-caption text-on-surface-variant mt-0.5"
              >Flexible medical hydrocolloid</span
            >
          </div>
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-tertiary uppercase">Glycemic MARD</span>
            <span class="font-headline-md text-headline-md text-primary font-bold">7.8%</span>
            <span class="font-caption text-caption text-on-surface-variant mt-0.5"
              >Inter-day analytical precision</span
            >
          </div>
          <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-tertiary uppercase">Cohort Ingress</span>
            <span class="font-headline-md text-headline-md text-tertiary font-bold">1,420+</span>
            <span class="font-caption text-caption text-on-surface-variant mt-0.5"
              >Enrolled longitudinal subjects</span
            >
          </div>
        </div>
      </section>

      <!-- Initiative 1: Medical Device Design Research -->
      <section class="w-full px-margin py-space-xl bg-surface" id="device-research">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div class="flex flex-col gap-space-xs max-w-2xl">
              <div class="flex items-center gap-space-xs">
                <span
                  class="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wide"
                  >Initiative 01</span
                >
                <span class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider"
                  >Device Architecture</span
                >
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Medical Device Design Research
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Deconstructing medical hostility through sculptural, anatomically compliant
                geometries. Our DeSign lab replaces institutional clinical bulk with breathable,
                second-skin microelectronics.
              </p>
            </div>
            <div class="flex items-center gap-space-sm">
              <button
                type="button"
                (click)="activeModal.set('cad')"
                class="px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <mat-icon class="text-[18px]">view_in_ar</mat-icon>
                Industrial CAD Schematics
              </button>
            </div>
          </div>

          <!-- Dual Cards: Heart DeSign & Glucose DeSign -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg">
            <!-- CARD 1: Heart DeSign -->
            <div
              class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-lg hover:shadow-md transition-shadow group"
            >
              <div class="flex flex-col gap-space-md">
                <div class="flex items-center justify-between">
                  <span
                    class="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase font-bold"
                  >
                    Program • Heart DeSign
                  </span>
                  <span
                    class="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Continuous 6-Lead Acoustics
                  </span>
                </div>
                <div class="flex flex-col gap-space-xs">
                  <h3
                    class="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors"
                  >
                    Cardiovascular Acoustics &amp; ECG Anomaly Telemetry
                  </h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                    Next-generation continuous heart murmur resonance detection fused with
                    multi-vector electrophysiological capture. Features ultra-low profile sternal
                    contouring engineered for 14-day persistent hydrogel adhesion without dermal
                    maceration.
                  </p>
                </div>

                <!-- Heart Acoustic & Vector ECG Visualizer -->
                <div
                  class="relative w-full h-56 bg-surface-container-low rounded-xl p-space-md overflow-hidden flex flex-col justify-between"
                >
                  <svg
                    class="absolute inset-0 w-full h-full text-surface-container-high/40"
                    preserveAspectRatio="none"
                    viewBox="0 0 400 150"
                  >
                    <path
                      d="M0,80 Q50,40 100,70 T200,90 T300,50 T400,75 L400,150 L0,150 Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div
                    class="relative z-10 flex items-center justify-between font-caption text-caption text-tertiary"
                  >
                    <span class="flex items-center gap-1 text-on-surface font-semibold">
                      <mat-icon class="text-[16px] text-error">monitor_heart</mat-icon>
                      Sternal Hydro-Array (Ch. 1-3)
                    </span>
                    <span class="font-mono bg-surface-container px-2 py-0.5 rounded text-primary"
                      >HR: 71 bpm • QTc: 412ms</span
                    >
                  </div>
                  <div class="relative z-10 my-auto py-2">
                    <svg
                      class="w-full h-20 text-primary"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 500 80"
                    >
                      <path
                        d="M 0,40 L 40,40 L 50,38 L 60,42 L 70,40 L 85,40 L 95,28 L 105,55 L 115,10 L 125,72 L 135,36 L 145,43 L 155,40 L 175,40 L 185,32 L 205,32 L 215,40 L 250,40 L 260,38 L 270,42 L 280,40 L 295,40 L 305,28 L 315,55 L 325,10 L 335,72 L 345,36 L 355,43 L 365,40 L 385,40 L 395,32 L 415,32 L 425,40 L 460,40 L 475,38 L 500,40"
                      ></path>
                    </svg>
                  </div>
                  <div
                    class="relative z-10 flex items-center justify-between text-caption text-tertiary font-label-sm"
                  >
                    <div class="flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full bg-secondary"></span>
                      <span>S1/S2 Valvular Sound Amplitude: Nominal</span>
                    </div>
                    <span class="font-mono text-secondary">0.4 - 250 Hz Passband</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-primary text-[18px]">check_circle</mat-icon>
                    <span>Sub-dermal acoustic MEMS</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-primary text-[18px]">check_circle</mat-icon>
                    <span>Zero-compression sternum band</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-primary text-[18px]">check_circle</mat-icon>
                    <span>Atrial fibrillation flagging</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-primary text-[18px]">check_circle</mat-icon>
                    <span>IP68 waterproof showerproof</span>
                  </div>
                </div>
              </div>

              <div
                class="pt-space-md bg-surface-container-low/40 -mx-space-lg -mb-space-lg px-space-lg pb-space-lg rounded-b-xl flex items-center justify-between"
              >
                <span class="font-caption text-caption text-tertiary"
                  >Clinical Registry:
                  <strong class="text-on-surface font-semibold">NCT-0589211</strong></span
                >
                <button
                  type="button"
                  (click)="activeModal.set('heart-paper')"
                  class="font-label-md text-label-md text-primary font-bold hover:text-primary-container inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  DeSign Architecture Paper <mat-icon class="text-[16px]">arrow_forward</mat-icon>
                </button>
              </div>
            </div>

            <!-- CARD 2: Glucose DeSign -->
            <div
              class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-lg hover:shadow-md transition-shadow group"
            >
              <div class="flex flex-col gap-space-md">
                <div class="flex items-center justify-between">
                  <span
                    class="px-3 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm uppercase font-bold"
                  >
                    Program • Glucose DeSign
                  </span>
                  <span
                    class="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm font-semibold"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Discreet Form Factor
                  </span>
                </div>
                <div class="flex flex-col gap-space-xs">
                  <h3
                    class="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors"
                  >
                    Human-Centered Wearable Continuous Glucose Monitoring
                  </h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                    Overcoming clinical stigma through bespoke jewelry-like industrial design.
                    Utilizing painless microneedle fluid dynamics integrated into a coin-sized
                    biometric disk that sits imperceptibly against the skin without medical
                    conspicuousness.
                  </p>
                </div>

                <!-- Disk CAD & Interstitial Telemetry -->
                <div
                  class="relative w-full h-56 bg-surface-container-low rounded-xl p-space-md overflow-hidden flex flex-col justify-between"
                >
                  <div class="flex items-center justify-between relative z-10">
                    <span
                      class="font-label-sm text-label-sm uppercase text-secondary font-bold flex items-center gap-1.5"
                    >
                      <mat-icon class="text-[16px]">donut_small</mat-icon>
                      RxDisk Micro-Array (12.4mm ∅)
                    </span>
                    <span
                      class="px-2 py-0.5 rounded bg-surface text-primary font-label-sm text-label-sm font-mono font-bold"
                      >98 mg/dL → STABLE</span
                    >
                  </div>
                  <div class="relative z-10 flex items-center justify-around py-1">
                    <div
                      class="relative w-28 h-28 rounded-full bg-surface shadow-md flex items-center justify-center"
                    >
                      <div
                        class="absolute inset-1 rounded-full bg-gradient-to-tr from-surface-variant to-surface-container-lowest flex items-center justify-center"
                      >
                        <div
                          class="w-14 h-14 rounded-full bg-surface shadow-inner flex flex-col items-center justify-center text-center"
                        >
                          <span
                            class="font-label-sm text-label-sm text-secondary font-bold leading-none"
                            >Rx</span
                          >
                          <span class="text-[9px] font-mono text-tertiary tracking-tighter"
                            >DISC 02</span
                          >
                        </div>
                      </div>
                      <div
                        class="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <div class="w-full h-0.5 bg-primary/20 rotate-45"></div>
                        <div class="w-full h-0.5 bg-primary/20 -rotate-45"></div>
                      </div>
                    </div>
                    <div class="flex flex-col gap-1.5">
                      <div class="bg-surface px-3 py-1.5 rounded-lg shadow-sm">
                        <span class="font-caption text-caption text-tertiary block"
                          >ISF Diffusion Depth</span
                        >
                        <span class="font-title-md text-title-md text-on-surface font-bold"
                          >650 μm (Painless)</span
                        >
                      </div>
                      <div class="bg-surface px-3 py-1.5 rounded-lg shadow-sm">
                        <span class="font-caption text-caption text-tertiary block"
                          >Lag Time to Capillary</span
                        >
                        <span class="font-title-md text-title-md text-secondary font-bold"
                          >&lt; 3.2 minutes</span
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="relative z-10 flex items-center justify-between font-caption text-caption text-tertiary"
                  >
                    <span>Translucent medical elastomer rim</span>
                    <span class="text-primary font-semibold">18-Day Biocompatibility</span>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-secondary text-[18px]">check_circle</mat-icon>
                    <span>Non-medical, jewelry form-factor</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-secondary text-[18px]">check_circle</mat-icon>
                    <span>Direct NFC tap &amp; BLE streaming</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-secondary text-[18px]">check_circle</mat-icon>
                    <span>Zero calibration required</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-secondary text-[18px]">check_circle</mat-icon>
                    <span>Hypoallergenic acrylate seal</span>
                  </div>
                </div>
              </div>

              <div
                class="pt-space-md bg-surface-container-low/40 -mx-space-lg -mb-space-lg px-space-lg pb-space-lg rounded-b-xl flex items-center justify-between"
              >
                <span class="font-caption text-caption text-tertiary"
                  >Patent Pending:
                  <strong class="text-on-surface font-semibold">US-2024-03912</strong></span
                >
                <button
                  type="button"
                  (click)="activeModal.set('glucose-study')"
                  class="font-label-md text-label-md text-secondary font-bold hover:text-primary transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  Ergonomic User Study <mat-icon class="text-[16px]">arrow_forward</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Initiative 2: WellBeing & Digital Companion Suites -->
      <section
        class="w-full px-margin py-space-xl bg-gradient-to-br from-surface-container-low/60 via-aqua-surface/65 to-surface-container-low/60"
        id="wellbeing-suite"
      >
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
          <div class="flex flex-col gap-space-xs max-w-3xl">
            <div class="flex items-center gap-space-xs">
              <span
                class="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase font-bold tracking-wide"
                >Initiative 02</span
              >
              <span class="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider"
                >Digital Ecosystem • Software as a Medical Device (SaMD)</span
              >
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              WellBeing &amp; Digital Companion Suites
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Bridging physical microneedle telemetry into contextual lifestyle adaptation. RxApp
              translates continuous interstitial bio-signals into actionable meal scheduling,
              insulin sensitivity adjustments, and real-time doctor telemetry feeds.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            <!-- Left Side -->
            <div class="lg:col-span-4 flex flex-col gap-space-lg order-2 lg:order-1">
              <div
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="flex items-start gap-space-md">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0"
                  >
                    <mat-icon class="text-[22px]">sensors</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h4 class="font-title-md text-title-md text-on-surface font-bold">
                      Microneedle Telemetry
                    </h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Low-latency sub-GHz &amp; Bluetooth 5.4 synchronization direct from the CGM
                      Disk and Heart DeSign patch every 60 seconds.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="flex items-start gap-space-md">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0"
                  >
                    <mat-icon class="text-[22px]">center_focus_strong</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h4 class="font-title-md text-title-md text-on-surface font-bold">
                      Meal Photo Recognition AI
                    </h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Instant macro-nutrient breakdown and glycemic load prediction based on
                      volumetric food scanning prior to ingestion.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="flex items-start gap-space-md">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0"
                  >
                    <mat-icon class="text-[22px]">medication</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h4 class="font-title-md text-title-md text-on-surface font-bold">
                      Smart Timing Pharmacokinetics
                    </h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Algorithmically alerts users to take prescription doses during optimal
                      metabolic uptake windows, not static clock times.
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div class="flex items-start gap-space-md">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary shrink-0"
                  >
                    <mat-icon class="text-[22px]">clinical_notes</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h4 class="font-title-md text-title-md text-on-surface font-bold">
                      Physician FHIR/EHR Portals
                    </h4>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      One-tap encrypted PDF or direct Epic/Cerner HL7 telemetry push with ambulatory
                      glucose profiles and cardiac events.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Center: Interactive Phone Mockup Previewing RxApp UI -->
            <div class="lg:col-span-4 flex justify-center order-1 lg:order-2">
              <div
                class="relative w-[320px] sm:w-[350px] bg-on-surface rounded-[44px] p-3 shadow-2xl ring-1 ring-surface-variant/30"
              >
                <!-- Dynamic Island -->
                <div
                  class="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-on-surface rounded-full z-30 flex items-center justify-center"
                >
                  <div class="w-3 h-3 rounded-full bg-surface-container-low/20 mr-2"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
                </div>

                <!-- Phone Glass Screen Canvas -->
                <div
                  class="relative w-full bg-surface rounded-[36px] overflow-hidden pt-10 pb-6 px-4 flex flex-col gap-3 min-h-[580px]"
                >
                  <!-- App Top Bar -->
                  <div class="flex items-center justify-between pb-2 border-b border-surface-container">
                    <div class="flex items-center gap-2">
                      <div
                        class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-caption"
                      >
                        Rx
                      </div>
                      <div class="flex flex-col">
                        <span class="font-label-sm text-label-sm text-on-surface font-bold leading-none"
                          >RxCompanion</span
                        >
                        <span class="text-[10px] text-secondary font-medium flex items-center gap-1">
                          <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span> Synchronized
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label="Toggle companion notifications"
                      (click)="triggerPhoneAction('Alert thresholds nominal: 70–140 mg/dL')"
                      class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer"
                    >
                      <mat-icon class="text-[18px]">notifications</mat-icon>
                    </button>
                  </div>

                  <!-- Live Dynamic Biometric Metric Card -->
                  <div class="bg-surface-container-lowest p-3 rounded-2xl shadow-sm flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                      <span class="font-caption text-caption text-tertiary uppercase font-bold"
                        >Continuous Stream</span
                      >
                      <div class="flex gap-1 bg-surface-container p-0.5 rounded-lg text-[10px] font-semibold">
                        <button
                          type="button"
                          (click)="companionMode.set('glucose')"
                          [class]="
                            companionMode() === 'glucose'
                              ? 'px-2 py-0.5 rounded bg-surface text-primary shadow-xs font-semibold cursor-pointer'
                              : 'px-2 py-0.5 rounded text-tertiary hover:text-on-surface cursor-pointer'
                          "
                        >
                          Glucose
                        </button>
                        <button
                          type="button"
                          (click)="companionMode.set('cardio')"
                          [class]="
                            companionMode() === 'cardio'
                              ? 'px-2 py-0.5 rounded bg-surface text-primary shadow-xs font-semibold cursor-pointer'
                              : 'px-2 py-0.5 rounded text-tertiary hover:text-on-surface cursor-pointer'
                          "
                        >
                          Cardio
                        </button>
                      </div>
                    </div>

                    <div class="flex items-baseline justify-between">
                      <div class="flex items-baseline gap-1">
                        <span
                          class="font-headline-lg text-headline-lg text-on-surface font-bold tabular-nums"
                          >{{ companionMode() === 'glucose' ? '104' : '71' }}</span
                        >
                        <span class="font-label-md text-label-md text-tertiary">{{
                          companionMode() === 'glucose' ? 'mg/dL' : 'BPM'
                        }}</span>
                      </div>
                      <span
                        [class]="
                          companionMode() === 'glucose'
                            ? 'px-2 py-0.5 rounded-full bg-surface-container text-secondary font-caption text-caption font-bold flex items-center gap-1'
                            : 'px-2 py-0.5 rounded-full bg-surface-container text-primary font-caption text-caption font-bold flex items-center gap-1'
                        "
                      >
                        <mat-icon class="text-[14px]">{{
                          companionMode() === 'glucose' ? 'trending_flat' : 'favorite'
                        }}</mat-icon>
                        {{ companionMode() === 'glucose' ? 'In Target (89%)' : 'Sinus Rhythm' }}
                      </span>
                    </div>

                    <div
                      class="w-full h-24 bg-surface-container-low/60 rounded-xl p-2 relative overflow-hidden flex flex-col justify-end"
                    >
                      <div
                        class="absolute inset-x-0 top-6 bottom-6 bg-secondary/5 rounded border-y border-dashed border-secondary/20 pointer-events-none"
                      ></div>
                      <svg
                        [class]="
                          companionMode() === 'glucose'
                            ? 'w-full h-16 text-primary transition-all duration-300'
                            : 'w-full h-16 text-secondary transition-all duration-300'
                        "
                        fill="none"
                        viewBox="0 0 300 60"
                      >
                        @if (companionMode() === 'glucose') {
                          <path
                            d="M0,45 Q40,42 70,25 T140,28 T210,18 T280,32 L300,30 L300,60 L0,60 Z"
                            fill="currentColor"
                            fill-opacity="0.08"
                          ></path>
                          <path
                            d="M0,45 Q40,42 70,25 T140,28 T210,18 T280,32 L300,30"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2.5"
                          ></path>
                          <circle class="animate-ping" cx="280" cy="32" fill="#006194" opacity="0.75" r="4"></circle>
                          <circle cx="280" cy="32" fill="#006194" r="3"></circle>
                        } @else {
                          <path
                            d="M0,50 L40,50 L50,48 L55,52 L60,15 L65,55 L70,48 L80,50 L120,50 L130,48 L135,52 L140,15 L145,55 L150,48 L160,50 L200,50 L210,48 L215,52 L220,15 L225,55 L230,48 L240,50 L280,50 L300,50 L300,60 L0,60 Z"
                            fill="currentColor"
                            fill-opacity="0.08"
                          ></path>
                          <path
                            d="M0,50 L40,50 L50,48 L55,52 L60,15 L65,55 L70,48 L80,50 L120,50 L130,48 L135,52 L140,15 L145,55 L150,48 L160,50 L200,50 L210,48 L215,52 L220,15 L225,55 L230,48 L240,50 L280,50 L300,50"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="2.5"
                          ></path>
                          <circle class="animate-ping" cx="280" cy="50" fill="#00677d" opacity="0.75" r="4"></circle>
                          <circle cx="280" cy="50" fill="#00677d" r="3"></circle>
                        }
                      </svg>
                      <div class="flex items-center justify-between text-[9px] text-tertiary font-mono pt-1">
                        <span>10:00</span>
                        <span>12:00 (Lunch)</span>
                        <span>14:00 (Now)</span>
                      </div>
                    </div>
                  </div>

                  <!-- AI Meal & Metabolic Suggestion Tile -->
                  <div class="bg-surface-container-lowest p-3 rounded-2xl shadow-sm flex items-center gap-3">
                    <div
                      class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0"
                    >
                      <mat-icon class="text-[20px]">smart_toy</mat-icon>
                    </div>
                    <div class="flex flex-col min-w-0 flex-1">
                      <span class="font-label-sm text-label-sm text-on-surface font-bold truncate"
                        >Postprandial Response: Low</span
                      >
                      <span class="text-[11px] text-on-surface-variant truncate">{{
                        phoneActionNote() || 'Grilled Mediterranean Salad parsed cleanly.'
                      }}</span>
                    </div>
                    <mat-icon class="text-[18px] text-secondary">check</mat-icon>
                  </div>

                  <!-- Quick Action Grid in Phone -->
                  <div class="grid grid-cols-3 gap-2 text-center">
                    <button
                      type="button"
                      (click)="triggerPhoneAction('Volumetric meal scan ready (+18g protein)')"
                      class="bg-surface-container-lowest hover:bg-surface-container p-2 rounded-xl flex flex-col items-center gap-1 transition-colors cursor-pointer"
                    >
                      <mat-icon class="text-[18px] text-primary">photo_camera</mat-icon>
                      <span class="text-[10px] font-semibold text-on-surface">Log Meal</span>
                    </button>
                    <button
                      type="button"
                      (click)="triggerPhoneAction('Electrolyte micro-bolus queued (+350 mL)')"
                      class="bg-surface-container-lowest hover:bg-surface-container p-2 rounded-xl flex flex-col items-center gap-1 transition-colors cursor-pointer"
                    >
                      <mat-icon class="text-[18px] text-secondary">water_drop</mat-icon>
                      <span class="text-[10px] font-semibold text-on-surface">Hydration</span>
                    </button>
                    <button
                      type="button"
                      (click)="triggerPhoneAction('HL7 FHIR ambulatory report exported')"
                      class="bg-surface-container-lowest hover:bg-surface-container p-2 rounded-xl flex flex-col items-center gap-1 transition-colors cursor-pointer"
                    >
                      <mat-icon class="text-[18px] text-tertiary">share</mat-icon>
                      <span class="text-[10px] font-semibold text-on-surface">Doctor</span>
                    </button>
                  </div>

                  <div class="w-24 h-1 bg-on-surface/20 rounded-full mx-auto mt-auto"></div>
                </div>
              </div>
            </div>

            <!-- Right Side -->
            <div class="lg:col-span-4 flex flex-col gap-space-lg order-3">
              <div class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                <div class="flex items-center gap-space-xs text-secondary">
                  <mat-icon class="text-[22px]">restaurant</mat-icon>
                  <span class="font-label-sm text-label-sm uppercase font-bold"
                    >Initiative 02 • Diet Subsystem</span
                  >
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Diet &amp; Metabolic Programming
                </h3>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Replaces static nutritional advice with dynamic personal insulin sensitivity
                  mapping. The algorithm calculates how a specific individual metabolizes proteins
                  vs carbohydrates at varying circadian intervals.
                </p>

                <div
                  class="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm font-caption text-caption"
                >
                  <div class="flex items-center justify-between font-semibold text-on-surface">
                    <span>Algorithmic Dynamic Adjustment</span>
                    <span class="text-secondary font-mono">v3.4 NeuroNet</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                      <span
                        class="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[10px]"
                        >1</span
                      >
                      <span class="text-on-surface-variant font-medium"
                        >Meal Image volumetric decomposition</span
                      >
                    </div>
                    <div class="flex items-center gap-2">
                      <span
                        class="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[10px]"
                        >2</span
                      >
                      <span class="text-on-surface-variant font-medium"
                        >Real-time CGM interstitial delta correlation</span
                      >
                    </div>
                    <div class="flex items-center gap-2">
                      <span
                        class="w-5 h-5 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-bold text-[10px]"
                        >3</span
                      >
                      <span class="text-on-surface-variant font-medium"
                        >Next-day meal cadence &amp; carb buffering suggestion</span
                      >
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <div class="p-space-sm bg-surface-container-low rounded-lg">
                    <span class="font-caption text-caption text-tertiary"
                      >Post-Prandial Spike Mod.</span
                    >
                    <span class="font-title-md text-title-md text-primary font-bold block"
                      >-34%</span
                    >
                  </div>
                  <div class="p-space-sm bg-surface-container-low rounded-lg">
                    <span class="font-caption text-caption text-tertiary">Time-in-Range (TIR)</span>
                    <span class="font-title-md text-title-md text-secondary font-bold block"
                      >+18.5 hrs</span
                    >
                  </div>
                </div>

                <button
                  type="button"
                  (click)="activeModal.set('diet-study')"
                  class="w-full mt-2 py-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Clinical Diet Study Data</span>
                  <mat-icon class="text-[18px]">open_in_new</mat-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Clinical Trial Pipeline & Innovation Roadmap -->
      <section class="w-full px-margin py-space-xl bg-surface" id="pipeline">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-xl">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div class="flex flex-col gap-space-xs">
              <div class="flex items-center gap-space-xs">
                <span
                  class="px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm uppercase font-bold tracking-wide"
                  >Validation</span
                >
                <span class="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider"
                  >Clinical Progression</span
                >
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Clinical Trial Pipeline &amp; Innovation Roadmap
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                From computational biophysics modeling to randomized multi-center controlled trials.
                Track our validation progress toward global regulatory authorization.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
              <span class="font-caption text-caption text-tertiary font-medium"
                >Updated Q1 2025 Regulatory Filing</span
              >
            </div>
          </div>

          <div class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
            <div
              class="hidden md:grid grid-cols-12 gap-space-md px-space-lg py-space-md bg-surface-container font-label-md text-label-md text-tertiary uppercase font-bold"
            >
              <div class="col-span-4">Program &amp; Indication</div>
              <div class="col-span-2">Technology Layer</div>
              <div class="col-span-4">Clinical Stage Tracker</div>
              <div class="col-span-2 text-right">Regulatory Target</div>
            </div>

            <!-- Item 1 -->
            <div
              class="grid grid-cols-1 md:grid-cols-12 gap-space-md p-space-lg items-center border-b border-surface-container-low hover:bg-surface-container-low/40 transition-colors"
            >
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1">
                <div class="flex items-center gap-2">
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Heart DeSign Sternal Array</span
                  >
                  <span
                    class="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold"
                    >Active</span
                  >
                </div>
                <span class="font-body-sm text-body-sm text-on-surface-variant"
                  >Continuous structural murmur detection &amp; paroxysmal AFib screening</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex flex-col font-caption text-caption">
                <span class="text-on-surface font-semibold">Dual MEMS Phono + ECG</span>
                <span class="text-tertiary">14-Day Wear Hydrogel</span>
              </div>
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1.5">
                <div class="flex items-center justify-between text-[11px] font-label-sm uppercase font-bold">
                  <span class="text-primary">Phase 1 (Pilot)</span>
                  <span class="text-primary">Phase 2 (Efficacy)</span>
                  <span class="text-tertiary">Pivotal Multi-Center</span>
                </div>
                <div class="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
                  <div class="h-full bg-primary w-2/3"></div>
                  <div class="h-full bg-secondary w-1/12 animate-pulse"></div>
                </div>
                <span class="font-caption text-caption text-tertiary"
                  >Enrolled N=480 / 600 pts • 9 Hospital Sites</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex md:justify-end">
                <span
                  class="px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                >
                  FDA De Novo 510(k)
                </span>
              </div>
            </div>

            <!-- Item 2 -->
            <div
              class="grid grid-cols-1 md:grid-cols-12 gap-space-md p-space-lg items-center border-b border-surface-container-low hover:bg-surface-container-low/40 transition-colors"
            >
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1">
                <div class="flex items-center gap-2">
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Glucose DeSign &amp; Disk</span
                  >
                  <span
                    class="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary text-[11px] font-bold"
                    >Pivotal Stage</span
                  >
                </div>
                <span class="font-body-sm text-body-sm text-on-surface-variant"
                  >Non-stigmatizing interstitial glucose telemetric monitoring</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex flex-col font-caption text-caption">
                <span class="text-on-surface font-semibold">Solid Microneedle Disk</span>
                <span class="text-tertiary">Enzymatic Nano-Coating</span>
              </div>
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1.5">
                <div class="flex items-center justify-between text-[11px] font-label-sm uppercase font-bold">
                  <span class="text-primary">Phase 1 Complete</span>
                  <span class="text-primary">Phase 2 Validated</span>
                  <span class="text-secondary font-bold">Pivotal Trial (84%)</span>
                </div>
                <div class="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
                  <div class="h-full bg-secondary w-5/6"></div>
                </div>
                <span class="font-caption text-caption text-tertiary"
                  >MARD verification in T1D/T2D cohorts</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex md:justify-end">
                <span
                  class="px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                >
                  CE Mark MDR Class IIb
                </span>
              </div>
            </div>

            <!-- Item 3 -->
            <div
              class="grid grid-cols-1 md:grid-cols-12 gap-space-md p-space-lg items-center border-b border-surface-container-low hover:bg-surface-container-low/40 transition-colors"
            >
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1">
                <div class="flex items-center gap-2">
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >RxApp Metabolic Companion</span
                  >
                  <span
                    class="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold"
                    >Pilot In Vivo</span
                  >
                </div>
                <span class="font-body-sm text-body-sm text-on-surface-variant"
                  >Algorithmic dietary intervention &amp; dynamic insulin titration decision
                  support</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex flex-col font-caption text-caption">
                <span class="text-on-surface font-semibold">SaMD iOS/Android OS</span>
                <span class="text-tertiary">EHR HL7 FHIR Cloud</span>
              </div>
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1.5">
                <div class="flex items-center justify-between text-[11px] font-label-sm uppercase font-bold">
                  <span class="text-primary">Bench Simulation</span>
                  <span class="text-primary">Pilot Clinical Study</span>
                  <span class="text-tertiary">Real-World Evidence</span>
                </div>
                <div class="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
                  <div class="h-full bg-primary w-1/2"></div>
                </div>
                <span class="font-caption text-caption text-tertiary"
                  >N=320 Longitudinal Metabolic Pilot</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex md:justify-end">
                <span
                  class="px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                >
                  SaMD Tier II Class
                </span>
              </div>
            </div>

            <!-- Item 4 -->
            <div
              class="grid grid-cols-1 md:grid-cols-12 gap-space-md p-space-lg items-center hover:bg-surface-container-low/40 transition-colors"
            >
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1">
                <div class="flex items-center gap-2">
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Hummingbird Metabolic Fuel Cell</span
                  >
                  <span
                    class="px-2 py-0.5 rounded-full bg-surface-container text-tertiary text-[11px] font-bold"
                    >Phase 1 Pre-Clin</span
                  >
                </div>
                <span class="font-body-sm text-body-sm text-on-surface-variant"
                  >Glucose-powered micro-biofuel cells harvesting internal subcutaneous energy</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex flex-col font-caption text-caption">
                <span class="text-on-surface font-semibold">Bio-Catalytic Anode</span>
                <span class="text-tertiary">Sub-derm battery free</span>
              </div>
              <div class="col-span-1 md:col-span-4 flex flex-col gap-1.5">
                <div class="flex items-center justify-between text-[11px] font-label-sm uppercase font-bold">
                  <span class="text-primary">Pre-Clinical In Vitro</span>
                  <span class="text-tertiary">Phase 1 First-in-Human</span>
                  <span class="text-tertiary">Scalable Production</span>
                </div>
                <div class="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
                  <div class="h-full bg-primary w-1/4"></div>
                </div>
                <span class="font-caption text-caption text-tertiary"
                  >Biocompatibility in vivo toxicology cleared</span
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex md:justify-end">
                <span
                  class="px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                >
                  Investigational IDE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Collaborative Research & Clinical Partnership CTA -->
      <section class="w-full px-margin py-space-xl bg-surface-container-low">
        <div
          class="max-w-[1440px] mx-auto bg-surface-container-lowest rounded-2xl p-space-xl shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-xl"
        >
          <div
            class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-2xl pointer-events-none"
          ></div>
          <div class="flex flex-col gap-space-sm max-w-2xl relative z-10">
            <span
              class="font-label-sm text-label-sm uppercase font-bold text-secondary tracking-widest"
              >Academic &amp; Clinical Consortiums</span
            >
            <h3 class="font-headline-md text-headline-md text-on-surface font-bold">
              Partner with RxDigita on Next-Cohort Human Studies
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              We welcome principal investigators, institutional review boards, and metabolic
              specialists to explore collaborative data integration or propose novel therapeutic
              sensing protocols with our DeSign platform.
            </p>
            <div class="flex flex-wrap items-center gap-space-md pt-2">
              <div class="flex items-center gap-2 font-caption text-caption text-tertiary">
                <mat-icon class="text-primary text-[18px]">lock</mat-icon>
                <span>HIPAA &amp; GDPR Compliant Anonymized Telemetry</span>
              </div>
              <div class="flex items-center gap-2 font-caption text-caption text-tertiary">
                <mat-icon class="text-secondary text-[18px]">verified</mat-icon>
                <span>Open Research APIs for Medical Faculty</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 relative z-10 w-full md:w-auto">
            <a
              routerLink="/company-legacy"
              fragment="contact-us"
              class="w-full sm:w-auto px-space-lg py-space-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold rounded-lg transition-colors text-center shadow-sm"
            >
              Request Investigator Pack
            </a>
            <a
              routerLink="/platforms"
              fragment="schematics"
              class="w-full sm:w-auto px-space-lg py-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center"
            >
              Download Whitepaper (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal Overlay for CAD Schematics & Studies -->
    @if (activeModal()) {
      <div class="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <button
          type="button"
          aria-label="Close modal dialog"
          (click)="activeModal.set(null)"
          class="fixed inset-0 bg-on-surface/50 backdrop-blur-sm cursor-default"
        ></button>
        <div
          role="dialog"
          aria-modal="true"
          class="relative z-10 w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl p-space-lg flex flex-col gap-space-md"
        >
          <div class="flex items-start justify-between gap-4 border-b border-surface-container pb-3">
            <div>
              <span class="font-label-sm text-label-sm text-secondary uppercase font-bold">
                @switch (activeModal()) {
                  @case ('cad') { Industrial CAD Specification }
                  @case ('heart-paper') { Clinical Publication • NCT-0589211 }
                  @case ('glucose-study') { Human Factors Engineering • US-2024-03912 }
                  @case ('diet-study') { Longitudinal Metabolic Study • N=320 }
                }
              </span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">
                @switch (activeModal()) {
                  @case ('cad') { Heart DeSign &amp; RxDisk Mechanical Tolerances }
                  @case ('heart-paper') { Dual-MEMS Sternal Acoustic Resonance Architecture }
                  @case ('glucose-study') { Non-Stigmatizing Wearable CGM Ergonomics }
                  @case ('diet-study') { NeuroNet v3.4 Post-Prandial Glycemic Buffering }
                }
              </h3>
            </div>
            <button
              type="button"
              (click)="activeModal.set(null)"
              class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-tertiary hover:text-on-surface cursor-pointer"
              aria-label="Close modal"
            >
              <mat-icon class="text-[18px]">close</mat-icon>
            </button>
          </div>

          <div class="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-3">
            @switch (activeModal()) {
              @case ('cad') {
                <p>
                  Mechanical assemblies conform to ISO 13485 tolerances with breathable medical
                  hydrocolloid perimeter seals and flexible polyimide substrates.
                </p>
                <div class="grid grid-cols-2 gap-3 bg-surface-container-low p-3 rounded-xl font-mono text-caption">
                  <div>
                    <span class="text-tertiary block">RxDisk Footprint</span>
                    <strong class="text-primary">22.0 mm ∅ × 1.8 mm</strong>
                  </div>
                  <div>
                    <span class="text-tertiary block">Heart Patch Profile</span>
                    <strong class="text-primary">58.4 × 24.0 × 2.1 mm</strong>
                  </div>
                  <div>
                    <span class="text-tertiary block">ISF Needle Pitch</span>
                    <strong class="text-secondary">600 μm ± 5 μm</strong>
                  </div>
                  <div>
                    <span class="text-tertiary block">Ingress Protection</span>
                    <strong class="text-secondary">IP68 (1.5m / 30 min)</strong>
                  </div>
                </div>
              }
              @case ('heart-paper') {
                <p>
                  Multi-center pilot across 9 hospital sites (N=480 enrolled) demonstrating 99.4%
                  S1/S2 valvular acoustic fidelity alongside continuous 3-channel ECG capture.
                </p>
                <div class="bg-surface-container-low p-3 rounded-xl flex justify-between font-mono text-caption">
                  <span>Sensitivity (AFib): <strong>98.7%</strong></span>
                  <span>False Positive Rate: <strong>&lt; 0.4%</strong></span>
                </div>
              }
              @case ('glucose-study') {
                <p>
                  Evaluated 18-day continuous adhesion and social-wear acceptability across 210
                  participants. 96% reported zero tactile awareness after 15 minutes of application.
                </p>
                <div class="bg-surface-container-low p-3 rounded-xl flex justify-between font-mono text-caption">
                  <span>Wear Compliance: <strong>97.4%</strong></span>
                  <span>Dermal Irritation: <strong>0.0% Grade 2+</strong></span>
                </div>
              }
              @case ('diet-study') {
                <p>
                  In-vivo study (N=320) pairing volumetric meal photo AI with continuous CGM
                  interstitial feedback reduced post-prandial glycemic excursions by 34% over 12
                  weeks.
                </p>
                <div class="bg-surface-container-low p-3 rounded-xl flex justify-between font-mono text-caption">
                  <span>Spike Reduction: <strong>-34.0%</strong></span>
                  <span>TIR Gain: <strong>+18.5 hrs/wk</strong></span>
                </div>
              }
            }
          </div>

          <div class="flex items-center justify-end gap-space-sm pt-2">
            <button
              type="button"
              (click)="activeModal.set(null)"
              class="px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface font-label-md text-label-md cursor-pointer"
            >
              Close
            </button>
            <a
              routerLink="/platforms"
              fragment="schematics"
              (click)="activeModal.set(null)"
              class="px-space-md py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors"
            >
              Request Full Dossier
            </a>
          </div>
        </div>
      </div>
    }
  `,
})
export class Innovation {
  readonly companionMode = signal<CompanionMode>('glucose');
  readonly phoneActionNote = signal<string | null>(null);
  readonly activeModal = signal<InnovationModalType>(null);

  triggerPhoneAction(message: string): void {
    this.phoneActionNote.set(message);
  }
}
