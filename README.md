# Ben Holmes — Portfolio

Personal portfolio site, served with GitHub Pages at https://ben-holmes26.github.io/my-portfolio/

Static HTML, CSS and JavaScript with no build step. The design language (gold hexagons, Fraunces + Inter)
comes from [MomentHive](https://momenthive.amfteksolutions.co.uk/), one of the featured projects.

- `index.html`: single-page portfolio
- `styles/styles.css`: styles, including the light and dark themes
- `scripts/main.js`: mobile nav toggle and active-section highlighting
- `momenthive/`: a copy of the MomentHive marketing site (from the MomentHive-Web project), served at `/my-portfolio/momenthive/`.
  Its Log in / Sign up buttons hand off to the live web app.

## Keeping `momenthive/` in sync

`momenthive/` is a copy, so re-copy it whenever the MomentHive-Web site changes. The demo `login.html`/`signup.html` pages are
deliberately excluded. `contact.html` here uses bholmes26@hotmail.com instead of the not-yet-live hello@momenthive.app.
The "Most popular" badge on `pricing.html` is also removed here, because there are no customers yet. Guest downloads are
marked "coming soon" (pricing FAQ and plan list, about.html, and two spots on index.html), because they aren't enabled until
guest consent is handled. After re-copying, reapply these changes.

```powershell
Copy-Item C:\ClaudeWork\MomentHive-Web\index.html,C:\ClaudeWork\MomentHive-Web\about.html,C:\ClaudeWork\MomentHive-Web\pricing.html,C:\ClaudeWork\MomentHive-Web\contact.html momenthive\; Copy-Item C:\ClaudeWork\MomentHive-Web\styles,C:\ClaudeWork\MomentHive-Web\scripts,C:\ClaudeWork\MomentHive-Web\images momenthive\ -Recurse -Force
```
