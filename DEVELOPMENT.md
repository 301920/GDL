# Guide de Développement Local

Ce guide vous aide à développer et tester "Les Gardiens du Lys" localement.

## 🛠️ Configuration de l'Environnement

### Pré-requis

- **Node.js** (v14 ou supérieur) - Optionnel
- **Python** (v3.6 ou supérieur) - Pour le serveur local
- **Git** - Pour le contrôle de version
- Un éditeur de texte (VS Code recommandé)

### Installation

1. **Clonez le repository**:
   ```bash
   git clone https://github.com/yourusername/gardiens-du-lys.git
   cd gardiens-du-lys
   ```

2. **Installez les dépendances** (optionnel):
   ```bash
   # Avec npm (si vous avez Node.js)
   npm install
   ```

## 🚀 Serveur de Développement Local

### Option 1: Python (Recommandé - Aucune Installation)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Puis ouvrez: `http://localhost:8000`

### Option 2: Node.js avec http-server

```bash
# Installez http-server globalement
npm install -g http-server

# Lancez le serveur
http-server -p 8000
```

Puis ouvrez: `http://localhost:8000`

### Option 3: Live Server (VS Code)

1. Installez l'extension "Live Server" dans VS Code
2. Clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"

## 📂 Structure des Fichiers Importante

```
Gardiens du Lys/
├── index.html              # Point d'entrée principal
├── favicon.svg             # Logo
├── pages/
│   ├── home.html          # À modifier
│   ├── about.html         # À modifier
│   ├── contact.html       # À modifier
│   └── components/
│       ├── navbar.html    # Barre de navigation
│       └── footer.html    # Pied de page
├── assets/
│   ├── styles/
│   │   ├── main.css       # Styles principaux
│   │   └── responsive.css # Styles mobiles
│   ├── scripts/
│   │   └── app.js         # Logique SPA
│   ├── images/            # Ajouter vos images
│   ├── videos/            # Ajouter vos vidéos
│   └── fonts/             # Polices personnalisées
└── README.md
```

## 🎨 Modification du Contenu

### Changer le Contenu des Pages

1. **Home Page** - Modifiez `pages/home.html`
2. **About Page** - Modifiez `pages/about.html`
3. **Contact Page** - Modifiez `pages/contact.html`
4. **Navbar** - Modifiez `pages/components/navbar.html`
5. **Footer** - Modifiez `pages/components/footer.html`

### Ajouter des Images

1. Placez les images dans `assets/images/`
2. Référencez-les:
   ```html
   <img src="assets/images/mon-image.jpg" alt="Description">
   ```

### Ajouter une Vidéo

1. Placez la vidéo dans `assets/videos/`
2. Utilisez:
   ```html
   <video src="assets/videos/ma-video.mp4" controls></video>
   ```

## 🎨 Modification des Styles

### Thème Couleurs

Modifiez les variables CSS dans `assets/styles/main.css`:

```css
:root {
    --color-primary: #9d4edd;        /* Purple */
    --color-secondary: #c77dff;      /* Light Purple */
    --color-text: #d4d4f5;           /* Text color */
    --color-bg-dark: #0a0e27;        /* Dark background */
}
```

### Responsive Design

Pour les styles mobiles, modifiez `assets/styles/responsive.css`

### Ajouter une Polite Personnalisée

1. Placez le fichier de police dans `assets/fonts/`
2. Ajoutez dans `assets/styles/main.css`:
   ```css
   @font-face {
       font-family: 'MonPolice';
       src: url('../fonts/mapolice.woff2') format('woff2');
   }
   ```

## 🔧 Modification de la Logique

### Navigation Entre Pages

Dans `assets/scripts/app.js`, la fonction `navigateTo()` gère le changement de page:

```javascript
async function navigateTo(page, event) {
    // Charge la page dynamiquement
    // Appelle automatiquement setupContactForm() si page === 'contact'
}
```

### Ajouter une Nouvelle Page

1. Créez `pages/nouvelle-page.html`
2. Ajoutez un lien dans `pages/components/navbar.html`:
   ```html
   <a href="#" class="navbar-link" data-page="nouvelle-page"
      onclick="navigateTo('nouvelle-page', event)">
       Ma Page
   </a>
   ```
3. La navigation fonctionne automatiquement !

### Modifier le Formulaire de Contact

Modifiez `pages/contact.html` et mettez à jour le traitement dans `assets/scripts/app.js`:

```javascript
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Votre logique personnalisée
    });
}
```

## 🧪 Test et Debug

### Vérifier la Console

Ouvrez les DevTools: `F12` ou `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)

Console messages:
```
✅ Application initialized successfully
✅ Navbar loaded
✅ Footer loaded
✅ Page loaded: home
```

### Debug Mode

Modifiez `app.js` pour plus de logs:
```javascript
const DEBUG = true; // Mettez à true pour plus de logs
```

### Tester sur Mobile

1. Ouvrez les DevTools (`F12`)
2. Cliquez sur l'icône "Toggle device toolbar" (Ctrl+Shift+M)
3. Testez différentes résolutions d'écran

## 📝 Workflow de Développement Recommandé

1. **Lancez le serveur local**:
   ```bash
   python -m http.server 8000
   ```

2. **Ouvrez le navigateur**:
   ```
   http://localhost:8000
   ```

3. **Ouvrez DevTools** (`F12`) pour voir les logs

4. **Modifiez les fichiers** avec votre éditeur

5. **Rafraîchissez la page** (`F5`) pour voir les changements

6. **Committez vos changements**:
   ```bash
   git add .
   git commit -m "Description des changements"
   ```

## 🚨 Erreurs Courantes

### Erreur: "Cannot GET /"

- Assurez-vous d'être dans le bon répertoire
- Vérifiez que `index.html` existe
- Redémarrez le serveur

### Les styles/scripts ne se chargent pas

- Vérifiez que les chemins dans `index.html` sont corrects
- Ouvrez DevTools → Network pour voir les erreurs 404
- Vérifiez les permissions de fichiers

### Formulaire ne fonctionne pas

- Vérifiez que JavaScript est activé
- Ouvrez la console pour voir les erreurs
- Vérifiez l'id de l'élément `contactForm`

## 🔒 Secrets et Configuration

### Ne pas committer:

- Clés API
- Tokens
- Mots de passe
- Fichiers `.env`

### Utiliser `.gitignore`:

```
.env
.env.local
node_modules/
*.log
```

## 📚 Outils Recommandés

### Éditeurs

- **Visual Studio Code** - Gratuit, puissant
  - Extensions: Live Server, Prettier, ESLint, GitLens

### Serveurs

- **Python http.server** - Simple, pas de dépendances
- **Node.js http-server** - Plus de fonctionnalités

### Contrôle de Version

- **GitHub Desktop** - GUI facile pour Git
- **GitKraken** - Alternative professionnelle

### Validation

- **W3C Markup Validator** - Valide HTML
- **CSS Validator** - Valide CSS
- **Lighthouse** - Audite performance/SEO

## 💡 Bonnes Pratiques

1. **Testez avant de pousser** - Essayez localement
2. **Commits réguliers** - Committez souvent
3. **Messages clairs** - `"Fix navbar bug"` > `"fix"`
4. **Sauvegardez** - Poussez régulièrement sur GitHub
5. **Documentez** - Commentez le code complexe

## 🆘 Besoin d'Aide ?

1. Consultez le README.md
2. Vérifiez DEPLOYMENT.md pour les problèmes GitHub Pages
3. Ouvrez une issue sur GitHub
4. Contactez l'équipe sur Discord

---

**Happy Coding! 🚀 Gardiens du Lys**
