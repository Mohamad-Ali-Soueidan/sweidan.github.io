```
                                                                                  
	.--.--.                                                                         
 /  /    '.                           ,--,         ,---,                          
|  :  /`. /          .---.          ,--.'|       ,---.'|                   ,---,  
;  |  |--`          /. ./|          |  |,        |   | :               ,-+-. /  | 
|  :  ;_         .-'-. ' |   ,---.  `--'_        |   | |   ,--.--.    ,--.'|'   | 
 \\  \\    `.     /___/ \\: |  /     \\ ,' ,'|     ,--.__| |  /       \\  |   |  ,"' | 
	`----.   \\ .-'.. '   ' . /    /  |'  | |    /   ,'   | .--.  .-. | |   | /  | | 
	__ \\  \\  |/___/ \\:     '.    ' / ||  | :   .   '  /  |  \\__\\/: . . |   | |  | | 
 /  /`--'  /.   \\  ' .\\   '   ;   /|'  : |__ '   ; |:  |  ," .--.; | |   | |  |/  
'--'.     /  \\   \\   ' \\ |'   |  / ||  | '.'||   | '/  ' /  /  ,.  | |   | |--'   
	`--'---'    \\   \\  |--" |   :    |;  :    ;|   :    :|;  :   .'   \\|   |/       
							 \\   \\ |     \\   \\  / |  ,   /  \\   \\  /  |  ,     .-./'---'        
								'---"       `----'   ---`-'    `----'    `--`---'                 
                                                                                   
```

# Ali Soueidan’s Personal Engineering Portfolio

Live: https://sweidan.dev

This is my developer portfolio focused on embedded systems, firmware, and hardware-software integration. It’s a clean, fast, static site that highlights projects, experience, and a downloadable resume.

## What’s inside
- index.html — landing page with hero, quick links, and recent projects preview
- projects.html — selected projects with brief technical notes
- experience.html — roles and impact bullets
- resume.pdf — current resume
- CNAME — custom domain configuration (sweidan.dev)
- .github/workflows/pages.yml — GitHub Pages deploy via Actions

## Tech stack
- HTML5 + Tailwind CSS (via CDN, no build step)
- GitHub Pages (Actions workflow)
- Zero backend; purely static

## Local development
Prereqs: Python 3

Start a local server (from this folder):
- npm start
Then open http://localhost:8080

## Deployment
- Push to main → GitHub Actions builds and deploys to GitHub Pages
- Custom domain: sweidan.dev (apex A/AAAA records → GitHub Pages, www CNAME → Mohamad-Ali-Soueidan.github.io)
- HTTPS enforced via GitHub Pages certificate

## Style
- Minimal, professional black/white palette
- Subtle borders and motion; responsive nav with mobile menu

## Author
Ali (Mohamad Ali) Soueidan
- GitHub: https://github.com/Mohamad-Ali-Soueidan
- Site: https://sweidan.dev

## License
ISC — see package.json
