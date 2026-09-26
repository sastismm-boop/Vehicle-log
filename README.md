# 🚗 Vehicle Log Manager

A lightweight, offline-first vehicle log and expense tracker built with vanilla web technologies, Capacitor, and GitHub Actions CI/CD. Designed for practical day-to-day use to monitor fuel economy, periodic maintenance, and overall vehicle running costs without cloud dependencies.

---

## ⚠️ Important Note on Updating the App

Because this app operates **100% offline** and stores your entries in local sandboxed device storage:

1. **Always Export Your Data First:** Before installing a new APK version, open your existing app and tap **Export CSV** (📤) to save your complete log history to your device.
2. **Uninstall Old Version:** Uninstall the currently installed version from your phone (required to avoid signature conflict errors during debug build updates).
3. **Install & Restore:** Install the newly downloaded APK, tap **Import CSV** (📥), and select your backup file. All entries, calculations, and metrics will be restored instantly.

---

## ✨ Features

- **Accurate Running Cost Engine:** Computes real-world cost-per-kilometer (`₹/km`) by combining total fuel spending with maintenance and service records.
- **Tank-to-Tank Mileage Tracking:** Calculates realistic average mileage (`km/L`) based on chronological odometer readings and fuel volume.
- **Unified Multi-Section CSV Engine:** 
  - 1-click full backup containing Fuel refills, Service history, and General expenses.
  - Smart universal parser supporting multi-section files and flexible date/number formatting.
- **Smart Timeline Sorting:**
  - Automatic chronological positioning for back-dated entries.
  - Millisecond timestamp tie-breakers for multiple logs entered on the same day.
  - Sorting controls for Date, Odometer, and Cost (High/Low).
- **Scheduled Auto-Backups:** Optional auto-download prompts (Daily, 7 Days, 15 Days) to prevent accidental data loss.
- **Mobile-Optimized UI:**
  - Full display safe-area support (avoids camera punch-holes and status bar clipping).
  - Clean Light & Dark theme toggle with persistent storage.
  - Native-styled custom dropdowns and category-level quick-add buttons.
  - Text-wrapping boundaries to keep long notes and receipts clean.

---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Single-file architecture)
- **Storage:** Sandboxed `localStorage` (100% offline, zero tracking)
- **Mobile Container:** Capacitor (Android)
- **CI/CD:** Automated APK compilation and releases via GitHub Actions

---

## 📥 Getting Started

1. Download the latest `.apk` from the [Releases](../../releases) tab.
2. Install it on your Android device (enable *Install from Unknown Sources* if prompted).
3. Start logging fuel, maintenance, or trip expenses on the go!# Vehicle-log
