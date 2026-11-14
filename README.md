# The Deep Freeze

A searchable shared freezer inventory for Chris and Carston. Intended repository: `carstonroach/freezer`, separate from `carstonroach/bar`.

## Setup

Create a public GitHub repository named `freezer` with Issues enabled, upload these files including `.github/ISSUE_TEMPLATE/food.yml`, then enable GitHub Pages from `main` and `/ (root)` in Settings > Pages. The expected address after successful deployment is https://carstonroach.github.io/freezer/.

This version requires a public repository: the inventory is readable by anyone. It contains no tokens or passwords. Do not use it for private personal information.

## Everyday use

- Choose **Add food** and sign in to GitHub. Keep `[Food]` at the start of the entry title.
- Complete the food category, quantity, optional date frozen, location, and notes.
- Use **Details / update** to edit quantities. Close the GitHub issue when the food is gone. Reopen it to restore an accidentally closed entry.
- Return to the freezer page and select **Refresh** to see changes.
- To edit from a second GitHub account, the repository owner must add that account as a collaborator. No invitation has been sent automatically.

Only open food entries authored by repository owners, members, or collaborators are displayed. Pull requests and other users' issues are excluded. The page reads all pages of results and shows an error if GitHub is unavailable or rate-limited. It never treats a failed fetch as an empty freezer. Search covers names, categories, quantities, locations, dates, and notes. Oldest-first sorting puts missing dates last. Dates are organizational information, not food-safety advice.

No actual food has been entered because an inventory has not yet been supplied.

## Development

Static HTML, CSS, and JavaScript with no build step. Serve this directory using any local HTTP server. Run `node --test model.test.mjs` to validate parsing and filtering. No browser-local inventory or credentials are stored.
