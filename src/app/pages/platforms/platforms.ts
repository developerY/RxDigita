import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-platforms',
  imports: [RouterLink, MatIconModule, ReactiveFormsModule],
  template: `
    <div class="flex flex-col w-full">
      <!-- Top Technical Breadcrumb & Meta Bar -->
      <section class="w-full px-margin py-space-sm bg-surface-container-low">
        <div
          class="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-space-sm font-caption text-caption text-on-surface-variant"
        >
          <div class="flex items-center gap-space-xs">
            <span class="text-primary font-bold">PLATFORMS</span>
            <span>/</span>
            <span class="text-on-surface">BIO-SENSING &amp; ADME-TOX</span>
            <span>/</span>
            <span class="text-secondary font-mono">SPEC-REV 4.18</span>
          </div>
          <div class="flex items-center gap-space-md">
            <span class="inline-flex items-center gap-1.5 text-secondary font-semibold">
              <span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              Clinical Hardware Node: Live Telemetry
            </span>
            <span class="hidden md:inline font-mono">ISO-13485 • FDA Class IIb Pre-Submission</span>
          </div>
        </div>
      </section>

      <!-- Section: Header Overview -->
      <section class="w-full px-margin pt-space-xl pb-space-lg bg-surface">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-md">
          <div class="flex flex-wrap items-center gap-space-sm">
            <span
              class="px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider"
              >Engineering Architecture</span
            >
            <span
              class="px-space-sm py-0.5 rounded-full bg-surface-variant text-secondary font-label-sm text-label-sm"
              >Sub-Millimeter Bio-Sensory Stack</span
            >
            <span
              class="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm"
              >Continuous Molecular Sampling</span
            >
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
            <div class="lg:col-span-8 flex flex-col gap-space-xs">
              <h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
                Hardware &amp; Delivery Platforms: Precision Micro-Sensing and ADME-Tox Modeling
              </h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
                Bridging in-vivo biological signals with algorithmic precision. RxDigita couples
                painless transdermal micro-interfaces with continuous metabolic monitoring and
                real-time computational pharmacokinetics.
              </p>
            </div>
            <div
              class="lg:col-span-4 flex flex-col gap-space-xs p-space-md bg-surface-container rounded-xl shadow-sm"
            >
              <div class="flex items-center justify-between">
                <span class="font-label-sm text-label-sm uppercase text-secondary font-bold"
                  >Platform Readiness Index</span
                >
                <span class="font-mono text-title-md text-primary font-bold">99.98%</span>
              </div>
              <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div class="bg-primary h-full w-[94%] rounded-full"></div>
              </div>
              <div class="flex justify-between font-caption text-caption text-on-surface-variant pt-1">
                <span>4 Production Systems</span>
                <span>24/7 Cloud Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Selector Ribbon -->
      <section class="w-full px-margin pb-space-lg bg-surface">
        <div
          class="max-w-[1440px] mx-auto flex flex-wrap gap-space-xs p-1.5 bg-surface-container-low rounded-xl"
        >
          <a
            routerLink="/platforms"
            fragment="microneedles"
            (click)="activeSection.set('microneedles')"
            [class]="
              activeSection() === 'microneedles'
                ? 'px-space-md py-space-xs rounded-lg bg-surface text-primary font-label-md text-label-md shadow-sm transition-all'
                : 'px-space-md py-space-xs rounded-lg text-on-surface-variant font-label-md text-label-md hover:text-primary hover:bg-surface transition-all'
            "
            >01. MicroNeedle Array &amp; Rx Tattoo</a
          >
          <a
            routerLink="/platforms"
            fragment="cgm-disk"
            (click)="activeSection.set('cgm-disk')"
            [class]="
              activeSection() === 'cgm-disk'
                ? 'px-space-md py-space-xs rounded-lg bg-surface text-primary font-label-md text-label-md shadow-sm transition-all'
                : 'px-space-md py-space-xs rounded-lg text-on-surface-variant font-label-md text-label-md hover:text-primary hover:bg-surface transition-all'
            "
            >02. CGM Disk Sensor</a
          >
          <a
            routerLink="/platforms"
            fragment="hummingbird-fuel"
            (click)="activeSection.set('hummingbird-fuel')"
            [class]="
              activeSection() === 'hummingbird-fuel'
                ? 'px-space-md py-space-xs rounded-lg bg-surface text-primary font-label-md text-label-md shadow-sm transition-all'
                : 'px-space-md py-space-xs rounded-lg text-on-surface-variant font-label-md text-label-md hover:text-primary hover:bg-surface transition-all'
            "
            >03. Hummingbird Fuel</a
          >
          <a
            routerLink="/platforms"
            fragment="adme-tox"
            (click)="activeSection.set('adme-tox')"
            [class]="
              activeSection() === 'adme-tox'
                ? 'px-space-md py-space-xs rounded-lg bg-surface text-primary font-label-md text-label-md shadow-sm transition-all'
                : 'px-space-md py-space-xs rounded-lg text-on-surface-variant font-label-md text-label-md hover:text-primary hover:bg-surface transition-all'
            "
            >04. Medical ADME-Tox Cloud</a
          >
          <a
            routerLink="/platforms"
            fragment="schematics"
            class="ml-auto px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 hover:bg-primary-container transition-all"
          >
            <mat-icon class="text-[16px]">file_download</mat-icon> Whitepapers
          </a>
        </div>
      </section>

      <!-- PLATFORM 1: MicroNeedle Array & Rx Tattoo -->
      <section
        class="w-full px-margin py-space-xl bg-gradient-to-br from-surface-container-low via-aqua-surface/70 to-surface-container-low"
        id="microneedles"
      >
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span class="font-mono text-label-sm text-secondary font-bold tracking-wider"
                >PLATFORM SPEC 01 // SUB-DERMAL TRANSDUCTION</span
              >
              <h2 class="font-headline-lg text-headline-lg text-on-surface mt-1">
                MicroNeedle Array &amp; Rx Tattoo
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-2">
                Painless, sub-millimeter dermal penetration enabling non-invasive interstitial fluid
                (ISF) analysis and closed-loop, programmable transdermal therapeutic release.
              </p>
            </div>
            <div class="flex items-center gap-space-xs">
              <span
                class="px-space-md py-space-xs rounded-full bg-surface text-secondary font-label-sm text-label-sm shadow-sm"
                >Depth: 450μm</span
              >
              <span
                class="px-space-md py-space-xs rounded-full bg-surface text-primary font-label-sm text-label-sm shadow-sm"
                >Nerve-Sparing Zone</span
              >
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
            <!-- Visual Column -->
            <div
              class="lg:col-span-7 rounded-xl overflow-hidden bg-surface shadow-sm flex flex-col justify-between p-space-lg"
            >
              <div class="flex items-center justify-between mb-space-md">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-secondary"></span>
                  <span class="font-title-md text-title-md text-on-surface font-bold"
                    >Scanning Electron Morphology</span
                  >
                </div>
                <span class="font-caption text-caption text-on-surface-variant font-mono"
                  >MAG: x1200 | PITCH: 600μm</span
                >
              </div>
              <div
                class="relative w-full h-80 rounded-xl overflow-hidden bg-surface-container mb-space-md"
              >
                <img
                  class="w-full h-full object-cover"
                  alt="Scanning electron microscope view of biocompatible polymeric microneedle array"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTNfBesN1VRE_KSITO7T0a-J4PVH7RLr6USBNVqv01hEKQH-X3Wwp3ZjBCVJ3KbfVcVKeuqjojt-cnw0-CNn1hUpd7H-nuwgfB1BVbhIw-pRZv8n-AWBFMzvyiHhwoxVm-DjOtYU46nP5LRPeW0BoTpMiYmN1b_HMWD_XP0Pyt0Oqp5cAl07inwz22sIl7MA2Fw5yo6rYQ9ymxRP_xSQMsz1l013gJIJCIdTSKDyw"
                  referrerpolicy="no-referrer"
                />
                <div
                  class="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2"
                >
                  <mat-icon class="text-secondary text-[18px]">biotech</mat-icon>
                  <span class="font-caption text-caption text-on-surface font-medium"
                    >Hydraulic micro-conduit diameter: 32 μm</span
                  >
                </div>
              </div>
              <div class="grid grid-cols-3 gap-space-sm pt-space-sm">
                <div class="p-space-sm rounded-lg bg-surface-container">
                  <span class="font-caption text-caption text-on-surface-variant uppercase"
                    >Array Density</span
                  >
                  <p class="font-title-md text-title-md text-on-surface font-bold">400 / cm²</p>
                  <span class="font-label-sm text-label-sm text-secondary">Isotropic Grid</span>
                </div>
                <div class="p-space-sm rounded-lg bg-surface-container">
                  <span class="font-caption text-caption text-on-surface-variant uppercase"
                    >Sampling Lag</span
                  >
                  <p class="font-title-md text-title-md text-on-surface font-bold">&lt; 3.2 sec</p>
                  <span class="font-label-sm text-label-sm text-secondary"
                    >Active Micro-Capillary</span
                  >
                </div>
                <div class="p-space-sm rounded-lg bg-surface-container">
                  <span class="font-caption text-caption text-on-surface-variant uppercase"
                    >Pain Index (VAS)</span
                  >
                  <p class="font-title-md text-title-md text-on-surface font-bold">0.02 / 10</p>
                  <span class="font-label-sm text-label-sm text-secondary">Nociceptor Safe</span>
                </div>
              </div>
            </div>

            <!-- Feature Breakdown Column -->
            <div class="lg:col-span-5 flex flex-col gap-space-sm">
              <div class="p-space-md bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-start gap-space-sm">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0"
                  >
                    <mat-icon class="text-[22px]">water_drop</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1 flex-1">
                    <div class="flex items-center justify-between gap-2">
                      <h3 class="font-title-md text-title-md text-on-surface font-bold">
                        Micro-Reservoir Capacity
                      </h3>
                      <span
                        class="font-caption text-caption px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed"
                        >850 μL Stack</span
                      >
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Integrated multi-chamber nanoliter reservoirs with piezoelectric micro-valves
                      capable of micro-dosing GLP-1 analogues, fast-acting peptides, and emergency
                      electrolyte balances on automated feedback loops.
                    </p>
                    <div class="flex items-center gap-space-md pt-2 font-mono text-caption text-secondary">
                      <span>• Precision: ±0.05 μL</span>
                      <span>• Dual-valve redundancy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-space-md bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-start gap-space-sm">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0"
                  >
                    <mat-icon class="text-[22px]">grain</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1 flex-1">
                    <div class="flex items-center justify-between gap-2">
                      <h3 class="font-title-md text-title-md text-on-surface font-bold">
                        Bio-Compatible Polymer Needles
                      </h3>
                      <span
                        class="font-caption text-caption px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed"
                        >Silk Fibroin + HA</span
                      >
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Constructed from cross-linked hyaluronate and silk fibroin matrices. Needles
                      maintain rigidity during skin insertion, then transition to hydrogel conduits
                      without eliciting immune foreign-body reactions or granulomas.
                    </p>
                    <div class="flex items-center gap-space-md pt-2 font-mono text-caption text-secondary">
                      <span>• Young's Modulus: 4.2 GPa</span>
                      <span>• Zero bio-accumulation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-space-md bg-surface rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-start gap-space-sm">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0"
                  >
                    <mat-icon class="text-[22px]">colorize</mat-icon>
                  </div>
                  <div class="flex flex-col gap-1 flex-1">
                    <div class="flex items-center justify-between gap-2">
                      <h3 class="font-title-md text-title-md text-on-surface font-bold">
                        Rx Tattoo Dermal Pigment Sensor
                      </h3>
                      <span
                        class="font-caption text-caption px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold"
                        >Active Optical</span
                      >
                    </div>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Semi-permanent intradermal fluorophore tags that emit spectrophotometric shifts
                      in response to local pH, lactate, and ion concentration changes, read
                      instantly via optical smartphone or CGM Disk sensor.
                    </p>
                    <div class="flex items-center gap-space-md pt-2 font-mono text-caption text-secondary">
                      <span>• 90-day biological half-life</span>
                      <span>• Safe resonant fluorophores</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PLATFORM 2: Continuous Glucose Monitoring (CGM) Disk -->
      <section class="w-full px-margin py-space-xl bg-surface" id="cgm-disk">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span class="font-mono text-label-sm text-secondary font-bold tracking-wider"
                >PLATFORM SPEC 02 // SUB-CUTANEOUS TELEMETRY</span
              >
              <h2 class="font-headline-lg text-headline-lg text-on-surface mt-1">
                Continuous Glucose Monitoring (CGM) Disk
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-2">
                Engineered with a thickness of only 1.8mm, the CGM Disk unites enzyme-free optical
                sensing with low-energy Bluetooth telemetry, delivering uninterrupted 14-day
                biomarker analytics with zero fingerstick calibration.
              </p>
            </div>
            <div class="flex items-center gap-space-sm">
              <div class="flex flex-col items-end">
                <span class="font-mono text-caption text-on-surface-variant">Profile Elevation</span>
                <span class="font-title-md text-title-md font-bold text-primary"
                  >1.8 mm Ultra-Flat</span
                >
              </div>
              <div class="w-px h-8 bg-surface-container-highest"></div>
              <div class="flex flex-col items-end">
                <span class="font-mono text-caption text-on-surface-variant">Wear Duration</span>
                <span class="font-title-md text-title-md font-bold text-secondary"
                  >14 Full Days</span
                >
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div
              class="lg:col-span-5 p-space-lg bg-surface-container rounded-xl flex flex-col justify-between"
            >
              <div class="flex flex-col gap-space-xs">
                <div class="flex items-center justify-between">
                  <span class="font-label-sm text-label-sm uppercase text-secondary font-bold"
                    >Miniaturized Monolithic Disk</span
                  >
                  <span
                    class="px-2 py-0.5 rounded-full bg-surface font-caption text-caption text-primary"
                    >IP68 Submersible</span
                  >
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Aerospace-Grade Titanium &amp; Polymer Casing
                </h3>
              </div>
              <div
                class="relative w-full h-64 my-space-md rounded-xl overflow-hidden bg-surface-container-high"
              >
                <img
                  class="w-full h-full object-cover"
                  alt="Ultra-thin circular Continuous Glucose Monitoring disk worn on upper arm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1CqaVILnPzyLsLjnP30FtIb1nCGXoJBu33IDA6qC0Qi8zXXYueJp2Go0E10q3-xlF5QrzMEJhNDSKgg0YaDegE3lYZGv0V_THM5Mq-dUhv403muvFrwHdp22fwK9LeDS8cEQjoROw6VynQ0hoOQ1C_m81lXpfhirXfNAB7O0Tqff8mevJyCDtzbGtNd_YFRmxUQ3wiMr3jcgWWwpiRAJ_GdAegYplCZNrebIMoKY"
                  referrerpolicy="no-referrer"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-on-surface/50 to-transparent flex items-end p-4"
                >
                  <div class="text-surface font-caption text-caption">
                    <span class="font-bold text-surface-bright">Weight: 2.1 grams</span> •
                    Coin-sized footprint (22mm ∅)
                  </div>
                </div>
              </div>
              <div class="space-y-2 font-body-sm text-body-sm">
                <div class="flex items-center justify-between py-1.5 bg-surface px-3 rounded-lg">
                  <span class="text-on-surface-variant font-medium">RF Protocol</span>
                  <span class="font-mono text-primary font-bold">BLE 5.4 + NFC Tag Type 5</span>
                </div>
                <div class="flex items-center justify-between py-1.5 bg-surface px-3 rounded-lg">
                  <span class="text-on-surface-variant font-medium">Sampling Frequency</span>
                  <span class="font-mono text-on-surface font-bold">1 Measurement / 30 sec</span>
                </div>
                <div class="flex items-center justify-between py-1.5 bg-surface px-3 rounded-lg">
                  <span class="text-on-surface-variant font-medium">Battery Architecture</span>
                  <span class="font-mono text-secondary font-bold"
                    >Solid-State Zinc-Air Micro-Cell</span
                  >
                </div>
                <div class="flex items-center justify-between py-1.5 bg-surface px-3 rounded-lg">
                  <span class="text-on-surface-variant font-medium">Encrypted Storage</span>
                  <span class="font-mono text-on-surface font-bold"
                    >30 Days On-Disk Flash Buffer</span
                  >
                </div>
              </div>
            </div>

            <div class="lg:col-span-7 flex flex-col gap-space-md">
              <div
                class="p-space-lg bg-surface-container-low rounded-xl shadow-sm flex flex-col gap-space-md"
              >
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                  <div>
                    <h3 class="font-title-md text-title-md text-on-surface font-bold">
                      Sensor Methodology Comparison
                    </h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">
                      Enzyme-Free Optical Sensing vs. Conventional Electrochemical Probes
                    </p>
                  </div>
                  <span
                    class="px-space-sm py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm self-start"
                    >Analytical Superiority</span
                  >
                </div>
                <div class="overflow-x-auto w-full">
                  <table class="w-full text-left font-body-sm text-body-sm border-collapse">
                    <thead>
                      <tr
                        class="bg-surface-container text-on-surface-variant font-label-md text-label-md uppercase tracking-wider"
                      >
                        <th class="p-space-sm rounded-l-lg">Parameter</th>
                        <th class="p-space-sm">RxDigita Optical Matrix</th>
                        <th class="p-space-sm rounded-r-lg">Standard Electrochemical</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-surface-container">
                      <tr class="hover:bg-surface transition-colors">
                        <td class="p-space-sm font-semibold text-on-surface">
                          Transduction Mechanism
                        </td>
                        <td class="p-space-sm text-primary font-bold flex items-center gap-1.5">
                          <mat-icon class="text-[18px] text-secondary">check_circle</mat-icon>
                          Near-IR Fluorescent Resonance (FRET)
                        </td>
                        <td class="p-space-sm text-on-surface-variant">
                          Glucose Oxidase (GOx) Enzymatic
                        </td>
                      </tr>
                      <tr class="hover:bg-surface transition-colors">
                        <td class="p-space-sm font-semibold text-on-surface">
                          Mean Absolute Relative Diff (MARD)
                        </td>
                        <td class="p-space-sm text-primary font-bold">
                          6.8% (Clinical Gold Standard)
                        </td>
                        <td class="p-space-sm text-on-surface-variant">8.9% – 10.4%</td>
                      </tr>
                      <tr class="hover:bg-surface transition-colors">
                        <td class="p-space-sm font-semibold text-on-surface">
                          Enzymatic Degradation Risk
                        </td>
                        <td class="p-space-sm text-secondary font-semibold">
                          Zero (Enzyme-Free Synthetic Host)
                        </td>
                        <td class="p-space-sm text-error font-medium">Degrades after 10-14 days</td>
                      </tr>
                      <tr class="hover:bg-surface transition-colors">
                        <td class="p-space-sm font-semibold text-on-surface">
                          Acetaminophen / Vit-C Interference
                        </td>
                        <td class="p-space-sm text-secondary font-semibold">
                          Immune (Spectroscopic isolation)
                        </td>
                        <td class="p-space-sm text-on-surface-variant">
                          Susceptible to redox cross-talk
                        </td>
                      </tr>
                      <tr class="hover:bg-surface transition-colors">
                        <td class="p-space-sm font-semibold text-on-surface">
                          Warm-up Stabilization Time
                        </td>
                        <td class="p-space-sm text-primary font-bold">12 Minutes</td>
                        <td class="p-space-sm text-on-surface-variant">60 – 120 Minutes</td>
                      </tr>
                      <tr class="hover:bg-surface transition-colors">
                        <td class="p-space-sm font-semibold text-on-surface">Factory Calibration</td>
                        <td class="p-space-sm text-primary font-bold">
                          100% Pre-calibrated (NIST Traceable)
                        </td>
                        <td class="p-space-sm text-on-surface-variant">Batch-coded / Drift-prone</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Sparkline Visualization -->
                <div class="p-space-md bg-surface rounded-xl flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span
                      class="font-label-sm text-label-sm font-bold text-on-surface-variant uppercase"
                      >Dynamic ISF Glycemic Tracking (Simulated Stream)</span
                    >
                    <span class="font-mono text-caption text-secondary font-bold"
                      >96 mg/dL • Stable (±0.2)</span
                    >
                  </div>
                  <svg
                    class="w-full h-16 text-primary"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 600 80"
                  >
                    <path
                      d="M0,50 Q40,48 80,45 T160,35 T240,40 T320,30 T400,28 T480,36 T540,32 L600,34"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="3"
                      vector-effect="non-scaling-stroke"
                    ></path>
                    <path
                      d="M0,50 Q40,48 80,45 T160,35 T240,40 T320,30 T400,28 T480,36 T540,32 L600,34 L600,80 L0,80 Z"
                      fill="currentColor"
                      fill-opacity="0.08"
                    ></path>
                    <circle class="fill-secondary animate-ping" cx="600" cy="34" r="5"></circle>
                    <circle class="fill-primary" cx="600" cy="34" r="4"></circle>
                  </svg>
                  <div class="flex justify-between font-caption text-caption text-on-surface-variant">
                    <span>-60 min</span>
                    <span>-45 min</span>
                    <span>-30 min</span>
                    <span>-15 min</span>
                    <span>Now (Continuous Sync)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PLATFORM 3: Hummingbird Fuel -->
      <section
        class="w-full px-margin py-space-xl bg-gradient-to-br from-surface-container-low via-warm-surface/65 to-surface-container-low"
        id="hummingbird-fuel"
      >
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div class="lg:col-span-6 flex flex-col gap-space-md">
              <div class="flex items-center gap-space-xs">
                <span class="font-mono text-label-sm text-secondary font-bold tracking-wider"
                  >PLATFORM SPEC 03 // METABOLIC ENERGETICS</span
                >
                <span
                  class="px-2 py-0.5 rounded-full bg-surface-container font-caption text-caption text-primary"
                  >Rapid Glycogen Sparing</span
                >
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface">
                Hummingbird Fuel: Rapid Energetic Substrate Delivery
              </h2>
              <p class="font-body-lg text-body-lg text-on-surface-variant">
                A targeted bio-molecular replenishment architecture designed to prevent cellular
                metabolic collapse. Hummingbird Fuel delivers hyper-pure, non-insulinotropic
                carbohydrate isomers and ketone ester precursors directly into circulation under
                active ISF sensor orchestration.
              </p>
              <div class="grid grid-cols-2 gap-space-sm pt-space-xs">
                <div class="p-space-md rounded-xl bg-surface shadow-sm">
                  <mat-icon class="text-secondary text-[24px]">bolt</mat-icon>
                  <h4 class="font-title-md text-title-md text-on-surface font-bold mt-1">
                    Direct-to-Mitochondria
                  </h4>
                  <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Bypasses hepatic digestion via sub-lingual and transdermal microneedle osmotic
                    shunts.
                  </p>
                </div>
                <div class="p-space-md rounded-xl bg-surface shadow-sm">
                  <mat-icon class="text-primary text-[24px]">speed</mat-icon>
                  <h4 class="font-title-md text-title-md text-on-surface font-bold mt-1">
                    180-Second Cellular Uptake
                  </h4>
                  <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Demonstrated rapid ATP restoration in acute critical care and prolonged hypoxic
                    exertion.
                  </p>
                </div>
              </div>
              <div class="p-space-md rounded-xl bg-surface-container flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <span class="font-label-md text-label-md text-on-surface font-bold"
                    >Substrate Bio-availability Benchmark</span
                  >
                  <span class="font-mono text-caption text-primary font-bold">98.4% Efficiency</span>
                </div>
                <div class="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden flex">
                  <div class="bg-primary h-full w-[65%]" title="Ketone D-Beta-Hydroxybutyrate"></div>
                  <div
                    class="bg-secondary h-full w-[25%]"
                    title="Isomaltulose-cluster Dextrin"
                  ></div>
                  <div
                    class="bg-secondary-fixed-dim h-full w-[10%]"
                    title="Micronized Electrolyte Balance"
                  ></div>
                </div>
                <div
                  class="flex flex-wrap items-center justify-between gap-2 font-caption text-caption text-on-surface-variant"
                >
                  <span class="flex items-center gap-1"
                    ><span class="w-2 h-2 rounded-full bg-primary"></span> β-HB Ketone Ester
                    (65%)</span
                  >
                  <span class="flex items-center gap-1"
                    ><span class="w-2 h-2 rounded-full bg-secondary"></span> Cluster Dextrin
                    (25%)</span
                  >
                  <span class="flex items-center gap-1"
                    ><span class="w-2 h-2 rounded-full bg-secondary-fixed-dim"></span> Trace
                    Osmolytes (10%)</span
                  >
                </div>
              </div>
            </div>

            <div class="lg:col-span-6 flex flex-col items-center">
              <div
                class="relative w-full h-[460px] rounded-2xl overflow-hidden bg-surface shadow-sm flex items-center justify-center p-space-md"
              >
                <img
                  class="w-full h-full object-cover rounded-xl bg-surface-container"
                  alt="Clinical medical nutrient delivery apparatus with illuminated liquid cartridge"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNtsIZ4bI8JolkARajnBCRAUdPGdenpdZEd_GmYh5KvixZleP_w6xg6l5JewgDo0UCNH37haDfWZ73u0MslOk5lMGiVuF36ow2pi3_0y1kX8-X4OyHlCSCPVdjspngx47_hpJhqFKiXvIibzGWeDzMGOYDuzMYhqzL6rQDtm15x8RQTsigGm95jtiNQlqUetwZ2b7besQivRQvWof8eBWGU5Umx4g4gVgqDw6SIOg"
                  referrerpolicy="no-referrer"
                />
                <div
                  class="absolute top-6 right-6 bg-surface/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md flex flex-col items-end"
                >
                  <span class="font-caption text-caption uppercase text-secondary font-bold"
                    >Substrate Status</span
                  >
                  <span class="font-title-md text-title-md text-primary font-bold"
                    >Thermodynamic Peak</span
                  >
                  <span class="font-caption text-caption text-on-surface-variant font-mono"
                    >Osmolarity: 290 mOsm/L</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PLATFORM 4: Medical ADME-Tox & IoT Ecosystem -->
      <section class="w-full px-margin py-space-xl bg-surface" id="adme-tox">
        <div class="max-w-[1440px] mx-auto flex flex-col gap-space-lg">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span class="font-mono text-label-sm text-secondary font-bold tracking-wider"
                >PLATFORM SPEC 04 // IN-SILICO PHARMACOKINETICS</span
              >
              <h2 class="font-headline-lg text-headline-lg text-on-surface mt-1">
                Medical ADME-Tox &amp; IoT Ecosystem
              </h2>
              <p class="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-2">
                Absorption, Distribution, Metabolism, Excretion, and Toxicity modeled in real time.
                We close the computational loop between IoT bio-sensors, connected lab synthesizers,
                and HIPAA/GDPR clinical cloud endpoints.
              </p>
            </div>
            <div class="flex items-center gap-space-xs">
              <span
                class="px-space-md py-space-xs rounded-full bg-surface-container font-caption text-caption text-on-surface-variant font-mono"
                >HIPAA • GDPR • SOC2 Type II</span
              >
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
            <div
              class="p-space-md bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary font-mono font-bold mb-space-sm"
                >
                  A
                </div>
                <h3 class="font-title-md text-title-md text-on-surface font-bold">Absorption</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Predicts intestinal Caco-2 permeability and transdermal flux constants based on
                  active hydration gradients and molecular weight.
                </p>
              </div>
              <div class="mt-space-md pt-space-xs font-mono text-caption text-secondary">
                <span>P_app: 14.8 × 10⁻⁶ cm/s</span>
              </div>
            </div>

            <div
              class="p-space-md bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary font-mono font-bold mb-space-sm"
                >
                  D
                </div>
                <h3 class="font-title-md text-title-md text-on-surface font-bold">Distribution</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Calculates unbound plasma fraction (fu) and volume of distribution (Vd) across
                  human blood-brain and capillary barriers.
                </p>
              </div>
              <div class="mt-space-md pt-space-xs font-mono text-caption text-secondary">
                <span>Vd_ss: 0.84 L/kg</span>
              </div>
            </div>

            <div
              class="p-space-md bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary font-mono font-bold mb-space-sm"
                >
                  M
                </div>
                <h3 class="font-title-md text-title-md text-on-surface font-bold">Metabolism</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Neural mapping of Cytochrome P450 (CYP3A4, CYP2D6) enzymatic clearance
                  trajectories and reactive metabolite screening.
                </p>
              </div>
              <div class="mt-space-md pt-space-xs font-mono text-caption text-secondary">
                <span>Intrinsic CL: 2.1 mL/min</span>
              </div>
            </div>

            <div
              class="p-space-md bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary font-mono font-bold mb-space-sm"
                >
                  E
                </div>
                <h3 class="font-title-md text-title-md text-on-surface font-bold">Excretion</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Monitors glomerular filtration rates and renal transporter interactions in
                  synchronization with worn CGM and ISF telemetry.
                </p>
              </div>
              <div class="mt-space-md pt-space-xs font-mono text-caption text-secondary">
                <span>Renal Clearance: 92%</span>
              </div>
            </div>

            <div
              class="p-space-md bg-surface-container-low rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  class="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-on-error-container font-mono font-bold mb-space-sm"
                >
                  T
                </div>
                <h3 class="font-title-md text-title-md text-on-surface font-bold">Toxicity</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  In-silico hERG cardiotoxicity, hepatotoxicity, and mitochondrial decoupling
                  probability scoring before animal dosing.
                </p>
              </div>
              <div class="mt-space-md pt-space-xs font-mono text-caption text-secondary">
                <span>hERG IC50: &gt; 30 μM (Safe)</span>
              </div>
            </div>
          </div>

          <div class="p-space-lg bg-surface-container rounded-xl flex flex-col gap-space-md">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Connected IoT Cloud-to-Assay Topology
                </h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Bidirectional, zero-trust telemetry pipeline supporting automated therapeutic closed
                  loops.
                </p>
              </div>
              <span
                class="hidden sm:inline-flex px-3 py-1 bg-surface text-secondary font-mono text-caption rounded-lg shadow-sm"
                >Latency: 14ms Global</span
              >
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-space-sm items-center">
              <div class="p-space-md bg-surface rounded-xl flex flex-col gap-1 shadow-sm">
                <div class="flex items-center justify-between text-secondary">
                  <mat-icon class="text-[20px]">sensors</mat-icon>
                  <span class="font-mono text-caption font-bold">NODE 01</span>
                </div>
                <h4 class="font-title-md text-title-md text-on-surface font-bold">
                  Wearable Sensors
                </h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  MicroNeedle Array • CGM Disk • Rx Tattoo fluorophore reader.
                </p>
              </div>
              <div class="p-space-md bg-surface rounded-xl flex flex-col gap-1 shadow-sm">
                <div class="flex items-center justify-between text-primary">
                  <mat-icon class="text-[20px]">router</mat-icon>
                  <span class="font-mono text-caption font-bold">NODE 02</span>
                </div>
                <h4 class="font-title-md text-title-md text-on-surface font-bold">
                  Edge Micro-Gateway
                </h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  RxApp telemetry hub running local anomaly heuristics with zero cloud tether.
                </p>
              </div>
              <div class="p-space-md bg-surface rounded-xl flex flex-col gap-1 shadow-sm">
                <div class="flex items-center justify-between text-secondary">
                  <mat-icon class="text-[20px]">cloud_sync</mat-icon>
                  <span class="font-mono text-caption font-bold">NODE 03</span>
                </div>
                <h4 class="font-title-md text-title-md text-on-surface font-bold">
                  ADME-Tox Cloud
                </h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  High-throughput tensor clusters solving stochastic pharmacokinetic equations.
                </p>
              </div>
              <div class="p-space-md bg-surface rounded-xl flex flex-col gap-1 shadow-sm">
                <div class="flex items-center justify-between text-primary">
                  <mat-icon class="text-[20px]">precision_manufacturing</mat-icon>
                  <span class="font-mono text-caption font-bold">NODE 04</span>
                </div>
                <h4 class="font-title-md text-title-md text-on-surface font-bold">
                  Clinical Actuation
                </h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Automated micro-dispensation or real-time clinician bedside telemetry alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Technical Whitepapers & Engineering Schematics CTA -->
      <section class="w-full px-margin py-space-xl bg-surface-container-high" id="schematics">
        <div
          class="max-w-[1440px] mx-auto rounded-2xl bg-surface p-space-lg lg:p-space-xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-lg"
        >
          <div class="flex flex-col gap-space-sm max-w-2xl">
            <div class="flex items-center gap-space-xs">
              <span
                class="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm"
                >RESTRICTED ACCESS // CLINICAL PARTNERS</span
              >
              <span class="font-mono text-caption text-on-surface-variant"
                >DOC-ID: RXD-PLATFORMS-2025</span
              >
            </div>
            <h3 class="font-headline-lg text-headline-lg text-on-surface">
              Download Full Engineering Schematics &amp; ADME Validation Whitepapers
            </h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Access complete CAD mechanical tolerances, micro-needle fluidic impedance models, BLE
              protocol documentation, and comparative toxicology trial data sets.
            </p>
            <div
              class="flex flex-wrap items-center gap-space-md pt-space-xs font-mono text-caption text-secondary"
            >
              <span class="flex items-center gap-1"
                ><mat-icon class="text-[16px]">picture_as_pdf</mat-icon> PDF • 44 Pages (14.2
                MB)</span
              >
              <span class="flex items-center gap-1"
                ><mat-icon class="text-[16px]">terminal</mat-icon> Step/IGES Models Included</span
              >
              <span class="flex items-center gap-1"
                ><mat-icon class="text-[16px]">verified_user</mat-icon> Institutional
                Verification</span
              >
            </div>
          </div>

          <form
            [formGroup]="dossierForm"
            (ngSubmit)="submitDossier()"
            class="w-full lg:w-96 flex flex-col gap-space-sm p-space-md bg-surface-container-low rounded-xl"
          >
            <span class="font-title-md text-title-md text-on-surface font-bold"
              >Request Dossier Package</span
            >

            @if (dossierSubmitted()) {
              <div
                class="p-space-md rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-start gap-space-sm"
              >
                <mat-icon class="text-[22px] shrink-0">task_alt</mat-icon>
                <div class="flex flex-col gap-1">
                  <span class="font-title-md text-title-md font-bold">Dossier Dispatched</span>
                  <p class="font-body-sm text-body-sm">
                    Access package for <strong>{{ dossierForm.controls.focus.value }}</strong> has
                    been queued for <strong>{{ dossierForm.controls.email.value }}</strong>.
                  </p>
                  <button
                    type="button"
                    (click)="dossierSubmitted.set(false)"
                    class="self-start mt-1 text-caption font-bold underline cursor-pointer"
                  >
                    Request another package
                  </button>
                </div>
              </div>
            } @else {
              <div class="flex flex-col gap-space-xs">
                <label
                  for="dossierEmail"
                  class="font-caption text-caption text-on-surface-variant font-medium"
                  >Institutional / Work Email</label
                >
                <input
                  id="dossierEmail"
                  formControlName="email"
                  class="w-full h-11 px-3 bg-surface rounded-lg text-on-surface text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="researcher@university.edu"
                  type="email"
                />
                @if (
                  dossierForm.controls.email.touched && dossierForm.controls.email.invalid
                ) {
                  <span class="text-caption text-error"
                    >Enter a valid institutional email address.</span
                  >
                }
              </div>
              <div class="flex flex-col gap-space-xs">
                <label
                  for="dossierFocus"
                  class="font-caption text-caption text-on-surface-variant font-medium"
                  >Primary Research Focus</label
                >
                <select
                  id="dossierFocus"
                  formControlName="focus"
                  class="w-full h-11 px-3 bg-surface rounded-lg text-on-surface text-body-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer"
                >
                  <option value="Continuous Glucose Telemetry (CGM)">
                    Continuous Glucose Telemetry (CGM)
                  </option>
                  <option value="Transdermal MicroNeedle Drug Delivery">
                    Transdermal MicroNeedle Drug Delivery
                  </option>
                  <option value="In-Silico ADME-Tox Computational Systems">
                    In-Silico ADME-Tox Computational Systems
                  </option>
                  <option value="Hummingbird Fuel Clinical Trials">
                    Hummingbird Fuel Clinical Trials
                  </option>
                </select>
              </div>
              <button
                type="submit"
                class="w-full mt-2 h-11 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
              >
                <mat-icon class="text-[18px]">lock_open</mat-icon> Request Schematics Access
              </button>
              <span class="font-caption text-caption text-on-surface-variant text-center"
                >Instant dispatch upon ORCID or academic email verification.</span
              >
            }
          </form>
        </div>
      </section>
    </div>
  `,
})
export class Platforms {
  readonly activeSection = signal('microneedles');
  readonly dossierSubmitted = signal(false);

  readonly dossierForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    focus: new FormControl('Continuous Glucose Telemetry (CGM)', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  submitDossier(): void {
    if (this.dossierForm.invalid) {
      this.dossierForm.markAllAsTouched();
      return;
    }
    this.dossierSubmitted.set(true);
  }
}
