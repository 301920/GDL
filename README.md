# Les Gardiens du Lys - Static Website

Une page Web statique hébergée sur GitHub Pages pour "Les Gardiens du Lys", une alliance française canadienne dans OGame.fr.

## 🌟 Features

- **Single Page Application (SPA)** - Navigation fluide sans rechargement complet
- **Design Responsive** - Optimisé pour desktop, tablet et mobile
- **Favicon SVG** - Symbole de la fleur de lys personnalisé
- **Navbar Animé** - Design moderne avec fond vidéo
- **Composants Réutilisables** - Navbar et footer chargés dynamiquement
- **Formulaire de Contact** - Pour les candidatures d'alliance
- **Support Multi-langue** - Prêt pour l'expansion
- **Progressive Web App Ready** - Structure pour PWA

## 📁 Structure du Projet

```
Gardiens du Lys/
├── index.html                 # Page principale
├── favicon.svg               # Logo SVG fleur de lys
├── pages/
│   ├── home.html            # Page d'accueil
│   ├── about.html           # À propos de l'alliance
│   ├── contact.html         # Contact & candidature
│   └── components/
│       ├── navbar.html      # Barre de navigation
│       └── footer.html      # Pied de page
├── assets/
│   ├── styles/
│   │   ├── main.css         # Styles principaux
│   │   └── responsive.css   # Styles responsive
│   ├── scripts/
│   │   └── app.js           # Logique SPA
│   ├── images/
│   │   ├── bg.jpg           # Fond d'écran principal
│   │   └── opacity.jpg      # Overlay d'opacité
│   ├── videos/
│   │   └── moon.mp4         # Vidéo fond navbar
│   └── fonts/
│       └── starcraft.css    # Configuration fonts

```

## 🎨 Design

### Couleurs
- **Primaire**: #9d4edd (Purple)
- **Secondaire**: #c77dff (Light Purple)
- **Accent**: #e0aaff (Very Light Purple)
- **Texte**: #d4d4f5 (Purple-gray)
- **Arrière-plan**: #0a0e27 (Dark Blue)

### Typographie
- **Headers**: StarCraft Font
- **Corps**: Black Ops One

### Effets
- Opacité du fond: 0.325
- Opacité vidéo navbar: 0.65
- Fond: Noir Onyx (#1a1a1a)

## 🚀 Installation

1. **Clonez le repository**
   ```bash
   git clone https://github.com/yourusername/gardiens-du-lys.git
   cd gardiens-du-lys
   ```

2. **Servez localement** (optionnel pour tester avant le déploiement)
   ```bash
   # Avec Python 3
   python -m http.server 8000

   # Ou avec Node.js (http-server)
   npx http-server
   ```

3. **Accédez à** `http://localhost:8000`

## 📦 Déploiement sur GitHub Pages

### Option 1: Repository Pages

1. Poussez votre code sur une branche `main`
2. Allez à **Settings → Pages**
3. Sélectionnez **Deploy from a branch**
4. Choisissez **main** comme branche source
5. Cliquez **Save**
6. Votre site sera disponible à `https://yourusername.github.io/gardiens-du-lys`

### Option 2: Project Pages

1. Poussez votre code sur une branche `gh-pages`
2. Les settings s'appliquent automatiquement
3. Le site sera disponible à `https://yourusername.github.io/gardiens-du-lys`

## 🔧 Configuration

### Modifier les informations d'alliance

1. **Navbar** - `pages/components/navbar.html`
   ```html
   <a href="#" class="navbar-brand" onclick="navigateTo('home', event)">
       Gardiens du Lys
   </a>
   ```

2. **Footer** - `pages/components/footer.html`
   - Email: `contact@gardiensdulys.com`
   - Discord: `Gardiens du Lys#0001`

3. **Contenu des pages** - `pages/{home,about,contact}.html`
   - Modifiez le texte, les titres, et les descriptions

### Ajouter des images

1. Placez vos images dans `assets/images/`
2. Modifiez les références dans `index.html` ou les pages

### Ajouter une vidéo de fond

1. Placez votre vidéo dans `assets/videos/`
2. Modifiez le CSS dans `assets/styles/main.css` (classe `.navbar::before`)

## 🎮 Navigation au Clavier

- **Alt + H** - Accueil
- **Alt + A** - À propos
- **Alt + C** - Contact

## 📧 Intégration Email

Pour que le formulaire de contact fonctionne :

### Option 1: FormSubmit.co (Gratuit)

1. Mettez à jour le formulaire pour utiliser FormSubmit:
   ```html
   <form action="https://formsubmit.co/your-email@example.com" method="POST">
   ```

### Option 2: Netlify Forms

Déployez sur Netlify au lieu de GitHub Pages pour les formulaires intégrés.

### Option 3: EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Intégrez le service dans `assets/scripts/app.js`

## 🔒 Sécurité

- Aucune donnée sensible stockée localement
- HTTPS forcé sur GitHub Pages
- Content Security Policy prêt
- Pas d'exécution de scripts externes dangereux

## ♿ Accessibilité

- Support du contraste élevé
- Navigation au clavier complète
- ARIA labels appropriés
- Support du lecteur d'écran
- Optimisation pour les appareils mobiles

## 🎬 Performance

- Lazy loading des images
- CSS et JS minifiés recommandés
- Support du Service Worker (PWA ready)
- Cache busting intégré

## 🤝 Contribution

Pour contribuer :

1. Fork le project
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Poussez à la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📜 License

Ce projet est sous la licence MIT. Voir `LICENSE` pour les détails.

## 📞 Support

- **Discord**: Gardiens du Lys
- **Email**: contact@gardiensdulys.com
- **OGame.fr**: Cherchez "Gardiens du Lys"

## 🎓 Tutoriels & Documentation

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [MDN - Web Development](https://developer.mozilla.org/)
- [OGame Community](https://www.ogame.fr/)

---

**Créé avec ⚔️ et 💜 pour les Gardiens du Lys**
