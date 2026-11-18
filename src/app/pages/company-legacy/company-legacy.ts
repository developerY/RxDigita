import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-company-legacy',
  imports: [RouterLink, MatIconModule, ReactiveFormsModule],
  template: `
    <div class="flex flex-col w-full">
      <!-- Top Hero & Mission Header Banner -->
      <section
        class="relative w-full px-margin py-space-xl bg-gradient-to-br from-surface-container-low via-warm-surface/60 to-surface-container-low overflow-hidden"
      >
        <div
          class="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute top-8 right-1/4 w-72 h-72 rounded-full bg-warm-glow/40 blur-3xl pointer-events-none"
        ></div>
        <div
          class="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-surface-variant/40 blur-2xl pointer-events-none"
        ></div>
        <div class="max-w-7xl mx-auto flex flex-col gap-space-lg relative z-10">
          <div class="flex flex-wrap items-center justify-between gap-space-md">
            <div
              class="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-secondary"
            >
              <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span class="font-label-sm text-label-sm tracking-widest uppercase"
                >Institutional Heritage &amp; Foundation</span
              >
            </div>
            <div class="flex items-center gap-space-sm text-tertiary">
              <mat-icon class="text-[18px]">verified</mat-icon>
              <span class="font-caption text-caption"
                >Accredited Bio-Analytical Systems • ISO-13485 Standards</span
              >
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div class="lg:col-span-8 flex flex-col gap-space-md">
              <h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Company, Mission &amp; <br />
                <span class="text-primary">Technological Heritage</span>
              </h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Transforming preventive and therapeutic medicine through ultra-accessible
                micro-technology and intelligent data. Born at the frontier of distributed
                bio-sensing and molecular monitoring.
              </p>
            </div>
            <div
              class="lg:col-span-4 flex flex-col gap-space-xs p-space-md rounded-xl bg-surface shadow-sm"
            >
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm text-tertiary uppercase tracking-wider"
                  >Clinical Cohort Reach</span
                >
                <span class="font-label-sm text-label-sm text-secondary font-bold">14+ Years</span>
              </div>
              <div class="font-headline-md text-headline-md text-primary font-bold">
                4.2M+ Data Points
              </div>
              <p class="font-caption text-caption text-on-surface-variant">
                Validated clinical metrics from legacy open-health waves through modern intradermal
                interstitial CGM arrays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Pillars & Molecular Architecture Grid -->
      <section class="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-xl">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
          <div class="flex flex-col gap-space-xs max-w-xl">
            <span
              class="font-label-sm text-label-sm text-secondary uppercase tracking-widest"
              >Our Guiding Mandate</span
            >
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Precision at Sub-Millimeter Scale
            </h2>
          </div>
          <p class="font-body-sm text-body-sm text-tertiary max-w-md">
            From early cloud health repositories to direct painless transdermal sensing, RxDigita
            bridges raw clinical physiology with actionable digital therapeutics.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <a
            routerLink="/platforms"
            fragment="adme-tox"
            class="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow group"
          >
            <div class="flex flex-col gap-space-sm">
              <div
                class="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary"
              >
                <mat-icon class="text-[24px]">vital_signs</mat-icon>
              </div>
              <h3 class="font-title-md text-title-md text-on-surface font-bold">
                Continuous Molecular Clarity
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Eliminating blind spots in pharmacokinetics (ADME-Tox) via continuous interstitial
                fluid extraction, turning episodic lab draws into steady telemetry.
              </p>
            </div>
            <div
              class="pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform"
            >
              <span>Explore ADME Architecture</span>
              <mat-icon class="text-[16px]">arrow_forward</mat-icon>
            </div>
          </a>

          <a
            routerLink="/innovation"
            fragment="wellbeing-suite"
            class="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow group"
          >
            <div class="flex flex-col gap-space-sm">
              <div
                class="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary"
              >
                <mat-icon class="text-[24px]">device_hub</mat-icon>
              </div>
              <h3 class="font-title-md text-title-md text-on-surface font-bold">
                Open Bio-Telemetric Standards
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Emanating from foundational digital health coalitions, our platform upholds radical
                patient ownership of continuous physiological biosignals.
              </p>
            </div>
            <div
              class="pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-secondary group-hover:translate-x-1 transition-transform"
            >
              <span>Review Open Interop Specs</span>
              <mat-icon class="text-[16px]">arrow_forward</mat-icon>
            </div>
          </a>

          <a
            routerLink="/innovation"
            fragment="pipeline"
            class="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow group"
          >
            <div class="flex flex-col gap-space-sm">
              <div
                class="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary"
              >
                <mat-icon class="text-[24px]">neurology</mat-icon>
              </div>
              <h3 class="font-title-md text-title-md text-on-surface font-bold">
                Decentralized Clinical Trials
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Deploying wearable microneedle patches and RxApp pipelines into residential and
                remote settings with institutional-grade data integrity.
              </p>
            </div>
            <div
              class="pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform"
            >
              <span>Clinical Validation Protocols</span>
              <mat-icon class="text-[16px]">arrow_forward</mat-icon>
            </div>
          </a>
        </div>
      </section>

      <!-- The Digital Health Legacy: Historical Archival Timeline -->
      <section
        class="w-full bg-gradient-to-b from-surface-container-low via-aqua-surface/65 to-surface-container-low px-margin py-space-xl"
        id="timeline"
      >
        <div class="max-w-7xl mx-auto flex flex-col gap-space-xl">
          <div class="flex flex-col gap-space-xs">
            <div
              class="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest"
            >
              <mat-icon class="text-[16px]">history_edu</mat-icon>
              <span>Archival Timeline • 2008 – Present</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface">
              The Digital Health Legacy
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Tracing our path from pioneering roles in the early Google Health Wave initiative to
              next-generation microneedle matrices, autonomous CGM Disks, and IoT biodata hubs.
            </p>
          </div>

          <div class="relative flex flex-col gap-space-lg">
            <div
              class="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-surface-variant"
            ></div>

            <!-- 2008-2012 -->
            <div class="relative flex flex-col md:flex-row items-start gap-gutter">
              <div
                class="w-16 h-16 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-on-primary shadow-sm z-10"
              >
                <span class="font-title-md text-title-md font-bold">08</span>
              </div>
              <div
                class="flex-1 p-space-lg rounded-xl bg-surface shadow-sm flex flex-col lg:flex-row gap-space-lg items-start"
              >
                <div class="flex-1 flex flex-col gap-space-xs">
                  <div class="flex flex-wrap items-center gap-space-sm">
                    <span
                      class="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm"
                      >Foundational Epoch</span
                    >
                    <span class="font-caption text-caption text-tertiary">2008 – 2012</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Google Health Wave Legacy &amp; Open Records
                  </h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                    Our founders contributed to the vanguard of centralized personal health records
                    (PHR) and real-time medical collaboration protocols under the early Google
                    Health Wave paradigm. This effort established our commitment to un-siloed
                    patient data and developer-friendly health data standards.
                  </p>
                  <div class="flex flex-wrap gap-space-sm pt-space-xs text-secondary font-caption text-caption">
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >Open Health Protocols</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >HL7 / Early FHIR Models</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >Patient Sovereignty</span
                    >
                  </div>
                </div>
                <div
                  class="w-full lg:w-72 h-44 rounded-lg bg-surface-container overflow-hidden flex-shrink-0 relative"
                >
                  <img
                    class="w-full h-full object-cover"
                    alt="Vintage clinical computer terminal displaying early Google Health Wave XML interfaces"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8HaSYcG9G6cgM6FKus7uawrHElRYiQK05UxrhuzO44Qf9ybap3z0ratXlpoGUcfj2EUt0yCT5nBW_OGWwXTBLBlulEoIlgfLQ07jI4GN0JwC9UiWUR1qiXxFYMlX-qlD8XKXhR33V8yAR407LQqU0uP3WcS9CkY_Y9Bl41LKbORplT_3UXviizS1zioqT0270hzfUJxeJ3WliZANqVoRaMbNUZqdUtW5x_1p7IFA"
                    referrerpolicy="no-referrer"
                  />
                  <div
                    class="absolute bottom-2 left-2 px-space-sm py-0.5 rounded bg-surface/90 text-on-surface font-label-sm text-label-sm"
                  >
                    Archive: Proto-PHR Wave
                  </div>
                </div>
              </div>
            </div>

            <!-- 2013-2018 -->
            <div class="relative flex flex-col md:flex-row items-start gap-gutter">
              <div
                class="w-16 h-16 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-on-secondary shadow-sm z-10"
              >
                <span class="font-title-md text-title-md font-bold">14</span>
              </div>
              <div
                class="flex-1 p-space-lg rounded-xl bg-surface shadow-sm flex flex-col lg:flex-row gap-space-lg items-start"
              >
                <div class="flex-1 flex flex-col gap-space-xs">
                  <div class="flex flex-wrap items-center gap-space-sm">
                    <span
                      class="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm"
                      >Sensor Evolution</span
                    >
                    <span class="font-caption text-caption text-tertiary">2013 – 2018</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Rigid Electrochemistry to Flexible Polymer Micro-Arrays
                  </h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                    Transitioning from bulky fingerstick calibrators to planar electrochemical
                    dermal strips. In vitro and rodent ADME-Tox profiles demonstrated the viability
                    of continuous intradermal glucose and enzyme sensing without vascular puncture.
                  </p>
                  <div class="flex flex-wrap gap-space-sm pt-space-xs text-primary font-caption text-caption">
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >Polymer Micro-Substrates</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >In Vitro ADME-Tox</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >Early CGM Firmware</span
                    >
                  </div>
                </div>
                <div
                  class="w-full lg:w-72 h-44 rounded-lg bg-surface-container overflow-hidden flex-shrink-0 relative"
                >
                  <img
                    class="w-full h-full object-cover"
                    alt="Microscopic close up of early clinical polymer flexible biosensor array prototypes"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVkK4kyNWKnUiA0x9g5Cwmm6RpzxswFpaHHq_creN_x6q-Ta8K-KDbDUKvY6gz9eY_009TR88VP7wMfjD3R7HS6r601ABl4haop0CYLKJ5mP6EPcb5sSvJka8qoNlR7BoRQfMZeumtHQdc5xN5SoIz2qc7wITJ25Cxkg5j449rRc0yTetBR-mAklOlkneMNJJushkc-0ifoC-Z-aYhcMlLuo6zapq-jbzhhJ1l5ZQ"
                    referrerpolicy="no-referrer"
                  />
                  <div
                    class="absolute bottom-2 left-2 px-space-sm py-0.5 rounded bg-surface/90 text-on-surface font-label-sm text-label-sm"
                  >
                    Archive: Gen-2 Micro-Array
                  </div>
                </div>
              </div>
            </div>

            <!-- 2019-2023 -->
            <div class="relative flex flex-col md:flex-row items-start gap-gutter">
              <div
                class="w-16 h-16 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-on-primary-container shadow-sm z-10"
              >
                <span class="font-title-md text-title-md font-bold">20</span>
              </div>
              <div
                class="flex-1 p-space-lg rounded-xl bg-surface shadow-sm flex flex-col lg:flex-row gap-space-lg items-start"
              >
                <div class="flex-1 flex flex-col gap-space-xs">
                  <div class="flex flex-wrap items-center gap-space-sm">
                    <span
                      class="px-space-sm py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm"
                      >Modern Paradigm</span
                    >
                    <span class="font-caption text-caption text-tertiary">2019 – 2023</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Rx Tattoo, CGM Disk &amp; Hummingbird Integration
                  </h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                    Unveiling sub-500μm painless microneedles tailored for both drug delivery and
                    real-time interstitial monitoring. Integration with Hummingbird Fuel telemetry,
                    home clinical exercise stations, and synchronized sleep recovery data.
                  </p>
                  <div class="flex flex-wrap gap-space-sm pt-space-xs text-secondary font-caption text-caption">
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >Pain-Free Intradermal Needles</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >CGM Disk Hardware</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >Hummingbird Metabolic Link</span
                    >
                  </div>
                </div>
                <div
                  class="w-full lg:w-72 h-44 rounded-lg bg-surface-container overflow-hidden flex-shrink-0 relative"
                >
                  <img
                    class="w-full h-full object-cover"
                    alt="Clinical rendering of circular RxDigita CGM Disk biosensor adhered to upper arm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEJhzg_OJexBtnDsF4jgdX5qQNLaixyMach_TlMF636ycPHlwkyaRmiPqwbjoE_1B4QI3BXJvgLM-ML3KsqrTIDU1dUL1HcMsTBuprLAWFoOrQy37Hf2Gvd2OLMaTUtTIHyudVYXFmkoc7pkFAlvVD3sLzeseV5TaAf-D71OM9l-okUrRXRg7g5-88sVSgFxviSsc_-vK-MgxSYnBfUD3EgQZEFqhHdpiXv1WIwDM"
                    referrerpolicy="no-referrer"
                  />
                  <div
                    class="absolute bottom-2 left-2 px-space-sm py-0.5 rounded bg-surface/90 text-on-surface font-label-sm text-label-sm"
                  >
                    Production: CGM Disk Sensor
                  </div>
                </div>
              </div>
            </div>

            <!-- 2024-Present -->
            <div class="relative flex flex-col md:flex-row items-start gap-gutter">
              <div
                class="w-16 h-16 rounded-full bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary font-bold shadow-sm z-10"
              >
                <mat-icon class="text-[26px]">all_inclusive</mat-icon>
              </div>
              <div
                class="flex-1 p-space-lg rounded-xl bg-surface shadow-sm flex flex-col lg:flex-row gap-space-lg items-start"
              >
                <div class="flex-1 flex flex-col gap-space-xs">
                  <div class="flex flex-wrap items-center gap-space-sm">
                    <span
                      class="px-space-sm py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm"
                      >Current Frontier</span
                    >
                    <span class="font-caption text-caption text-tertiary">2024 – Active</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Autonomous Feedback Loops &amp; Digital Therapeutics
                  </h3>
                  <p class="font-body-md text-body-md text-on-surface-variant">
                    Full-stack synthesis through RxApp: continuous glucose profiling meets diet
                    analytics, sleep architecture monitoring, and adaptive lifestyle guidance.
                    Clinical research licenses enable direct EHR integration across global medical
                    networks.
                  </p>
                  <div class="flex flex-wrap gap-space-sm pt-space-xs text-primary font-caption text-caption">
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >RxApp Clinical Sync</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >Metabolic AI Modeling</span
                    >
                    <span class="bg-surface-container px-space-sm py-1 rounded"
                      >FDA SaMD Pathways</span
                    >
                  </div>
                </div>
                <div
                  class="w-full lg:w-72 p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-xs flex-shrink-0"
                >
                  <div
                    class="flex items-center justify-between font-label-sm text-label-sm text-tertiary"
                  >
                    <span>Signal Stability Index</span>
                    <span class="text-secondary font-bold">99.82%</span>
                  </div>
                  <svg class="w-full h-16 text-primary" fill="none" viewBox="0 0 200 60">
                    <path
                      d="M0 45 C 30 40, 50 20, 80 25 C 110 30, 130 10, 160 18 C 180 22, 190 8, 200 12"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2.5"
                    ></path>
                    <path
                      d="M0 45 C 30 40, 50 20, 80 25 C 110 30, 130 10, 160 18 C 180 22, 190 8, 200 12 L 200 60 L 0 60 Z"
                      fill="currentColor"
                      fill-opacity="0.08"
                    ></path>
                  </svg>
                  <div
                    class="flex items-center justify-between font-caption text-caption text-on-surface-variant"
                  >
                    <span>MARD Rating: 7.9%</span>
                    <span class="text-secondary font-semibold">Active Cohort V</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership & Advisory Board -->
      <section class="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-xl" id="leadership">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div class="flex flex-col gap-space-xs">
            <span class="font-label-sm text-label-sm text-primary uppercase tracking-widest"
              >Scientific Guidance</span
            >
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Leadership &amp; Advisory Board
            </h2>
          </div>
          <p class="font-body-sm text-body-sm text-tertiary max-w-md">
            Spearheaded by pioneers who helped codify web-scale health record standards,
            micro-machined biosensors, and digital therapeutic protocols.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div
            class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="h-64 w-full bg-surface-container relative">
              <img
                class="w-full h-full object-cover"
                alt="Portrait of Dr. Evelyn Vance, Chief Scientific Officer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD203ww8O06_GmfdUf9kVga2e3MTDwF-JCA1qVbEJXW1_Rs2YbM2Dks0ilevCYcUCBW5MnCVrkTHzimCdkF42QsnUdupSfFiENevJdM8Q8fTNeCs6IYWajMkSqJRWtY2VvBps5XbbDaYtqtQY2APJts06tDElZY6ia-Le61u8bnTyDXxE6Oeb7RMYMWCf7_YO-EUmZfwbQ0mcQ2jsYVjrdYSAYEmPVdhpaY09hGB78"
                referrerpolicy="no-referrer"
              />
              <div
                class="absolute top-3 right-3 px-space-xs py-0.5 rounded bg-surface/90 text-primary font-label-sm text-label-sm"
              >
                Co-Founder • CSO
              </div>
            </div>
            <div class="p-space-md flex flex-col gap-space-xs flex-1 justify-between">
              <div class="flex flex-col gap-1">
                <h3 class="font-title-md text-title-md text-on-surface font-bold">
                  Dr. Evelyn Vance, MD, PhD
                </h3>
                <span class="font-label-sm text-label-sm text-secondary"
                  >Chief Scientific Officer</span
                >
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Former Lead Investigator in Transdermal Pharmacokinetics at Stanford Bio-X. 20+
                  years driving minimally invasive fluidics and micro-needle drug delivery.
                </p>
              </div>
              <div
                class="pt-space-sm flex items-center justify-between text-tertiary font-caption text-caption"
              >
                <span>Specialty: ADME-Tox</span>
                <mat-icon class="text-[18px] text-primary">science</mat-icon>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="h-64 w-full bg-surface-container relative">
              <img
                class="w-full h-full object-cover"
                alt="Portrait of Marcus Thorne, Chief Executive Officer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAJzAH-0tEb9iAW8Mjwke7qCGxvFOvioR0HbNhRWg_pXj-1r4KD_Sjl5CaJ0ykMJ8Qas47LTgYF2keJt_PJO0KLoPe70F5PSc5HwFO90Bt302-d4qoUARXs65CKU0hR7K9AxjZfkyiK8K5Km4eevsFGjEIYIDM3E_B5qmT8kXWH91oglbkb3cwSuJSBpfAPkxQM2dt6hAPRubiMVAuGLn5nODgth6_FBpV7NAdOqc"
                referrerpolicy="no-referrer"
              />
              <div
                class="absolute top-3 right-3 px-space-xs py-0.5 rounded bg-surface/90 text-primary font-label-sm text-label-sm"
              >
                Chief Executive Officer
              </div>
            </div>
            <div class="p-space-md flex flex-col gap-space-xs flex-1 justify-between">
              <div class="flex flex-col gap-1">
                <h3 class="font-title-md text-title-md text-on-surface font-bold">
                  Marcus Thorne, M.Eng
                </h3>
                <span class="font-label-sm text-label-sm text-secondary"
                  >Chief Executive &amp; Architect</span
                >
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Core participant in the early Google Health Wave open consortium. Oversaw wearable
                  medical hardware development spanning 5 FDA 510(k) submissions.
                </p>
              </div>
              <div
                class="pt-space-sm flex items-center justify-between text-tertiary font-caption text-caption"
              >
                <span>Specialty: Health Wave Interop</span>
                <mat-icon class="text-[18px] text-primary">hub</mat-icon>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="h-64 w-full bg-surface-container relative">
              <img
                class="w-full h-full object-cover"
                alt="Portrait of Dr. Aris Thorne-Alvarez, VP Micro-Fabrication"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZu_JD3QHl3d0KU5tPg1EZjVTJwKvc0TmSsmONxWVc97CdZeHBdnjU-H4GdxIH9O5RtiunGcTXmpf6xF8Pl9jlPbgy1fXKjOGJp1CQZ-Pxe5kwCkRihJWO6Evx2zJQ3rlCaD3GGGIjOFq3qk3p-i2FhZDYCXFkyXYQg_n_6A2BgM___LM31eTdQwlN_eSdasiLtZB1_8rEb-3I3aUjx3KExgfGa9sRMKLxj9SHgf4"
                referrerpolicy="no-referrer"
              />
              <div
                class="absolute top-3 right-3 px-space-xs py-0.5 rounded bg-surface/90 text-primary font-label-sm text-label-sm"
              >
                VP, Hardware Systems
              </div>
            </div>
            <div class="p-space-md flex flex-col gap-space-xs flex-1 justify-between">
              <div class="flex flex-col gap-1">
                <h3 class="font-title-md text-title-md text-on-surface font-bold">
                  Dr. Aris Thorne-Alvarez
                </h3>
                <span class="font-label-sm text-label-sm text-secondary"
                  >VP Micro-Fabrication</span
                >
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Pioneer in silicon-polymer hybrid micro-arrays. Spearheaded the painless
                  intradermal sensor geometry that now powers the Rx CGM Disk.
                </p>
              </div>
              <div
                class="pt-space-sm flex items-center justify-between text-tertiary font-caption text-caption"
              >
                <span>Specialty: MEMS &amp; Fluidics</span>
                <mat-icon class="text-[18px] text-primary">precision_manufacturing</mat-icon>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="h-64 w-full bg-surface-container relative">
              <img
                class="w-full h-full object-cover"
                alt="Portrait of Dr. Maya Lin, Chair of Clinical Steering"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJyfqA3KV06Ezj8Kzx-ucuMXEa0tKPyxR05UcBxcq4hZmeHyaMDB2ZjYsYztMIjDnX704i1u4F9RMB4QwsvnsSiW7gwIQxDElvtFnImD7O2tsolx_iC9AhigjUoodkQnO4-XPnBqaR3OzApHN9HZK_ABlCUShRYbmli-hRDAZnluusB4AQxCfSt4dgEVcDpuwyuqTpnGotfSnt8g5OvrcRIJGCq7vz986oaSJFQ3Q"
                referrerpolicy="no-referrer"
              />
              <div
                class="absolute top-3 right-3 px-space-xs py-0.5 rounded bg-surface/90 text-primary font-label-sm text-label-sm"
              >
                Chair, Advisory Board
              </div>
            </div>
            <div class="p-space-md flex flex-col gap-space-xs flex-1 justify-between">
              <div class="flex flex-col gap-1">
                <h3 class="font-title-md text-title-md text-on-surface font-bold">
                  Dr. Maya Lin, MD, FACC
                </h3>
                <span class="font-label-sm text-label-sm text-secondary"
                  >Chair, Clinical Steering</span
                >
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                  Professor of Cardiovascular &amp; Metabolic Medicine. Advises on the clinical
                  synthesis of lifestyle biomarkers, sleep telemetry, and continuous insulin
                  sensitivity.
                </p>
              </div>
              <div
                class="pt-space-sm flex items-center justify-between text-tertiary font-caption text-caption"
              >
                <span>Specialty: Digital Therapeutics</span>
                <mat-icon class="text-[18px] text-primary">cardiology</mat-icon>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Institutional Laboratories & Global Facilities -->
      <section class="w-full px-margin py-space-xl bg-surface-container-low">
        <div class="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col gap-space-xs">
            <span
              class="font-label-sm text-label-sm text-secondary uppercase tracking-widest"
              >Global Operations</span
            >
            <h2 class="font-headline-md text-headline-md text-on-surface">
              Institutional Locations &amp; Validation Centers
            </h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            <div class="p-space-lg rounded-xl bg-surface shadow-sm flex flex-col justify-between gap-space-md">
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center justify-between">
                  <span
                    class="px-space-sm py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold"
                    >Headquarters &amp; Bio-Lab</span
                  >
                  <mat-icon class="text-primary text-[20px]">corporate_fare</mat-icon>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  San Francisco, CA
                </h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  RxDigita Bio-Innovation Center<br />
                  450 Mission Bay Boulevard South, Suite 800<br />
                  San Francisco, CA 94158
                </p>
                <div class="font-caption text-caption text-tertiary">
                  Cleanroom Class 100 • Micro-needle Fabrication Suite • Institutional Review Board
                  Office
                </div>
              </div>
              <div class="pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-secondary">
                <mat-icon class="text-[16px]">call</mat-icon>
                <span>+1 (415) 890-4420</span>
              </div>
            </div>

            <div class="p-space-lg rounded-xl bg-surface shadow-sm flex flex-col justify-between gap-space-md">
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center justify-between">
                  <span
                    class="px-space-sm py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold"
                    >Clinical Trials &amp; ADME-Tox</span
                  >
                  <mat-icon class="text-secondary text-[20px]">biotech</mat-icon>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Cambridge, MA
                </h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Kendall Square Clinical Research Unit<br />
                  100 Technology Square, 5th Floor<br />
                  Cambridge, MA 02139
                </p>
                <div class="font-caption text-caption text-tertiary">
                  Analytical Mass Spectrometry • In Vitro Absorption Modeling • Pharmacokinetics Lab
                </div>
              </div>
              <div class="pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-secondary">
                <mat-icon class="text-[16px]">call</mat-icon>
                <span>+1 (617) 542-8812</span>
              </div>
            </div>

            <div class="p-space-lg rounded-xl bg-surface shadow-sm flex flex-col justify-between gap-space-md">
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center justify-between">
                  <span
                    class="px-space-sm py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold"
                    >European Regulatory Hub</span
                  >
                  <mat-icon class="text-primary text-[20px]">language</mat-icon>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Basel, Switzerland
                </h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  RxDigita European Compliance GmbH<br />
                  Novartis Campus / St. Johann Quartier<br />
                  4056 Basel, Switzerland
                </p>
                <div class="font-caption text-caption text-tertiary">
                  MDR / CE Mark Compliance • EU-GDPR Medical Vault Node • Partner Integrations
                </div>
              </div>
              <div class="pt-space-sm flex items-center gap-space-xs font-label-md text-label-md text-secondary">
                <mat-icon class="text-[16px]">call</mat-icon>
                <span>+41 61 228 90 00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Direct Contact & Partnership Inquiry Form -->
      <section class="w-full px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-xl" id="contact-us">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div class="lg:col-span-5 flex flex-col gap-space-md">
            <div
              class="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest"
            >
              <mat-icon class="text-[16px]">contact_mail</mat-icon>
              <span>Institutional Engagement</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Direct Contact &amp; Partnership Inquiries
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We collaborate with research universities, hospital networks, diagnostic developers,
              and life science enterprises seeking to evaluate our microneedle continuous sensing
              arrays or license the RxApp platform.
            </p>
            <div class="flex flex-col gap-space-sm pt-space-xs">
              <div class="flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low">
                <mat-icon class="text-primary text-[22px] shrink-0">assignment_turned_in</mat-icon>
                <div class="flex flex-col">
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Clinical Trial Sponsorship</span
                  >
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Rapid provisioning of CGM Disk batches and pre-calibrated ADME-Tox telemetry for
                    investigator trials.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-space-sm p-space-md rounded-lg bg-surface-container-low">
                <mat-icon class="text-secondary text-[22px] shrink-0">key</mat-icon>
                <div class="flex flex-col">
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Technology Licensing</span
                  >
                  <p class="font-body-sm text-body-sm text-on-surface-variant">
                    Patented microneedle geometries, dermal fluid extraction protocols, and
                    Hummingbird data connectors.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs">
              <div class="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                <mat-icon class="text-[18px]">verified_user</mat-icon>
                <span>Secure Medical Inquiries</span>
              </div>
              <p class="font-caption text-caption text-on-surface-variant">
                All institutional disclosures and inquiries are processed under mutual NDA
                guidelines according to HIPAA/GDPR clinical research data protections.
              </p>
            </div>
          </div>

          <div class="lg:col-span-7 p-space-xl rounded-xl bg-surface shadow-md flex flex-col gap-space-md">
            <div class="flex items-center justify-between pb-space-xs">
              <div class="flex flex-col">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Inquiry Submission Form
                </h3>
                <span class="font-caption text-caption text-tertiary"
                  >Direct routing to our clinical scientific board</span
                >
              </div>
              <span
                class="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm"
                >Standard SLA: ≤ 24h</span
              >
            </div>

            <form
              [formGroup]="inquiryForm"
              (ngSubmit)="handleFormSubmit()"
              class="flex flex-col gap-space-md"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div class="flex flex-col gap-1">
                  <label class="font-label-md text-label-md text-on-surface" for="fullName"
                    >Full Name <span class="text-error">*</span></label
                  >
                  <input
                    id="fullName"
                    formControlName="fullName"
                    type="text"
                    placeholder="Dr. Jordan Henderson"
                    class="h-11 px-space-md rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-body-md text-body-md"
                  />
                  @if (
                    inquiryForm.controls.fullName.touched && inquiryForm.controls.fullName.invalid
                  ) {
                    <span class="text-caption text-error">Full name is required.</span>
                  }
                </div>
                <div class="flex flex-col gap-1">
                  <label class="font-label-md text-label-md text-on-surface" for="email"
                    >Institutional Email <span class="text-error">*</span></label
                  >
                  <input
                    id="email"
                    formControlName="email"
                    type="email"
                    placeholder="j.henderson@med.harvard.edu"
                    class="h-11 px-space-md rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-body-md text-body-md"
                  />
                  @if (inquiryForm.controls.email.touched && inquiryForm.controls.email.invalid) {
                    <span class="text-caption text-error">Valid institutional email required.</span>
                  }
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div class="flex flex-col gap-1">
                  <label class="font-label-md text-label-md text-on-surface" for="affiliation"
                    >Institution / Organization <span class="text-error">*</span></label
                  >
                  <input
                    id="affiliation"
                    formControlName="affiliation"
                    type="text"
                    placeholder="Brigham & Women's Hospital / Biogen"
                    class="h-11 px-space-md rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-body-md text-body-md"
                  />
                  @if (
                    inquiryForm.controls.affiliation.touched &&
                    inquiryForm.controls.affiliation.invalid
                  ) {
                    <span class="text-caption text-error">Affiliation is required.</span>
                  }
                </div>
                <div class="flex flex-col gap-1">
                  <label class="font-label-md text-label-md text-on-surface" for="inquiryType"
                    >Inquiry Type <span class="text-error">*</span></label
                  >
                  <select
                    id="inquiryType"
                    formControlName="inquiryType"
                    class="h-11 px-space-md rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-body-md text-body-md cursor-pointer"
                  >
                    <option value="clinical">Clinical Research &amp; Trial Sponsorship</option>
                    <option value="licensing">Platform &amp; Patent Licensing</option>
                    <option value="devices">Device Support &amp; CGM Calibration</option>
                    <option value="general">General Partnership / Media Inquiries</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col gap-1">
                <label class="font-label-md text-label-md text-on-surface" for="message"
                  >Project Scope &amp; Inquiries <span class="text-error">*</span></label
                >
                <textarea
                  id="message"
                  formControlName="message"
                  rows="4"
                  placeholder="Outline your prospective cohort size, desired biological targets (e.g. glucose, lactate, drug metabolites), and trial parameters..."
                  class="p-space-md rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-body-md text-body-md resize-none"
                ></textarea>
                @if (inquiryForm.controls.message.touched && inquiryForm.controls.message.invalid) {
                  <span class="text-caption text-error">Please outline your project scope.</span>
                }
              </div>

              <div class="flex items-start gap-space-sm pt-space-xs">
                <input
                  id="ndaAgree"
                  formControlName="ndaAgree"
                  type="checkbox"
                  class="w-4 h-4 mt-1 rounded bg-surface-container text-primary focus:ring-primary cursor-pointer"
                />
                <label
                  class="font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
                  for="ndaAgree"
                >
                  I certify that this submission represents a verified institutional body or medical
                  sponsor. I accept RxDigita's bio-clinical confidentiality and research privacy
                  protocols.
                </label>
              </div>
              @if (inquiryForm.controls.ndaAgree.touched && inquiryForm.controls.ndaAgree.invalid) {
                <span class="text-caption text-error"
                  >Please confirm institutional NDA and confidentiality acceptance.</span
                >
              }

              @if (!submitted()) {
                <div class="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <button
                    type="submit"
                    [disabled]="submitting()"
                    class="w-full sm:w-auto px-space-xl py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs shadow-sm cursor-pointer disabled:opacity-70"
                  >
                    @if (submitting()) {
                      <mat-icon class="animate-spin text-[18px]">sync</mat-icon>
                      <span>Encrypting Transmission...</span>
                    } @else {
                      <span>Transmit Inquiry</span>
                      <mat-icon class="text-[18px]">send</mat-icon>
                    }
                  </button>
                  <span class="font-caption text-caption text-tertiary"
                    >Direct encryption node • TLS 1.3 Certified</span
                  >
                </div>
              } @else {
                <div
                  class="p-space-md rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-between gap-space-sm"
                >
                  <div class="flex items-center gap-space-sm">
                    <mat-icon class="text-[24px] shrink-0">task_alt</mat-icon>
                    <div class="flex flex-col">
                      <span class="font-title-md text-title-md font-bold"
                        >Transmission Successful</span
                      >
                      <span class="font-body-sm text-body-sm"
                        >Your dossier has been assigned to the Clinical Partnerships Desk. A
                        principal coordinator will connect within 24 hours.</span
                      >
                    </div>
                  </div>
                  <button
                    type="button"
                    (click)="resetInquiryForm()"
                    class="px-3 py-1 rounded bg-surface text-on-secondary-fixed font-label-sm text-label-sm shrink-0 cursor-pointer"
                  >
                    New Inquiry
                  </button>
                </div>
              }
            </form>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class CompanyLegacy {
  readonly submitting = signal(false);
  readonly submitted = signal(false);

  readonly inquiryForm = new FormGroup({
    fullName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    affiliation: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    inquiryType: new FormControl('clinical', {nonNullable: true, validators: [Validators.required]}),
    message: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    ndaAgree: new FormControl(false, {nonNullable: true, validators: [Validators.requiredTrue]}),
  });

  handleFormSubmit(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 650);
  }

  resetInquiryForm(): void {
    this.submitted.set(false);
    this.inquiryForm.reset({
      fullName: '',
      email: '',
      affiliation: '',
      inquiryType: 'clinical',
      message: '',
      ndaAgree: false,
    });
  }
}
