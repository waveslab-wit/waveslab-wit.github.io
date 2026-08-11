# WAVES Laboratory Website Starter

A responsive, static lab website using the uploaded black-and-gold WAVES logo.

## Open the site

Open `index.html` in a browser. For the most reliable local preview, run a simple web server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Folder structure

- `index.html` — home page
- `people.html` — team directory
- `research.html` — research areas and projects
- `publications.html` — publication list
- `contact.html` — contact information and starter form
- `assets/css/styles.css` — full site theme
- `assets/js/site.js` — mobile navigation, active page, and footer year
- `assets/images/waves-logo.png` — uploaded WAVES logo
- `assets/images/people/` — profile photos
- `templates/person-template.html` — full profile page template
- `templates/person-card-snippet.html` — team card template
- `templates/publication-snippet.html` — publication template

## Add a new person

1. Add a square or landscape photo to `assets/images/people/`.
2. Copy `templates/person-template.html` into a new file. You may create a `people/` subfolder for profile pages, but update the relative asset paths if you do.
3. Replace all placeholder name, role, biography, links, interests, and project text.
4. Copy `templates/person-card-snippet.html` into `people.html`.
5. Update the card link to point to the person's profile page.

## Customize the university information

Search all HTML files for these placeholders:

- `Your University`
- `Your City, State ZIP`
- `waves@example.edu`
- `Department of Computing and Data Science`
- `Building and Room`

## Contact form

The included form uses `mailto:` and therefore opens the visitor's email client. For production, replace the form action with an approved university form handler or remove the form and retain the contact details.

## Colors

The main palette is defined at the top of `assets/css/styles.css`:

- Gold: `#fdbb18`
- Black: `#080808`
- Charcoal: `#161616`
- Soft gold: `#fff3c8`

## Deployment

The site contains only HTML, CSS, JavaScript, and images. It can be deployed to a university web server, GitHub Pages, Netlify, or any standard static host.
