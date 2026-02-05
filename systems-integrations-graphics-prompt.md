# Systems Integrations - Card Graphics Request

## Context
I have a portfolio website with a detail page showcasing 7 systems integration projects. Right now the cards are text-only and look flat. I need a header graphic/illustration for each card to make the page more visually engaging.

## Site Design System
- **Background:** Deep navy blue (`#001e3b`)
- **Card background:** Medium blue (`#004589`)
- **Accent/primary:** Light blue (`#89c4ff`)
- **Text:** Off-white (`#d8ebff`)
- **Font:** Poppins (clean, modern sans-serif)
- **Style:** Dark theme, minimal, professional - no gradients or flashy effects, just clean lines and subtle contrast

## What I Need
7 card header graphics, one per project. Each should be **roughly 800x400px** (2:1 ratio) so they work as a banner at the top of each card.

The graphics should feel like **simplified architectural diagrams or abstract flow illustrations** - think system-to-system connections, data flowing between boxes, that kind of thing. NOT screenshots, NOT stock photos. Keep them abstract/diagrammatic so they age well and don't misrepresent actual UIs.

Use only the color palette above (navy, medium blue, light blue, off-white). Transparent or navy backgrounds preferred so they blend with the cards.

---

## The 7 Projects

### 1. HR Dashboard
**What it does:** Single-page web app where HR submits onboarding/termination requests. It's the front door to the automation suite.
**Visual concept:** A simple dashboard layout silhouette - maybe a sidebar + main content area with a few form field outlines and action buttons. Abstract, not a real screenshot.
**Key elements to suggest:** Browser window frame, form fields, submit button, user icon

### 2. Onboarding Automation
**What it does:** Webhook triggered by HR form submission. Creates Entra ID account, assigns M365 licenses, sets manager, opens IT ticket - all in under 60 seconds.
**Visual concept:** A left-to-right flow: trigger event on the left, then a chain of automated steps (account creation -> license assignment -> ticket creation) flowing to the right. Arrows connecting nodes.
**Key elements to suggest:** Webhook trigger icon, sequential process nodes, checkmarks, clock/speed indicator

### 3. Employee Data Sync
**What it does:** Real-time sync from Paylocity (HRIS) to Entra ID (Azure AD). When someone's title, department, or manager changes in payroll, it automatically updates in the directory.
**Visual concept:** Two system blocks (Paylocity on left, Entra ID on right) with bidirectional or one-way arrows showing data flowing between them. Maybe small data field labels (title, dept, manager) traveling along the connection.
**Key elements to suggest:** Two system nodes, sync arrows, data field indicators, audit log icon

### 4. Salesforce Data Platform
**What it does:** Syncs Salesforce CRM data to Azure SQL every 5 minutes, with a React search frontend. Turns slow API queries into sub-second searches.
**Visual concept:** Three-tier architecture: Salesforce cloud on the left, Azure SQL database in the middle, React search UI on the right. Data flows left-to-right with a timer/clock icon indicating the 5-min sync cycle.
**Key elements to suggest:** Cloud/CRM icon, database cylinder, search interface, timer, arrows showing flow direction

### 5. SFTP File Monitor
**What it does:** Polls 6 directories across 3 SFTP servers every 5 minutes. When a file lands, it sends an email alert automatically.
**Visual concept:** Multiple server/folder icons on the left funneling into a central monitor/watcher, with an email/notification icon on the right. Maybe a small clock to indicate polling interval.
**Key elements to suggest:** Multiple folder icons, server icons, central monitoring node, email alert icon, clock

### 6. Termination Automation
**What it does:** Disables accounts in seconds when someone is terminated. Has deny-list protection so critical service accounts can't be accidentally disabled. Full audit trail.
**Visual concept:** A user account icon being switched off/disabled, with a shield icon representing the deny-list protection, and a log/audit trail flowing to the side. Should feel secure and controlled.
**Key elements to suggest:** User icon with disable/lock overlay, shield icon, audit log, security lock

### 7. Offshore Employee Database
**What it does:** Full-stack CRUD app for tracking offshore employees - skills, project allocations, department assignments. React frontend, Express API, Azure SQL backend.
**Visual concept:** A data table/grid silhouette showing rows of employee records, maybe with filter/search indicators. Simple database-backed web app feel.
**Key elements to suggest:** Data table grid, filter controls, database connection, user records

---

## Output Format
I need each graphic as a separate PNG file. Name them:
1. `si-hr-dashboard.png`
2. `si-onboarding.png`
3. `si-employee-sync.png`
4. `si-salesforce.png`
5. `si-sftp-monitor.png`
6. `si-termination.png`
7. `si-offshore-db.png`

Keep the style consistent across all 7 so they look like a cohesive set.
