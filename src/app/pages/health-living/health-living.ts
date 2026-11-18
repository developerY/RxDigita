import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-health-living',
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="flex flex-col w-full">
      <!-- Top Clinical Telemetry Bar -->
      <section class="w-full bg-surface-container-low py-space-sm px-margin">
        <div
          class="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-space-sm"
        >
          <div class="flex items-center gap-space-md">
            <span
              class="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              BIOMETRIC STREAM ACTIVE
            </span>
            <span class="font-caption text-caption text-tertiary"
              >Protocol: Bio-Clinical OS v4.8 • Device Node #7094</span
            >
          </div>
          <div class="flex items-center gap-space-lg text-tertiary font-caption text-caption">
            <span class="flex items-center gap-1"
              ><mat-icon class="text-[15px] text-primary">wifi_tethering</mat-icon> 2.4GHz BLE
              Matrix</span
            >
            <span class="flex items-center gap-1"
              ><mat-icon class="text-[15px] text-secondary">verified</mat-icon> FDA Class II
              Clearable Telemetry</span
            >
            <span class="flex items-center gap-1 text-on-surface font-title-md text-title-md"
              >Sync Interval: <span class="text-primary font-bold">1.2s</span></span
            >
          </div>
        </div>
      </section>

      <!-- Editorial Section Header -->
      <section class="w-full px-margin pt-space-xl pb-space-lg bg-surface">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-sm">
          <div class="flex items-center gap-space-sm">
            <span
              class="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold"
              >Closed-Loop Human Telemetry</span
            >
            <span class="h-px w-12 bg-outline-variant"></span>
            <span class="font-caption text-caption text-tertiary">Bio-Adaptive Ecosystem</span>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div class="lg:col-span-8">
              <h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Health &amp; Connected Living: Intelligent Nutrition, Sleep &amp; Exercise Telemetry
              </h1>
            </div>
            <div class="lg:col-span-4 flex flex-col gap-space-xs">
              <p class="font-body-md text-body-md text-on-surface-variant">
                Unifying continuous metabolic data, neuro-rest circadian patterns, and
                bio-directional ergometer telemetry into a single therapeutic feedback matrix.
              </p>
              <div class="flex items-center gap-space-sm pt-space-xs">
                <span
                  class="px-space-sm py-1 rounded bg-surface-container font-label-md text-label-md text-primary font-bold"
                  >3 Active Loops</span
                >
                <span
                  class="px-space-sm py-1 rounded bg-surface-container font-label-md text-label-md text-secondary font-bold"
                  >Sub-Micron Sensing</span
                >
                <span
                  class="px-space-sm py-1 rounded bg-surface-container-high font-label-md text-label-md text-on-surface font-bold"
                  >99.4% Precision</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 1: Nutrition & Smart Appliances -->
      <section
        class="w-full px-margin py-space-xl bg-gradient-to-br from-surface-container-low/70 via-warm-surface/70 to-surface-container-low/70"
        id="nutrition"
      >
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
            <div class="flex flex-col gap-space-xs">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"
                  >Module 01 // Molecular Intake</span
                >
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface">
                Nutrition &amp; Smart Kitchen Ecosystem
              </h2>
            </div>
            <div class="flex items-center gap-space-xs font-label-md text-label-md text-tertiary">
              <mat-icon class="text-primary text-[18px]">water_drop</mat-icon>
              Real-Time Micro-Infusion &amp; Glucose Scaffolding
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <!-- Interactive CGM Curve + Kitchen Automation Panel -->
            <div
              class="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md"
            >
              <div class="flex flex-wrap items-center justify-between gap-space-sm">
                <div>
                  <span class="font-caption text-caption text-tertiary uppercase"
                    >CGM Sensor Stream vs Micro-Dispense Trigger</span
                  >
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">
                    Dynamic Carbohydrate &amp; Electrolyte Titration
                  </h3>
                </div>
                <div
                  class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-full"
                >
                  <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span class="font-label-sm text-label-sm text-primary font-bold"
                    >CGM: 94 mg/dL [STABLE]</span
                  >
                </div>
              </div>

              <!-- SVG Visual Telemetry Curve -->
              <div
                class="w-full bg-surface-container-low/40 rounded-lg p-space-md flex flex-col gap-space-xs"
              >
                <div class="flex justify-between items-center text-tertiary font-caption text-caption">
                  <span>06:00 (Fasting Baseline)</span>
                  <span>12:00 (Post-Prandial Phase)</span>
                  <span>18:00 (Pre-Workout Bolus)</span>
                  <span>22:00 (Recovery)</span>
                </div>
                <div class="relative w-full h-44">
                  <svg class="w-full h-full text-primary" fill="none" viewBox="0 0 700 160">
                    <defs>
                      <linearGradient id="cgmGrad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stop-color="#006194" stop-opacity="0.25"></stop>
                        <stop offset="100%" stop-color="#006194" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <line
                      opacity="0.3"
                      stroke="#bfc7d2"
                      stroke-dasharray="3 3"
                      x1="0"
                      x2="700"
                      y1="40"
                      y2="40"
                    ></line>
                    <line
                      opacity="0.3"
                      stroke="#bfc7d2"
                      stroke-dasharray="3 3"
                      x1="0"
                      x2="700"
                      y1="80"
                      y2="80"
                    ></line>
                    <line
                      opacity="0.3"
                      stroke="#bfc7d2"
                      stroke-dasharray="3 3"
                      x1="0"
                      x2="700"
                      y1="120"
                      y2="120"
                    ></line>
                    <rect fill="#63dbfe" height="50" opacity="0.08" width="700" x="0" y="55"></rect>
                    <path
                      d="M 0 100 Q 120 110 220 70 T 400 60 T 550 90 T 700 80 L 700 160 L 0 160 Z"
                      fill="url(#cgmGrad)"
                    ></path>
                    <path
                      d="M 0 100 Q 120 110 220 70 T 400 60 T 550 90 T 700 80"
                      stroke="#006194"
                      stroke-linecap="round"
                      stroke-width="2.5"
                    ></path>
                    <circle cx="220" cy="70" fill="#00677d" r="5" stroke="#ffffff" stroke-width="2"></circle>
                    <circle cx="400" cy="60" fill="#00677d" r="5" stroke="#ffffff" stroke-width="2"></circle>
                    <circle cx="550" cy="90" fill="#00677d" r="5" stroke="#ffffff" stroke-width="2"></circle>
                  </svg>
                </div>
                <div
                  class="flex flex-wrap items-center justify-between gap-2 font-caption text-caption text-on-surface-variant pt-space-xs"
                >
                  <span class="flex items-center gap-1.5"
                    ><span class="w-2.5 h-2.5 rounded-full bg-primary"></span> Interstitial Glucose
                    Trajectory</span
                  >
                  <span class="flex items-center gap-1.5"
                    ><span class="w-2.5 h-2.5 rounded-full bg-secondary"></span> Auto-Dispensed
                    Micro-Nutrient Pulse</span
                  >
                  <span class="text-tertiary">Optimal Range: 72–110 mg/dL</span>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div class="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div class="flex items-center gap-space-xs text-primary">
                    <mat-icon class="text-[20px]">vaccines</mat-icon>
                    <span class="font-title-md text-title-md font-bold"
                      >Automated Micronutrient Delivery</span
                    >
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Cartridge-based micro-pumps formulate liquid mineral, adaptogen, and amino-acid
                    suspensions directly into water carafe based on intraday biological depletion
                    rates.
                  </p>
                  <div
                    class="flex items-center gap-2 mt-auto font-caption text-caption text-tertiary"
                  >
                    <mat-icon class="text-[14px] text-secondary">check_circle</mat-icon> 14
                    Micronutrients dynamically blended
                  </div>
                </div>
                <div class="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div class="flex items-center gap-space-xs text-secondary">
                    <mat-icon class="text-[20px]">countertops</mat-icon>
                    <span class="font-title-md text-title-md font-bold"
                      >Smart Kitchen Concept Sync</span
                    >
                  </div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Smart induction cooktops and pantry sensors cross-check macro composition
                    against real-time glycogen reserves, recommending heat profiles that preserve
                    thermolabile vitamins.
                  </p>
                  <div
                    class="flex items-center gap-2 mt-auto font-caption text-caption text-tertiary"
                  >
                    <mat-icon class="text-[14px] text-secondary">sync</mat-icon> Connected to BLE
                    Kitchen Hub
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side -->
            <div class="lg:col-span-5 flex flex-col gap-gutter">
              <div class="relative rounded-xl overflow-hidden shadow-sm h-64 bg-surface-container">
                <img
                  class="w-full h-full object-cover"
                  alt="Biotechnology smart kitchen counter with automated micronutrient dispenser"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZpDGVFSFy_b33DxI4hdSby2zbLkCw5CEiPJUxf8_uyaZGnXzaJ8Bmom8rLmAhdbXFUgSuDbm_3runRhODRvTp4R4H9_3nMrl7esx4UHHa62LW7n5OBxtB440BVYeqyulbrIJ7I4ux7iKByY-eiopWNRKMYNEux59L48UHt8gLBAGArgghqu84S8NSgPlHpjBVvVyi_Do0zNhQlqkqM47_KpBuIKNlZbC2yHxabk"
                  referrerpolicy="no-referrer"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-on-primary"
                >
                  <span class="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider"
                    >Kitchen Telemetry Appliance</span
                  >
                  <h4 class="font-title-md text-title-md font-bold">
                    RxDigita Precision Dispensary Gen-3
                  </h4>
                  <p class="font-caption text-caption text-surface-variant">
                    Sub-milligram accuracy with sealed cold-storage vacuum preservation.
                  </p>
                </div>
              </div>

              <div
                class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm"
              >
                <div class="flex items-center justify-between">
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Active Cartridge Ratios</span
                  >
                  <span class="font-caption text-caption text-secondary font-bold">CALIBRATED</span>
                </div>
                <div class="flex flex-col gap-space-xs">
                  <div class="flex flex-col gap-1">
                    <div class="flex justify-between text-body-sm font-body-sm">
                      <span class="text-on-surface font-medium"
                        >Magnesium L-Threonate + Zinc Picolinate</span
                      >
                      <span class="text-primary font-bold">88%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-surface-container">
                      <div class="h-full rounded-full bg-primary w-[88%]"></div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-1">
                    <div class="flex justify-between text-body-sm font-body-sm">
                      <span class="text-on-surface font-medium"
                        >Electrolyte Hydration Complex (Na/K/Cl)</span
                      >
                      <span class="text-secondary font-bold">64%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-surface-container">
                      <div class="h-full rounded-full bg-secondary w-[64%]"></div>
                    </div>
                  </div>
                  <div class="flex flex-col gap-1">
                    <div class="flex justify-between text-body-sm font-body-sm">
                      <span class="text-on-surface font-medium"
                        >Methylated B-Complex &amp; CoQ10 Emulsion</span
                      >
                      <span class="text-tertiary font-bold">92%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-surface-container">
                      <div class="h-full rounded-full bg-tertiary w-[92%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Sleep Optimization & Neuro-Rest Architecture -->
      <section class="w-full px-margin py-space-xl bg-surface" id="sleep">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
            <div class="flex flex-col gap-space-xs">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold"
                  >Module 02 // Neuro-Rest Restoration</span
                >
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface">
                Sleep Optimization &amp; Circadian Alignment
              </h2>
            </div>
            <div class="flex items-center gap-space-xs font-label-md text-label-md text-primary font-bold">
              <mat-icon class="text-[18px]">bedtime</mat-icon>
              RxDigita Sleep Architecture Engine
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            <div
              class="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between shadow-sm"
            >
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center justify-between">
                  <span class="font-caption text-caption uppercase text-tertiary font-bold"
                    >Sleep Quality Index (SQI)</span
                  >
                  <span
                    class="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold"
                    >OPTICALLY VALIDATED</span
                  >
                </div>
                <div class="flex items-center gap-space-md py-space-sm">
                  <div class="relative w-28 h-28 flex items-center justify-center shrink-0">
                    <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#dce9ff" stroke-width="8"></circle>
                      <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        r="40"
                        stroke="#006194"
                        stroke-dasharray="251.2"
                        stroke-dashoffset="22"
                        stroke-linecap="round"
                        stroke-width="8"
                      ></circle>
                    </svg>
                    <div class="absolute flex flex-col items-center justify-center">
                      <span class="font-headline-md text-headline-md text-primary font-bold">92</span>
                      <span class="font-caption text-caption text-tertiary">/100 SQI</span>
                    </div>
                  </div>
                  <div class="flex flex-col gap-1">
                    <span class="font-title-md text-title-md font-bold text-on-surface"
                      >Exceptional Biological Recovery</span
                    >
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Core body temperature dropped 0.8°C right at deep phase onset (02:14 AM).
                      Autonomous autonomic recovery index.
                    </p>
                  </div>
                </div>

                <div class="flex flex-col gap-space-xs pt-space-xs">
                  <div class="flex justify-between font-caption text-caption text-tertiary">
                    <span>Staging Composition (7h 48m Total)</span>
                    <span>Target: 7.5h+</span>
                  </div>
                  <div class="w-full h-4 rounded-full overflow-hidden flex bg-surface-container">
                    <div class="h-full bg-primary w-[24%]" title="Deep Sleep (24%)"></div>
                    <div class="h-full bg-secondary w-[28%]" title="REM (28%)"></div>
                    <div class="h-full bg-primary-fixed-dim w-[42%]" title="Light Sleep (42%)"></div>
                    <div class="h-full bg-outline-variant w-[6%]" title="Awake (6%)"></div>
                  </div>
                  <div
                    class="grid grid-cols-4 gap-1 text-center font-caption text-caption pt-1 text-on-surface-variant"
                  >
                    <div class="flex items-center gap-1 justify-center">
                      <span class="w-2 h-2 rounded bg-primary"></span> Deep 1h 52m
                    </div>
                    <div class="flex items-center gap-1 justify-center">
                      <span class="w-2 h-2 rounded bg-secondary"></span> REM 2h 11m
                    </div>
                    <div class="flex items-center gap-1 justify-center">
                      <span class="w-2 h-2 rounded bg-primary-fixed-dim"></span> Light 3h 18m
                    </div>
                    <div class="flex items-center gap-1 justify-center">
                      <span class="w-2 h-2 rounded bg-outline-variant"></span> Awake 27m
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="grid grid-cols-2 gap-space-sm pt-space-md mt-space-sm bg-surface-container-lowest p-space-sm rounded-lg"
              >
                <div class="flex flex-col">
                  <span class="font-caption text-caption text-tertiary">Lowest Heart Rate</span>
                  <span class="font-headline-sm text-headline-sm text-on-surface font-bold"
                    >47 <span class="font-caption text-caption text-tertiary">BPM</span></span
                  >
                </div>
                <div class="flex flex-col">
                  <span class="font-caption text-caption text-tertiary">HRV Overnight Median</span>
                  <span class="font-headline-sm text-headline-sm text-secondary font-bold"
                    >78 <span class="font-caption text-caption text-tertiary">ms</span></span
                  >
                </div>
              </div>
            </div>

            <div class="lg:col-span-7 flex flex-col gap-gutter justify-between">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div class="relative rounded-xl overflow-hidden shadow-sm h-64 bg-surface-container">
                  <img
                    class="w-full h-full object-cover"
                    alt="Circadian bedroom sanctuary with soft therapeutic night lighting and biometric sensor hub"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCOwOod2BKCOXH3nVmGx2W1qDR8nqbrvzWG4rGVqUAnu2AI05zDho7TpR3KdijNw4eCS0iWRCy_6RDSW59g49QOaUJFiC4O8T6vVqIEi_jetX2nt6tnEsI1dlwDGaM_JvK3HAUFdlI-pMjaEm3ktq3bwgpvFMjtbLE8GMcLAdpG_V7UYUJhSNWTEgnBtQmPvG7oEw1Ugux7-H5rE8xsBEFQmWJx27sd0W1mWFxqVU"
                    referrerpolicy="no-referrer"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent flex flex-col justify-end p-space-md text-on-primary"
                  >
                    <span class="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider"
                      >Hardware Protocol</span
                    >
                    <h4 class="font-title-md text-title-md font-bold">
                      Bedroom Sanctuary IoT Actuation
                    </h4>
                    <p class="font-caption text-caption text-surface-variant">
                      Automated thermoregulation cooling the bed matrix dynamically.
                    </p>
                  </div>
                </div>

                <div
                  class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between"
                >
                  <div class="flex flex-col gap-space-xs">
                    <div class="flex items-center gap-space-xs text-primary">
                      <mat-icon class="text-[22px]">thermostat</mat-icon>
                      <span class="font-title-md text-title-md font-bold"
                        >Thermal Drop Integration</span
                      >
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      When the RxApp detects nocturnal melatonin release, it triggers the connected
                      HVAC thermostat to lower room ambient temperature to 18.5°C, initiating
                      restorative Stage 3 Slow-Wave Sleep.
                    </p>
                  </div>
                  <div
                    class="flex items-center justify-between p-space-xs bg-surface-container-low rounded-lg font-caption text-caption"
                  >
                    <span class="text-tertiary">Current Bedroom Thermal:</span>
                    <span class="text-on-surface font-bold">19.1°C (Target reached)</span>
                  </div>
                </div>
              </div>

              <div
                class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md"
              >
                <div class="flex items-center gap-space-md">
                  <div
                    class="w-14 h-14 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0"
                  >
                    <mat-icon class="text-[32px]">smartphone</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h3 class="font-title-md text-title-md font-bold text-on-surface">
                      The RxDigita Sleep Companion Application
                    </h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Translates intraday glucose deviations and evening blue light exposure into
                      personalized wind-down schedules with soundscape neuro-pacing.
                    </p>
                  </div>
                </div>
                <a
                  routerLink="/innovation"
                  fragment="wellbeing-suite"
                  class="shrink-0 px-space-md py-space-sm bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-md text-label-md rounded-lg transition-colors flex items-center gap-1.5 font-bold"
                >
                  Explore RxApp <mat-icon class="text-[16px]">arrow_forward</mat-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Smart Exercise & Connected Bike -->
      <section
        class="w-full px-margin py-space-xl bg-gradient-to-br from-surface-container-low/70 via-aqua-surface/70 to-surface-container-low/70"
        id="exercise"
      >
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm">
            <div class="flex flex-col gap-space-xs">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"
                  >Module 03 // Biomechanical Workload</span
                >
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface">
                Connected Bike &amp; Exercise Telemetry
              </h2>
            </div>
            <div class="flex items-center gap-space-xs font-label-md text-label-md text-tertiary">
              <mat-icon class="text-secondary text-[18px]">directions_bike</mat-icon>
              Bi-directional Real-Time Resistance Balancing
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            <div
              class="lg:col-span-6 relative rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-space-lg bg-surface-container min-h-[380px]"
            >
              <img
                class="absolute inset-0 w-full h-full object-cover"
                alt="Indoor smart stationary cycle ergometer in clinical fitness bio-lab"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK2at82yjKBAD85vXIREZfd9ykeFGG_kPR46hbb50Ke8_S5-uuKzbV7q6TB8SD-PkhrTppMxzTBkvcLJAYcE9RuXmhdcV-4-QqgxZnatO-HFnXfmW8ivkcMdHlUwDNya4AsjtsLaGQQVYF_AIZX4gxwgapsGIJNZhgIoR4bCr5OpH8B4NzQ06z7hIHLqZvukRj-5DZP_N9j71jfcvpU_qGAH71nQXAniK2nCHyZbE"
                referrerpolicy="no-referrer"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent"
              ></div>
              <div class="relative z-10 flex flex-col gap-space-xs text-on-primary">
                <span
                  class="px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm self-start font-bold uppercase tracking-wider"
                >
                  Ergometer Hardware Matrix
                </span>
                <h3 class="font-headline-md text-headline-md font-bold">
                  The RxConnected Smart Bike System
                </h3>
                <p class="font-body-md text-body-md text-surface-variant max-w-lg">
                  Dynamic electromagnetic resistance that modulates automatically based on your
                  real-time lactate threshold and glucose flux, preventing mitochondrial
                  over-exhaustion.
                </p>
                <div class="flex flex-wrap gap-space-sm pt-space-xs">
                  <span
                    class="bg-on-surface/60 backdrop-blur-md px-space-sm py-1 rounded text-caption font-caption text-secondary-fixed"
                  >
                    Magnetic Servo Brake • 0.1W Precision
                  </span>
                  <span
                    class="bg-on-surface/60 backdrop-blur-md px-space-sm py-1 rounded text-caption font-caption text-primary-fixed"
                  >
                    ANT+ / Bluetooth 5.3 Dual Mesh
                  </span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 flex flex-col gap-space-md">
              <div class="grid grid-cols-3 gap-space-sm">
                <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col">
                  <div class="flex items-center justify-between text-tertiary">
                    <span class="font-caption text-caption uppercase">Power Output</span>
                    <mat-icon class="text-[16px] text-primary">bolt</mat-icon>
                  </div>
                  <span class="font-headline-md text-headline-md text-on-surface font-bold mt-1"
                    >245 <span class="font-caption text-caption text-tertiary">W</span></span
                  >
                  <span class="font-label-sm text-label-sm text-secondary font-bold mt-auto"
                    >+14% vs 4-wk FTP</span
                  >
                </div>
                <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col">
                  <div class="flex items-center justify-between text-tertiary">
                    <span class="font-caption text-caption uppercase">Lactate Est.</span>
                    <mat-icon class="text-[16px] text-secondary">bloodtype</mat-icon>
                  </div>
                  <span class="font-headline-md text-headline-md text-on-surface font-bold mt-1"
                    >2.8 <span class="font-caption text-caption text-tertiary">mmol/L</span></span
                  >
                  <span class="font-label-sm text-label-sm text-primary font-bold mt-auto"
                    >Zone 2 Aerobic Base</span
                  >
                </div>
                <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col">
                  <div class="flex items-center justify-between text-tertiary">
                    <span class="font-caption text-caption uppercase">VO2 Max Score</span>
                    <mat-icon class="text-[16px] text-tertiary">speed</mat-icon>
                  </div>
                  <span class="font-headline-md text-headline-md text-on-surface font-bold mt-1"
                    >54.2 <span class="font-caption text-caption text-tertiary">ml/kg</span></span
                  >
                  <span class="font-label-sm text-label-sm text-secondary font-bold mt-auto"
                    >Superior (Top 5%)</span
                  >
                </div>
              </div>

              <div
                class="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md flex-1 justify-between"
              >
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-space-xs text-primary">
                    <mat-icon class="text-[22px]">swap_horizontal_circle</mat-icon>
                    <h4 class="font-title-md text-title-md font-bold text-on-surface">
                      Bi-Directional Post-Exercise Trigger
                    </h4>
                  </div>
                  <span
                    class="px-space-sm py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-bold uppercase shrink-0"
                    >Automated Pipeline</span
                  >
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  When the workout terminates, power telemetry transmits calorie burn and estimated
                  glycogen depletion straight to the
                  <strong>RxSmart Kitchen Dispensary</strong>. Within 90 seconds, a calibrated
                  post-workout recovery solution is automatically prepared.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                  <div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
                    <span class="font-label-sm text-label-sm text-secondary font-bold"
                      >STEP 01</span
                    >
                    <span class="font-body-sm text-body-sm font-bold text-on-surface"
                      >Cadence &amp; Wattage Read</span
                    >
                    <span class="font-caption text-caption text-tertiary"
                      >842 kcal expenditure confirmed</span
                    >
                  </div>
                  <div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
                    <span class="font-label-sm text-label-sm text-primary font-bold">STEP 02</span>
                    <span class="font-body-sm text-body-sm font-bold text-on-surface"
                      >Glycogen Math Model</span
                    >
                    <span class="font-caption text-caption text-tertiary"
                      >Target: 32g carb + 24g whey pept.</span
                    >
                  </div>
                  <div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1">
                    <span class="font-label-sm text-label-sm text-secondary font-bold"
                      >STEP 03</span
                    >
                    <span class="font-body-sm text-body-sm font-bold text-on-surface"
                      >Kitchen Dispense Ready</span
                    >
                    <span class="font-caption text-caption text-tertiary"
                      >Chilled recovery shake poured</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Interactive Unified Wellness Score Simulator -->
      <section class="w-full px-margin py-space-xl bg-surface" id="simulator">
        <div
          class="max-w-[1440px] mx-auto bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl shadow-md flex flex-col gap-space-lg"
        >
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div class="flex flex-col gap-space-xs max-w-2xl">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span
                  class="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold"
                  >Bio-Algorithmic Simulation</span
                >
              </div>
              <h2 class="font-headline-md text-headline-md text-on-surface font-bold">
                Unified Wellness Score Simulator
              </h2>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                Explore how real-time micro-adjustments in Nutrition adherence, Sleep Architecture,
                and Exercise workload synthesize into an overarching biological readiness metric.
              </p>
            </div>
            <div class="flex items-center gap-space-sm">
              <button
                type="button"
                (click)="resetPresets()"
                class="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-highest transition-colors flex items-center gap-1 cursor-pointer"
              >
                <mat-icon class="text-[16px]">refresh</mat-icon> Reset Presets
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <!-- Interactive Sliders -->
            <div
              class="lg:col-span-7 flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm"
            >
              <!-- Slider 1 -->
              <div class="flex flex-col gap-space-xs">
                <div class="flex justify-between items-center">
                  <label
                    for="nutritionSlider"
                    class="font-title-md text-title-md text-on-surface font-bold flex items-center gap-2"
                  >
                    <mat-icon class="text-[20px] text-secondary">restaurant</mat-icon> Nutrition
                    &amp; Micronutrient Sync
                  </label>
                  <span class="font-title-md text-title-md text-secondary font-bold tabular-nums"
                    >{{ nutrition() }}%</span
                  >
                </div>
                <input
                  id="nutritionSlider"
                  type="range"
                  min="10"
                  max="100"
                  [value]="nutrition()"
                  (input)="onNutritionInput($event)"
                  class="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div class="flex justify-between font-caption text-caption text-tertiary">
                  <span>Erratic Glycemia (10%)</span>
                  <span>Precision Automated Dispense (100%)</span>
                </div>
              </div>

              <!-- Slider 2 -->
              <div class="flex flex-col gap-space-xs">
                <div class="flex justify-between items-center">
                  <label
                    for="sleepSlider"
                    class="font-title-md text-title-md text-on-surface font-bold flex items-center gap-2"
                  >
                    <mat-icon class="text-[20px] text-primary">bedtime</mat-icon> Sleep Staging
                    &amp; Thermal Balance
                  </label>
                  <span class="font-title-md text-title-md text-primary font-bold tabular-nums"
                    >{{ sleep() }}%</span
                  >
                </div>
                <input
                  id="sleepSlider"
                  type="range"
                  min="10"
                  max="100"
                  [value]="sleep()"
                  (input)="onSleepInput($event)"
                  class="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div class="flex justify-between font-caption text-caption text-tertiary">
                  <span>Fragmented Circadian (&lt;5h)</span>
                  <span>Synchronized Slow-Wave (8h+)</span>
                </div>
              </div>

              <!-- Slider 3 -->
              <div class="flex flex-col gap-space-xs">
                <div class="flex justify-between items-center">
                  <label
                    for="exerciseSlider"
                    class="font-title-md text-title-md text-on-surface font-bold flex items-center gap-2"
                  >
                    <mat-icon class="text-[20px] text-tertiary">directions_bike</mat-icon> Exercise
                    Workload &amp; FTP Sync
                  </label>
                  <span class="font-title-md text-title-md text-on-surface font-bold tabular-nums"
                    >{{ exercise() }}%</span
                  >
                </div>
                <input
                  id="exerciseSlider"
                  type="range"
                  min="10"
                  max="100"
                  [value]="exercise()"
                  (input)="onExerciseInput($event)"
                  class="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-tertiary"
                />
                <div class="flex justify-between font-caption text-caption text-tertiary">
                  <span>Sedentary (Overtraining risk)</span>
                  <span>Targeted Threshold Ergometer Peak</span>
                </div>
              </div>
            </div>

            <!-- Live Result Display -->
            <div
              class="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col items-center text-center gap-space-md"
            >
              <span class="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold"
                >Synthesized Readiness Metric</span
              >
              <div class="relative w-40 h-40 flex items-center justify-center">
                <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" fill="none" r="50" stroke="#dce9ff" stroke-width="10"></circle>
                  <circle
                    class="transition-all duration-300 ease-out"
                    cx="60"
                    cy="60"
                    fill="none"
                    r="50"
                    [style.stroke]="scoreColor()"
                    stroke-dasharray="314.15"
                    [style.stroke-dashoffset]="scoreDashOffset()"
                    stroke-linecap="round"
                    stroke-width="10"
                  ></circle>
                </svg>
                <div class="absolute flex flex-col items-center justify-center">
                  <span
                    class="font-headline-xl text-headline-xl font-bold tabular-nums"
                    [style.color]="scoreColor()"
                    >{{ compositeScore() }}</span
                  >
                  <span class="font-label-sm text-label-sm text-tertiary uppercase">READINESS</span>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <h4 class="font-title-md text-title-md text-on-surface font-bold">
                  {{ scoreMeta().title }}
                </h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
                  {{ scoreMeta().desc }}
                </p>
              </div>
              <div
                class="w-full flex items-center justify-around pt-space-xs font-caption text-caption bg-surface-container-low p-space-sm rounded-lg"
              >
                <div class="flex flex-col">
                  <span class="text-tertiary">Metabolic Burn</span>
                  <span class="font-bold text-on-surface tabular-nums">{{ scoreMeta().burn }}</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-tertiary">Cellular Strain</span>
                  <span class="font-bold text-secondary">{{ scoreMeta().strain }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Platform Interconnection Architecture Strip -->
      <section class="w-full px-margin py-space-xl bg-surface-container-low/40">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col gap-space-xs">
            <span
              class="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"
              >Ecosystem Synergy</span
            >
            <h3 class="font-headline-sm text-headline-sm text-on-surface">
              Unified Telemetry Hardware Topology
            </h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs"
            >
              <div
                class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs"
              >
                <mat-icon>sensors</mat-icon>
              </div>
              <h4 class="font-title-md text-title-md font-bold text-on-surface">
                MicroNeedles CGM Disk
              </h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                Continuous sub-dermal glucose, ketone, and lactate monitoring every 60 seconds.
              </p>
            </div>
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs"
            >
              <div
                class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-xs"
              >
                <mat-icon>blender</mat-icon>
              </div>
              <h4 class="font-title-md text-title-md font-bold text-on-surface">
                Precision Dispensers
              </h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                Automated daily nutrient synthesis keyed to real-time metabolic and exercise demand.
              </p>
            </div>
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs"
            >
              <div
                class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary mb-space-xs"
              >
                <mat-icon>dark_mode</mat-icon>
              </div>
              <h4 class="font-title-md text-title-md font-bold text-on-surface">
                Neuro-Rest Engine
              </h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                Intelligent temperature control, ambient photon tuning, and deep REM sleep
                preservation.
              </p>
            </div>
            <div
              class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-xs"
            >
              <div
                class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-xs"
              >
                <mat-icon>directions_bike</mat-icon>
              </div>
              <h4 class="font-title-md text-title-md font-bold text-on-surface">
                Connected Bike Loop
              </h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                Autonomous resistance tuning synced directly with post-exercise recovery nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class HealthLiving {
  readonly nutrition = signal(85);
  readonly sleep = signal(90);
  readonly exercise = signal(78);

  readonly compositeScore = computed(() =>
    Math.round(this.sleep() * 0.4 + this.nutrition() * 0.35 + this.exercise() * 0.25),
  );

  readonly scoreDashOffset = computed(() => {
    const circumference = 314.15;
    return circumference - (this.compositeScore() / 100) * circumference;
  });

  readonly scoreColor = computed(() => {
    const score = this.compositeScore();
    if (score >= 85) return '#006194';
    if (score >= 65) return '#00677d';
    return '#ba1a1a';
  });

  readonly scoreMeta = computed(() => {
    const score = this.compositeScore();
    const e = this.exercise();
    if (score >= 85) {
      return {
        title: 'Optimal Homeostatic Peak',
        desc: 'Cellular bioenergetics and neuro-rest recovery are synchronized. System capacity is prime for peak performance.',
        strain: 'Minimal / Adaptable',
        burn: `${2200 + Math.round(e * 6.5)} kcal/d`,
      };
    }
    if (score >= 65) {
      return {
        title: 'Balanced Metabolic Baseline',
        desc: 'Adequate recovery margins. Slight glycogen imbalance detected; recommended additional micronutrient hydration.',
        strain: 'Moderate (Manageable)',
        burn: `${2000 + Math.round(e * 5.5)} kcal/d`,
      };
    }
    return {
      title: 'Sub-Threshold Exhaustion Risk',
      desc: 'High biological recovery debt. Advise lowering ergometer load, elevating sleep duration, and titrating recovery formula.',
      strain: 'Elevated (Rest Advised)',
      burn: `${1800 + Math.round(e * 4.0)} kcal/d`,
    };
  });

  onNutritionInput(event: Event): void {
    this.nutrition.set(Number((event.target as HTMLInputElement).value));
  }

  onSleepInput(event: Event): void {
    this.sleep.set(Number((event.target as HTMLInputElement).value));
  }

  onExerciseInput(event: Event): void {
    this.exercise.set(Number((event.target as HTMLInputElement).value));
  }

  resetPresets(): void {
    this.nutrition.set(85);
    this.sleep.set(90);
    this.exercise.set(78);
  }
}
