# Quick Start Guide - Les Gardiens du Lys

Bienvenue ! Ce guide vous aide à démarrer rapidement.

## ⚡ Démarrage Rapide (5 minutes)

### 1. Clonez le Repository
```bash
git clone https://github.com/yourusername/gardiens-du-lys.git
cd gardiens-du-lys
```

### 2. Lancez le Serveur Local
```bash
python -m http.server 8000
```

### 3. Ouvrez dans le Navigateur
```
http://localhost:8000
```

### 4. C'est tout ! 🎉

## 📸 Images et Vidéos Requises

Avant de déployer, vous devez ajouter :

### Dans `assets/images/`:
- `bg.jpg` - Image de fond principal (1920x1080 recommandé)
- `opacity.jpg` - Overlay d'opacité (pattern ou texture)

### Dans `assets/videos/`:
- `moon.mp4` - Vidéo de fond pour navbar (MP4 format)

### Générer les Images de Placeholder

Si vous n'avez pas ces images, voici comment les créer rapidement:

#### Option 1: ImageMagick
```bash
# Créer bg.jpg (gradient bleu-violet)
convert -size 1920x1080 gradient:'#0a0e27-#1a1a4a' assets/images/bg.jpg

# Créer opacity.jpg (motif)
convert -size 200x200 pattern:dots -blur 0x3 assets/images/opacity.jpg
```

#### Option 2: Python PIL
```python
from PIL import Image, ImageDraw, ImageFilter
import random

# Créer bg.jpg
img = Image.new('RGB', (1920, 1080), color='#0a0e27')
img.save('assets/images/bg.jpg')

# Créer opacity.jpg
img = Image.new('RGB', (200, 200), color='#1a1a1a')
draw = ImageDraw.Draw(img)
for i in range(100):
    x = random.randint(0, 200)
    y = random.randint(0, 200)
    draw.ellipse([x, y, x+20, y+20], fill='#9d4edd')
img.save('assets/images/opacity.jpg')
```

#### Option 3: Utiliser des Images Existantes
- Téléchargez des images gratuites sur Unsplash, Pexels, etc.
- Redimensionnez à 1920x1080
- Sauvegardez dans `assets/images/`

## 🎬 Créer la Vidéo de Fond

Pour `moon.mp4`, vous avez besoin d'une vidéo courte (5-10s):

### Option 1: FFmpeg
```bash
# Convertir un fichier vidéo existant
ffmpeg -i video.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k moon.mp4
```

### Option 2: Utiliser Une Vidéo Libre
- Sites: Pexels Videos, Pixabay, etc.
- Cherchez: "moon", "space", "stars"
- Téléchargez au format MP4

## ✏️ Personnaliser le Contenu

### 1. Modifier le Nom de l'Alliance
- Recherchez `Gardiens du Lys` dans tous les fichiers
- Remplacez par votre nom d'alliance

### 2. Ajouter votre Email/Discord
- Modifiez dans `pages/components/footer.html`
- Mettez à jour le formulaire dans `pages/contact.html`

### 3. Changer les Couleurs
Modifiez `assets/styles/main.css`:
```css
:root {
    --color-primary: #9d4edd;      /* Purple - Changez cette couleur */
    --color-secondary: #c77dff;    /* Light Purple */
}
```

### 4. Ajouter votre Logo
- Remplacez `favicon.svg` par votre logo
- Ou modifiez le fichier SVG existant

## 🚀 Déployer sur GitHub Pages

1. Créez un repository GitHub
2. Poussez votre code:
   ```bash
   git remote add origin https://github.com/yourusername/gardiens-du-lys.git
   git branch -M main
   git push -u origin main
   ```

3. Allez dans GitHub Settings → Pages
4. Sélectionnez `main` branch
5. Attendez 2-3 minutes
6. Votre site est live ! 🎉

Détails complets: Voir [DEPLOYMENT.md](DEPLOYMENT.md)

## 📖 Documentation Complète

- **README.md** - Vue d'ensemble du projet
- **DEPLOYMENT.md** - Guide GitHub Pages
- **DEVELOPMENT.md** - Guide de développement local
- **CONTRIBUTING.md** - Comment contribuer

## 🎯 Prochaines Étapes

- [ ] Ajouter vos images (bg.jpg, opacity.jpg)
- [ ] Ajouter votre vidéo (moon.mp4)
- [ ] Personnaliser le contenu des pages
- [ ] Tester localement
- [ ] Déployer sur GitHub Pages
- [ ] Configurer le domaine personnalisé (optionnel)
- [ ] Activer Google Analytics (optionnel)

## 🆘 Aide

### Erreurs Courantes

**Q: Le site ne s'affiche pas?**
A: Vérifiez que vous avez lancé le serveur et que vous êtes à `http://localhost:8000`

**Q: Les styles sont bizarres?**
A: Videz le cache (Ctrl+Shift+Delete) et rafraîchissez

**Q: Comment ajouter plus de pages?**
A: Créez un nouveau fichier dans `pages/` et ajoutez un lien dans `pages/components/navbar.html`

### Ressources

- [Documentation Git](https://git-scm.com/doc)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)

## 💬 Questions?

- Ouvrez une issue sur GitHub
- Contactez l'équipe sur Discord
- Consultez les guides: DEPLOYMENT.md ou DEVELOPMENT.md

---

**Prêt? Commençons! 🚀**

```bash
python -m http.server 8000
# Puis ouvrez http://localhost:8000
```
